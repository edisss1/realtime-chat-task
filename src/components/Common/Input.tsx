type InputProps = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    label?: string
    placeholder?: string
    id?: string
    type?: string
    minWidth?: "min-w-[200px]" | "min-w-[300px]"
    maxWidth?: "max-w-[200px]" | "max-w-[300px]"
    className?: string
    icon?: React.ReactNode
}

const Input = ({
    value,
    onChange,
    label,
    id,
    type,
    placeholder,
    minWidth = "min-w-[300px]",
    maxWidth = "max-w-[300px]",
    className = `border-2 border-text p-2 rounded-lg ${minWidth} ${maxWidth}`,
    icon
}: InputProps) => {
    return (
        <div className="flex flex-col gap-2 relative">
            {label && <label htmlFor={id}>{label}</label>}
            <input
                className={className}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

            {icon && (
                <div className="absolute right-2 top-1/2 translate-y-1">
                    {icon}
                </div>
            )}
        </div>
    )
}
export default Input
