import { Route, Routes } from "react-router-dom"
import Chat from "./pages/Chat"
import ChatMain from "./components/Chat/ChatMain"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />}>
                <Route path=":channelID" element={<ChatMain />} />
            </Route>
        </Routes>
    )
}
export default Router
