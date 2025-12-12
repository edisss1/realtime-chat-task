import { createContext, useContext, useEffect, useState } from "react"
import type { TUser } from "../types/User"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { useNavigate } from "react-router-dom"

type TAuthContext = {
    user: TUser | undefined
    loading: boolean
    setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>
}

const AuthContext = createContext<TAuthContext | null>(null)

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuthContext must be used within a AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<TUser | undefined>(undefined)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

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
                    navigate("/chat")
                    console.log("user fetched", userDocSnap.data())
                } else {
                    console.log("No such document")
                }
            } catch (error) {
                console.error("Error fetching user:", error)
            }
        }

        fetchUser()
        setLoading(false)
    }, [])

    return (
        <AuthContext value={{ user, loading, setUser }}>{children}</AuthContext>
    )
}
