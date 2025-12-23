import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config"

export async function createNewChannel(
    channelName: string,
    userID: string | undefined
): Promise<string | undefined> {
    if (!userID) return

    try {
        const channelsRef = collection(db, "channels")

        if (channelName.length > 6) {
            const newChannel = {
                name: channelName,
                participants: [userID],
                creatorID: userID
            }

            // getting id of the channel for redirecting
            const channelDocRef = await addDoc(channelsRef, newChannel)

            return channelDocRef.id
        }
    } catch (error) {
        console.error(error)
    }
}
