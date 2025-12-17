type ButtonProps = {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    type?: "button" | "submit"
    disabled?: boolean
}

const Button = ({
    children,
    className,
    onClick,
    type,
    disabled
}: ButtonProps) => {
    return (
        <button
            style={{ cursor: "pointer" }}
            className={className}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
export default Button
