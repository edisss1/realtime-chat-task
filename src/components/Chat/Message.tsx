import { convertDate } from "../../services/convertDate"
import type { TMessage } from "../../types/Message"

type MessageProps = {
    message: TMessage
}

const Message = ({ message }: MessageProps) => {
    return (
        <div className="flex flex-col gap-2 ">
            <div className="flex items-center justify-start gap-2">
                <div className="rounded-full bg-accent w-10 h-10" />
                <p>{message.senderName}</p>
                <p className="text-sm">{convertDate(message.createdAt)}</p>
            </div>
            <p>{message.text}</p>
        </div>
    )
}
export default Message
