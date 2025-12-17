import { useParams } from "react-router-dom"
import MessageComposer from "./MessageComposer"
import { useEffect, useState } from "react"
import { getCurrentChannelName } from "../../services/getCurrentChannelName"

const ChatMain = () => {
    const { channelID } = useParams()
    const [channelName, setChannelName] = useState<string>("")

    useEffect(() => {
        const fetchChannel = async () => {
            const data = await getCurrentChannelName(channelID)
            if (!data) return

            setChannelName(data)
        }

        fetchChannel()
    }, [])

    return (
        <main className="flex flex-col flex-1 items-center  justify-between h-full ">
            <div className="self-start w-full h-full px-5 pt-5">
                <h1 className="text-2xl font-medium">{channelName}</h1>
            </div>
            <MessageComposer />
        </main>
    )
}
export default ChatMain
