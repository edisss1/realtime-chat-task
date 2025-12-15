import { useState, type FormEvent } from "react"
import Button from "../Common/Button"
import Input from "../Common/Input"
import { createNewChannel } from "../../services/createNewChannel"
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

// passing dialog ref as a prop to close the modal after channel creation
type CreateChannelModalProps = {
    dialogRef: React.RefObject<HTMLDialogElement | null>
}

const CreateChannelModal = ({ dialogRef }: CreateChannelModalProps) => {
    const [newChannelName, setNewChannelName] = useState("")
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const channelID = await createNewChannel(newChannelName, user?.id)

        // cleanup
        setNewChannelName("")

        // redirecting to the channel and closing the modal
        dialogRef.current?.close()
        navigate(`/chat/${channelID}`)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="text-xl">Create a channel</h1>
            <Input
                value={newChannelName}
                onChange={(e) => setNewChannelName(e.target.value)}
                label="Name"
                placeholder="channel-name"
            />
            <Button className="bg-accent py-3 rounded-lg" type="submit">
                Create
            </Button>
        </form>
    )
}
export default CreateChannelModal
