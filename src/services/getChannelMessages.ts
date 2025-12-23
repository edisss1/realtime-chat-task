import type { Unsubscribe } from "firebase/auth"
import { db } from "../firebase/config"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import type { TMessage } from "../types/Message"

export function getChannelMessages(
    channelID: string | undefined,
    onChange: (messages: TMessage[]) => void
): Unsubscribe | undefined {
    if (!channelID) return

    try {
        const messagesRef = collection(db, "messages")
        const q = query(messagesRef, where("channelID", "==", channelID))

        const unsubscribe = onSnapshot(q, async (snap) => {
            const messages: TMessage[] = snap.docs.map((doc) => ({
                text: doc.data().text,
                channelID: doc.data().channelID,
                senderID: doc.data().senderID,
                senderName: doc.data().senderName,
                createdAt: doc.data().createdAt,
                id: doc.id
            }))

            onChange(messages)
        })

        return unsubscribe
    } catch (error) {
        console.error("Error in getChannelMessages:", error)
    }
}
