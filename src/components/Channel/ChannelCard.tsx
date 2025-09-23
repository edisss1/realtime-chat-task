import { NavLink } from "react-router-dom"
import HasthagIcon from "../../assets/HasthagIcon"
import type { TChannel } from "../../types/Channel"

type ChannelCardProps = {
    channel: TChannel
}

const ChannelCard = ({ channel }: ChannelCardProps) => {
    return (
        <NavLink
            to={`/chat/${channel.id}`}
            className="flex items-center gap-2 p-1 rounded-lg hover:bg-accent/30 transition-colors duration-200"
        >
            <HasthagIcon />
            <p>{channel.name}</p>
        </NavLink>
    )
}
export default ChannelCard
