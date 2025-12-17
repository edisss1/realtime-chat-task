import type { TChannelParticipant } from "../../types/ChannelParticipant"
import ParticipantCard from "../Users/ParticipantCard"

type ParticipantsListProps = {
    participants: TChannelParticipant[] | undefined
    isOwner: boolean
}

const ParticipantsList = ({ participants, isOwner }: ParticipantsListProps) => {
    return (
        <div className="flex flex-col gap-4 mt-5">
            {participants?.map((participant) => (
                <ParticipantCard
                    isOwner={isOwner}
                    userName={participant.displayName}
                />
            ))}
        </div>
    )
}
export default ParticipantsList
