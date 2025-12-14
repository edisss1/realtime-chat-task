import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Common/Button"
import Input from "../components/Common/Input"
import { useState } from "react"
import EyeClosedIcon from "../assets/EyeClosedIcon"
import EyeOpenedIcon from "../assets/EyeOpenedIcon"
import { signUp } from "../services/signUp"
import { useAuthContext } from "../context/AuthContext"

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShowingPassword, setIsShowingPassword] = useState(false)
    const { setUser } = useAuthContext()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const user = await signUp(name, email, password)

        if (user) {
            setUser(user)
            navigate("/chat")
        }

        // clearing the form after signing up
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-5"
            >
                <h1 className="text-3xl font-bold">Welcome to Realtime Chat</h1>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    placeholder="John Doe"
                    minWidth={"min-w-[300px]"}
                />
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    placeholder="johndoe@example.com"
                    minWidth={"min-w-[300px]"}
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    placeholder="Enter your password"
                    minWidth={"min-w-[300px]"}
                    type={isShowingPassword ? "text" : "password"}
                    icon={
                        isShowingPassword ? (
                            <Button
                                type="button"
                                onClick={() => setIsShowingPassword(false)}
                            >
                                <EyeClosedIcon />
                            </Button>
                        ) : (
                            <Button
                                type="button"
                                onClick={() => setIsShowingPassword(true)}
                            >
                                <EyeOpenedIcon />
                            </Button>
                        )
                    }
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
