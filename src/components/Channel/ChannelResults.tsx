import { useAuthContext } from "../../context/AuthContext"
import { joinChannel } from "../../services/joinChannel"
import type { TChannel } from "../../types/Channel"
import Button from "../Common/Button"
import ChannelCard from "./ChannelCard"

type ChannelResultsProps = {
    channelResults: TChannel[] | undefined
}

const ChannelResults = ({ channelResults }: ChannelResultsProps) => {
    const { user } = useAuthContext()

    return (
        <div className="flex flex-col gap-4 p-2 shadow-lg">
            {channelResults?.map((channel) => (
                <Button onClick={() => joinChannel(channel.id, user?.id)}>
                    <ChannelCard key={channel.id} channel={channel} />
                </Button>
            ))}
        </div>
    )
}
export default ChannelResults
