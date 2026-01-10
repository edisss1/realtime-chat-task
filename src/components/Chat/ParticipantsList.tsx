import type { TChannelParticipant } from "../../types/ChannelParticipant"
import ParticipantCard from "../Users/ParticipantCard"

type ParticipantsListProps = {
    participants: TChannelParticipant[] | undefined
    channelOwnerID: string | undefined
}

const ParticipantsList = ({
    participants,
    channelOwnerID
}: ParticipantsListProps) => {
    return (
        <div className="flex flex-col gap-4 mt-5">
            {participants?.map((participant) => (
                <ParticipantCard
                    key={participant.id}
                    isOwner={participant.id === channelOwnerID}
                    userName={participant.displayName}
                />
            ))}
        </div>
    )
}
export default ParticipantsList
