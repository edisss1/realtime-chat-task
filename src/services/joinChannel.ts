import {
    arrayUnion,
    collection,
    doc,
    getDoc,
    updateDoc
} from "firebase/firestore"
import { db } from "../firebase/config"

export async function joinChannel(
    channelID: string,
    userID: string | undefined
) {
    if (!channelID || !userID) return

    try {
        const channelsRef = collection(db, "channels")
        const channelRef = doc(channelsRef, channelID)

        // checking if user is already a participants of that channel
        const channelDocSnap = await getDoc(channelRef)

        if (channelDocSnap.exists()) {
            const channelData = channelDocSnap.data()

            if (channelData.participants.includes(userID)) return
        }

        await updateDoc(channelRef, {
            participants: arrayUnion(userID)
        })
    } catch (error) {
        console.error(error)
    }
}
