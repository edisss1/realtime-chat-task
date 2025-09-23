import Button from "../Common/Button"

const MessageComposer = () => {
    return (
        <form className="w-full flex items-center justify-between gap-2 border-t-2 px-4 py-3 focus-within:border-accent transition-colors">
            <input
                className="w-full focus:outline-none"
                placeholder="Type a message"
            />
            <Button className="">Send</Button>
        </form>
    )
}
export default MessageComposer
