import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebase/config"
import type { TUser } from "../types/User"
import { doc, setDoc } from "firebase/firestore"

export async function signUp(name: string, email: string, password: string) {
    try {
        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )

        const user: TUser = {
            id: result.user.uid,
            displayName: name,
            email: email
        }

        const newUserDoc = doc(db, "users", user.id)
        await setDoc(newUserDoc, user)

        console.log("user created", user)

        localStorage.setItem("userID", user.id)

        return user
    } catch (error) {
        console.error(error)
    }
}
