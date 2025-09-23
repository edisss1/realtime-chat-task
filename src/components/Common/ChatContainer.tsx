type ChatContainerProps = {
    children: React.ReactNode
}

const ChatContainer = ({ children }: ChatContainerProps) => {
    return (
        <div className="flex h-screen justify-between w-screen ">
            {children}
        </div>
    )
}
export default ChatContainer
