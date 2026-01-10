import ChatContainer from "../components/Common/ChatContainer"
import Sidebar from "../components/Common/Sidebar"
import SidebarHeader from "../components/Common/SidebarHeader"
import ChannelActions from "../components/Channel/ChannelActions"
import ChannelsList from "../components/Channel/ChannelsList"
import type { TChannel } from "../types/Channel"
import { Outlet, useParams } from "react-router-dom"
import ParticipantsList from "../components/Chat/ParticipantsList"
import { useAuthContext } from "../context/AuthContext"
import { useEffect, useState } from "react"
import { getUserChannels } from "../services/getUserChannels"
import type { TChannelParticipant } from "../types/ChannelParticipant"
import { getCurrentChannelParticipants } from "../services/getCurrentChannelParticipants"

// Component for displaying chat layout

const Chat = () => {
    // routing
    const { channelID } = useParams()

    // getting user from context
    const { user } = useAuthContext()

    // state variables
    const [channels, setChannels] = useState<TChannel[]>([])
    const [currentChannel, setCurrentChannel] = useState<TChannel>()
    const [participants, setParticipants] = useState<TChannelParticipant[]>([])

    useEffect(() => {
        if (!user?.id) return

        const unsubscribe = getUserChannels(user.id, (channels) => {
            setChannels(channels)
        })

        // cleanup
        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [user?.id])

    useEffect(() => {
        setCurrentChannel(channels.find((channel) => channel.id === channelID))
    }, [channelID])

    useEffect(() => {
        const fetchParticipants = async () => {
            const users = await getCurrentChannelParticipants(channelID)

            if (users) {
                setParticipants(users)
            } else {
                setParticipants([])
            }
        }

        fetchParticipants()
    }, [channelID])

    return (
        <ChatContainer>
            <Sidebar className="border-r-2">
                <SidebarHeader text="Realtime Chat App" />
                <ChannelActions />
                <ChannelsList channels={channels} />
            </Sidebar>
            <Outlet />
            {channelID && (
                <Sidebar className="justify-self-end border-l-2">
                    <SidebarHeader text="Channel Participants" />
                    <ParticipantsList
                        channelOwnerID={currentChannel?.creatorID}
                        participants={participants}
                    />
                </Sidebar>
            )}
        </ChatContainer>
    )
}
export default Chat
