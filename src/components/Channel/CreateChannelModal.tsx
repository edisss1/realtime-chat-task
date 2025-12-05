import { useState } from "react"
import Button from "../Common/Button"
import Input from "../Common/Input"

const CreateChannelModal = () => {
    const [newChannelName, setNewChannelName] = useState("")

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
        >
            <h1 className="text-xl">Create a channel</h1>
            <Input label="Name" placeholder="channel-name" />
            <Button className="bg-accent py-3 rounded-lg" type="submit">
                Create
            </Button>
        </form>
    )
}
export default CreateChannelModal
