import { useRef } from "react"
import Modal from "../Common/Modal"
import Search from "../Common/Search"
import CreateChannel from "./CreateChannel"

const ChannelActions = () => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    const openModal = () => {
        dialogRef.current?.showModal()
    }

    return (
        <>
            <div className="flex items-center gap-3 mt-3">
                <Search />
                <CreateChannel onClick={openModal} />
            </div>
            <Modal dialogRef={dialogRef}>test</Modal>
        </>
    )
}
export default ChannelActions
