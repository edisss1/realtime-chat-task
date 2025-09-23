import { useEffect } from "react"

interface DialogProps {
    children: React.ReactNode
    dialogRef: React.RefObject<HTMLDialogElement | null>
    header?: string
}

const Modal = ({ dialogRef, children }: DialogProps) => {
    const handleClickOutside = (e: MouseEvent) => {
        if (
            dialogRef.current &&
            !dialogRef.current.contains(e.target as Node)
        ) {
            dialogRef.current.close()
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside)
        return () => {
            window.removeEventListener("mousedown", handleClickOutside)
        }
    }, [handleClickOutside])

    return (
        <dialog
            open={dialogRef.current?.open}
            ref={dialogRef}
            className={`bg-background dark:bg-background-dark py-4 px-4 gap-2 w-full max-w-[340px] min-h-[210px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop:bg-text-primary/60 backdrop:backdrop-blur-sm backdrop:pointer-events-none`}
        >
            {children}
        </dialog>
    )
}
export default Modal
