import ChatContainer from "../components/Common/ChatContainer"
import Sidebar from "../components/Common/Sidebar"
import SidebarHeader from "../components/Common/SidebarHeader"
import ChannelActions from "../components/Channel/ChannelActions"
import ChannelsList from "../components/Channel/ChannelsList"
import type { TChannel } from "../types/Channel"
import { Outlet, useParams } from "react-router-dom"
import ParticipantsList from "../components/Chat/ParticipantsList"

// Component for displaying chat layout

const Chat = () => {
    const { channelID } = useParams()

    const channels: TChannel[] = [
        { id: "1", name: "Channel 1", participants: ["user1", "user2"] },
        { id: "2", name: "Channel 2", participants: ["user1", "user2"] },
        { id: "3", name: "Channel 3", participants: [] },
        { id: "4", name: "Channel 4", participants: [] },
        { id: "5", name: "Channel 5", participants: [] }
    ]

    const currentChannel = channels.find((ch) => ch.id === channelID)

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
                    isOwner
                    participants={currentChannel?.participants}
                />
            </Sidebar>
        </ChatContainer>
    )
}
export default Chat
