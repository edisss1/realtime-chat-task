import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config"
import type { TMessage } from "../types/Message"

export async function sendMessage(
    text: string,
    channelID: string | undefined,
    userID: string | undefined
) {
    if (text.trim().length === 0 || !channelID || !userID) return

    try {
        const messagesRef = collection(db, "messages")

        // new message
        const newMessage: TMessage = {
            text: text,
            channelID: channelID,
            senderID: userID
        }

        await addDoc(messagesRef, newMessage)
    } catch (error) {
        console.error(error)
    }
}
