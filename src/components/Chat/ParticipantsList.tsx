import type { TChannel } from "../../types/Channel"
import ParticipantCard from "../Users/ParticipantCard"

type ParticipantsListProps = {
    participants: TChannel["participants"] | undefined
    isOwner: boolean
}

const ParticipantsList = ({ participants, isOwner }: ParticipantsListProps) => {
    return (
        <div className="flex flex-col gap-4 mt-5">
            {participants?.map((participant) => (
                <ParticipantCard isOwner={isOwner} userName={participant} />
            ))}
        </div>
    )
}
export default ParticipantsList
