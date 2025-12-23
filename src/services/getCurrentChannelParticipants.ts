import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import type { TChannelParticipant } from "../types/ChannelParticipant"

export async function getCurrentChannelParticipants(
    channelID: string | undefined
): Promise<TChannelParticipant[] | undefined> {
    if (!channelID) return

    try {
        const channelsRef = collection(db, "channels")

        const channelDocRef = doc(channelsRef, channelID)
        const channelDocSnap = await getDoc(channelDocRef)

        let participants: TChannelParticipant[] = []

        if (channelDocSnap.exists()) {
            // getting channel data
            const channelData = channelDocSnap.data()

            // separating participants ids from channel data for further use
            const channelParticipantsID = channelData.participants

            // getting participants data
            for (const participantID of channelParticipantsID) {
                const userDocRef = doc(db, "users", participantID)
                const userDocSnap = await getDoc(userDocRef)

                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data() as TChannelParticipant
                    participants.push(userData)
                }
            }
        }

        console.log("participants", participants)

        return participants
    } catch (error) {
        console.error(error)
    }
}
