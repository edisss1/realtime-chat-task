import { useState, type FormEvent } from "react"
import Button from "../Common/Button"
import { useAuthContext } from "../../context/AuthContext"
import { useParams } from "react-router-dom"
import { sendMessage } from "../../services/sendMessage"
import SendIcon from "../../assets/SendIcon"

const MessageComposer = () => {
    // geting user from context
    const { user } = useAuthContext()

    // getting channel ID
    const { channelID } = useParams()

    // state variables
    const [text, setText] = useState<string>("")

    // event handlers
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        await sendMessage(text, channelID, user?.id)

        // cleanup

        setText("")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex items-center justify-between gap-2 border-t-2 px-4 py-3 focus-within:border-accent transition-colors"
        >
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full focus:outline-none"
                placeholder="Type a message"
            />
            <Button
                type="submit"
                disabled={text.trim() === ""}
                className="cursor-pointer"
            >
                <SendIcon />
            </Button>
        </form>
    )
}
export default MessageComposer
