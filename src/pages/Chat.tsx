import ChatContainer from "../components/Common/ChatContainer"
import Sidebar from "../components/Chat/Sidebar"
import ChatMain from "../components/Chat/ChatMain"
import SidebarHeader from "../components/Common/SidebarHeader"
import ChannelActions from "../components/Channel/ChannelActions"

const Chat = () => {
    return (
        <ChatContainer>
            <Sidebar className="border-r-2">
                <SidebarHeader text="Realtime Chat App" />
                <ChannelActions />
            </Sidebar>
            <ChatMain />
            <Sidebar className="justify-self-end border-l-2">
                <SidebarHeader text="Channel Participants" />
            </Sidebar>
        </ChatContainer>
    )
}
export default Chat
