import ChatContainer from "../components/Common/ChatContainer"
import Sidebar from "../components/Chat/Sidebar"
import SidebarHeader from "../components/Common/SidebarHeader"
import ChannelActions from "../components/Channel/ChannelActions"
import ChannelsList from "../components/Channel/ChannelsList"
import type { TChannel } from "../types/Channel"
import { Outlet } from "react-router-dom"

// Component for displaying chat layout

const Chat = () => {
    const channels: TChannel[] = [
        { id: "1", name: "Channel 1" },
        { id: "2", name: "Channel 2" },
        { id: "3", name: "Channel 3" },
        { id: "4", name: "Channel 4" },
        { id: "5", name: "Channel 5" }
    ]

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
            </Sidebar>
        </ChatContainer>
    )
}
export default Chat
