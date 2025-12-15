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
import { getUserBoards } from "../services/getUserChannels"

// Component for displaying chat layout

const Chat = () => {
    const { channelID } = useParams()
    const { user } = useAuthContext()

    const [channels, setChannels] = useState<TChannel[]>([])
    const [currentChannel, setCurrentChannel] = useState<TChannel>()

    useEffect(() => {
        if (!user?.id) return

        const unsubscribe = getUserBoards(user.id, (channels) => {
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

    return (
        <ChatContainer>
            <Sidebar className="border-r-2">
                <SidebarHeader text="Realtime Chat App" />
                <ChannelActions />
                <ChannelsList channels={channels} />
            </Sidebar>
            <Outlet />
            <Sidebar className="justify-self-end border-l-2">
                <SidebarHeader text="Channel Participants" />
                <ParticipantsList
                    isOwner={currentChannel?.creatorID === user?.id}
                    participants={currentChannel?.participants}
                />
            </Sidebar>
        </ChatContainer>
    )
}
export default Chat
