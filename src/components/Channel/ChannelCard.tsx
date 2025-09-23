import { NavLink } from "react-router-dom"
import HasthagIcon from "../../assets/HasthagIcon"

type ChannelCardProps = {
    channelName: string
    channelID: string
}

const ChannelCard = ({ channelName, channelID }: ChannelCardProps) => {
    return (
        <NavLink
            to={`/channel/${channelID}`}
            className="flex items-center gap-2"
        >
            <HasthagIcon />
            <p>{channelName}</p>
        </NavLink>
    )
}
export default ChannelCard
