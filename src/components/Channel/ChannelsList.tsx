import type { TChannel } from "../../types/Channel"
import ChannelCard from "./ChannelCard"

type ChannelsListProps = {
    channels: TChannel[]
}

const ChannelsList = ({ channels }: ChannelsListProps) => {
    return (
        <div className="flex flex-col gap-2 mt-9">
            {channels.map((channel) => (
                <ChannelCard key={channel.id} channel={channel} />
            ))}
        </div>
    )
}
export default ChannelsList
