import { useParams } from "react-router-dom"
import MessageComposer from "./MessageComposer"
import { useEffect, useState, useRef } from "react"
import { getCurrentChannelName } from "../../services/getCurrentChannelName"
import MessageList from "./MessageList"
import { getChannelMessages } from "../../services/getChannelMessages"
import type { TMessage } from "../../types/Message"

const ChatMain = () => {
    const { channelID } = useParams()
    const [channelName, setChannelName] = useState<string>("")
    const [messages, setMessages] = useState<TMessage[]>([])
    const unsubscribeRef = useRef<(() => void) | null>(null)

    useEffect(() => {
        const fetchChannel = async () => {
            if (!channelID) return

            const data = await getCurrentChannelName(channelID)
            if (!data) return

            setChannelName(data)
        }

        fetchChannel()
    }, [channelID])

    useEffect(() => {
        if (!channelID) return

        console.log("Setting up listener for channel:", channelID)

        // Clear previous messages to avoid showing old channel's messages
        setMessages([])

        // Clean up previous listener if it exists
        if (unsubscribeRef.current) {
            console.log("Cleaning up previous listener")
            unsubscribeRef.current()
            unsubscribeRef.current = null
        }

        const unsubscribe = getChannelMessages(channelID, (newMessages) => {
            console.log(
                "Received messages for channel:",
                channelID,
                newMessages
            )
            // Verify messages belong to current channel
            const filteredMessages = newMessages.filter(
                (msg) => msg.channelID === channelID
            )
            setMessages(filteredMessages)
        })

        // Store unsubscribe function in ref for cleanup
        if (unsubscribe) {
            unsubscribeRef.current = unsubscribe
        }

        return () => {
            if (unsubscribeRef.current) {
                console.log("Cleanup effect running for channel:", channelID)
                unsubscribeRef.current()
                unsubscribeRef.current = null
            }
        }
    }, [channelID])

    return (
        <main className="flex flex-col flex-1 items-center justify-between h-full">
            <h1 className="self-start text-2xl font-medium p-5">
                {channelName}
            </h1>
            <MessageList messages={messages} />
            <MessageComposer />
        </main>
    )
}

export default ChatMain
