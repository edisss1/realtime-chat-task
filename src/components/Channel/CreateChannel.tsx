import PlusIcon from "../../assets/PlusIcon"
import Button from "../Common/Button"

type CreateChannelProps = {
    onClick: () => void
}

const CreateChannel = ({ onClick }: CreateChannelProps) => {
    return (
        <div className="relative group">
            <Button onClick={onClick} className="bg-accent p-2 rounded-full">
                <PlusIcon />
            </Button>
            {/*  Tooltip */}
            <p className="group-hover:opacity-100 opacity-0 absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 text-nowrap bg-text text-white px-2 py-1 rounded-lg transition-opacity duration-200">
                Create Channel
            </p>
        </div>
    )
}
export default CreateChannel
