import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

// function for getting channel name
export async function getCurrentChannelName(
    channelID: string | undefined
): Promise<string | undefined> {
    if (!channelID) return

    try {
        const channelsRef = collection(db, "channels")

        const channelDocRef = doc(channelsRef, channelID)
        const channelDocSnap = await getDoc(channelDocRef)

        let channelName: string = ""

        if (channelDocSnap.exists()) {
            channelName = channelDocSnap.data().name
        }

        return channelName
    } catch (error) {
        console.error(error)
    }
}
