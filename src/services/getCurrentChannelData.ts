import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import type { TChannel } from "../types/Channel"
import type { TChannelParticipant } from "../types/ChannelParticipant"

// function for getting channel name and participants
export async function getCurrentChannelData(channelID: string | undefined) {
    if (!channelID) return

    try {
        const channelsRef = collection(db, "channels")
        const usersRef = collection(db, "users")

        const channelDocRef = doc(channelsRef, channelID)
        const channelDocSnap = await getDoc(channelDocRef)

        let channelData: TChannel = {} as TChannel
        let channelParticipants: TChannelParticipant[] = []

        if (channelDocSnap.exists()) {
            channelData = channelDocSnap.data() as TChannel

            const channelParticipantIDs: string[] = channelData.participants

            for (const participantID of channelParticipantIDs) {
                const userDocRef = doc(usersRef, participantID)
                const userDocSnap = await getDoc(userDocRef)

                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data() as TChannelParticipant
                    channelParticipants.push(userData)
                }
            }
        }

        return { channelData, channelParticipants }
    } catch (error) {
        console.error(error)
    }
}
