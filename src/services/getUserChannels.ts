import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import type { TChannel } from "../types/Channel"

export function getUserChannels(
    userID: string | undefined,
    onChange: (channels: TChannel[]) => void
) {
    if (!userID) return
    try {
        const channelsRef = collection(db, "channels")

        const q = query(
            channelsRef,
            where("participants", "array-contains", userID)
        )

        const unsubscribe = onSnapshot(q, (snap) => {
            const channels: TChannel[] = snap.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                participants: doc.data().participants,
                creatorID: doc.data().creatorID
            }))

            onChange(channels)
        })

        return unsubscribe
    } catch (error) {
        console.error(error)
    }
}
