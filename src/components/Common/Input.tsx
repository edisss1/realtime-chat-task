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
    className = `border-2 border-text p-2 rounded-lg ${minWidth} ${maxWidth}`
}: InputProps) => {
    return (
        <div className="flex flex-col gap-2">
            {label && <label htmlFor={id}>{label}</label>}
            <input
                className={className}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}
export default Input
