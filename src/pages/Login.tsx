import { Link } from "react-router-dom"
import Button from "../components/Common/Button"
import Input from "../components/Common/Input"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center">
            <form className="flex flex-col items-center gap-5">
                <h1 className="text-3xl font-bold">Welcome back</h1>

                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    label="Email"
                    placeholder="johndoe@example.com"
                    minWidth={"min-w-[300px]"}
                />
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    label="Password"
                    placeholder="Enter your password"
                    minWidth={"min-w-[300px]"}
                />
                <Button
                    type="submit"
                    className="bg-accent w-full max-w-[300px] py-2 rounded-lg hover:-translate-y-0.5 transition-transform duration-200 "
                >
                    Login
                </Button>
            </form>
            <p>
                Don't have an account?{" "}
                <Link
                    className="hover:text-accent transition-colors duration-200 underline underline-offset-4"
                    to={"/"}
                >
                    Sign up
                </Link>
            </p>
        </div>
    )
}
export default Login
