import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import ChatMain from "./components/Chat/ChatMain"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />}>
                <Route path=":channelID" element={<ChatMain />} />
            </Route>
        </Routes>
    )
}
export default Router
