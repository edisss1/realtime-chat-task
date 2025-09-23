import { useParams } from "react-router-dom"
import MessageComposer from "./MessageComposer"

const ChatMain = () => {
    const { channelID } = useParams()

    return (
        <main className="flex flex-col flex-1 items-center  justify-between h-full ">
            <div className="self-start w-full h-full px-5 pt-5">
                <h1 className="text-2xl font-medium">
                    Channel name {channelID}
                </h1>
            </div>
            <MessageComposer />
        </main>
    )
}
export default ChatMain
