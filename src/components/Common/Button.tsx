type ButtonProps = {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    type?: "button" | "submit"
}

const Button = ({ children, className, onClick, type }: ButtonProps) => {
    return (
        <button
            style={{ cursor: "pointer" }}
            className={className}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
export default Button
