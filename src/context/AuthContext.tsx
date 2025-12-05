import { createContext, useEffect, useState } from "react"
import type { TUser } from "../types/User"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

type TAuthContext = {
    user: TUser | null
    loading: boolean
}

const AuthContext = createContext<TAuthContext | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<TUser | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const userID = localStorage.getItem("userID")

        if (!userID) {
            setLoading(false)
            return
        }

        const fetchUser = async () => {
            try {
                const userRef = doc(db, "users", userID)
                const userDocSnap = await getDoc(userRef)

                if (userDocSnap.exists()) {
                    setUser(userDocSnap.data() as TUser)
                } else {
                    console.log("No such document")
                }
            } catch (error) {
                console.error("Error fetching user:", error)
            }
        }

        fetchUser()
    }, [])

    return <AuthContext value={{ user, loading }}>{children}</AuthContext>
}
