import Search from "../Common/Search"
import CreateChannel from "./CreateChannel"

const ChannelActions = () => {
    return (
        <div className="flex items-center gap-3">
            <Search />
            <CreateChannel />
        </div>
    )
}
export default ChannelActions
