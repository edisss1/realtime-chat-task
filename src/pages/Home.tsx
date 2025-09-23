import Button from "../components/Common/Button"
import Input from "../components/Common/Input"

const Home = () => {
    return (
        <div className="w-screen h-screen flex  items-center justify-center">
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-3xl font-bold">Welcome to Realtime Chat</h1>
                <Input
                    label="Your name"
                    placeholder="e.g. John Doe"
                    minWidth={"min-w-[300px]"}
                />
                <Input
                    label="Your name"
                    placeholder="e.g. John Doe"
                    minWidth={"min-w-[300px]"}
                />
                <Button className="bg-accent w-full max-w-[300px] py-2 rounded-lg hover:-translate-y-0.5 transition-transform duration-200 ">
                    Join Chat
                </Button>
            </div>
        </div>
    )
}
export default Home
