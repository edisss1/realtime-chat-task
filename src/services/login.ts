import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config"
import type { TUser } from "../types/User"

export async function login(email: string, password: string) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)

        localStorage.setItem("userID", result.user.uid)

        const user: TUser = {
            id: result.user.uid,
            displayName: result.user.displayName,
            email: result.user.email
        }

        console.log(user)

        return user
    } catch (error) {
        console.error(error)
    }
}
