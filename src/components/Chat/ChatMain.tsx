import { useParams } from "react-router-dom"
import MessageComposer from "./MessageComposer"
import { useEffect, useState } from "react"
import { getCurrentChannelData } from "../../services/getCurrentChannelData"
import type { TChannel } from "../../types/Channel"

const ChatMain = () => {
    const { channelID } = useParams()
    const [channelData, setChannelData] = useState<TChannel>()

    useEffect(() => {
        const fetchChannel = async () => {
            const data = await getCurrentChannelData(channelID)
            if (!data) return

            const { channelData } = data

            setChannelData(channelData)
        }

        fetchChannel()
    }, [])

    return (
        <main className="flex flex-col flex-1 items-center  justify-between h-full ">
            <div className="self-start w-full h-full px-5 pt-5">
                <h1 className="text-2xl font-medium">{channelData?.name}</h1>
            </div>
            <MessageComposer />
        </main>
    )
}
export default ChatMain
