import type { TMessage } from "../../types/Message"
import Message from "./Message"

type MessageListProps = {
    messages: TMessage[]
}

const MessageList = ({ messages }: MessageListProps) => {
    return (
        <div className="h-full w-full flex flex-col gap-5 items-start justify-end px-5 py-2">
            {messages.map((message) => (
                <Message key={message.createdAt} message={message} />
            ))}
        </div>
    )
}
export default MessageList
