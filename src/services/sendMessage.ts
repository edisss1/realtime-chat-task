import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config"
import type { TMessage } from "../types/Message"

export async function sendMessage(
    text: string,
    channelID: string | undefined,
    userID: string | undefined,
    userName: string | null
) {
    if (text.trim().length === 0 || !channelID || !userID || !userName) return

    try {
        const messagesRef = collection(db, "messages")

        // new message
        const newMessage: TMessage = {
            text: text,
            channelID: channelID,
            senderID: userID,
            senderName: userName,
            createdAt: Date.now()
        }

        await addDoc(messagesRef, newMessage)
    } catch (error) {
        console.error(error)
    }
}
