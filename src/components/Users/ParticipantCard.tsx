import CrownIcon from "../../assets/CrownIcon"

type ParticipantCardProps = {
    userName: string
    isOwner: boolean
}

const ParticipantCard = ({ userName, isOwner }: ParticipantCardProps) => {
    return (
        <div className="flex items-center gap-2 ">
            <div className="w-8 h-8 rounded-full bg-accent"></div>
            <p>{userName}</p>
            {isOwner && <CrownIcon />}
        </div>
    )
}
export default ParticipantCard
