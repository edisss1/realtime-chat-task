import { collection } from "firebase/firestore"
import { db } from "../firebase/config"

export async function createNewChannel(channelName: string) {
    const boardsRef = collection(db, "channels")
}
