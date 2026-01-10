import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import type { TChannel } from "../types/Channel"

export async function searchChannel(channelName: string) {
    if (channelName.trim() === "") return []
    try {
        const channelsRef = collection(db, "channels")
        const channelNameQuery = query(
            channelsRef,
            where("name", "==", channelName)
        )

        const channelNameQuerySnap = await getDocs(channelNameQuery)

        let results: TChannel[] = []

        if (channelNameQuerySnap.docs.length > 0) {
            results.push(
                ...channelNameQuerySnap.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    participants: doc.data().participants,
                    creatorID: doc.data().creatorID
                }))
            )
        }

        return results
    } catch (error) {
        console.error(error)
    }
}
