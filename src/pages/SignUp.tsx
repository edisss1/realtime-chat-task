import { Link } from "react-router-dom"
import Button from "../components/Common/Button"
import Input from "../components/Common/Input"

const SignUp = () => {
    return (
        <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center">
            <form className="flex flex-col items-center gap-5">
                <h1 className="text-3xl font-bold">Welcome to Realtime Chat</h1>
                <Input
                    label="Name"
                    placeholder="John Doe"
                    minWidth={"min-w-[300px]"}
                />
                <Input
                    label="Email"
                    placeholder="johndoe@example.com"
                    minWidth={"min-w-[300px]"}
                />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    minWidth={"min-w-[300px]"}
                />
                <Button
                    type="submit"
                    className="bg-accent w-full max-w-[300px] py-2 rounded-lg hover:-translate-y-0.5 transition-transform duration-200 "
                >
                    Join Chat
                </Button>
            </form>
            <p>
                Already have an account?{" "}
                <Link
                    className="hover:text-accent transition-colors duration-200 underline underline-offset-4"
                    to={"/login"}
                >
                    Login
                </Link>
            </p>
        </div>
    )
}
export default SignUp
