type SidebarProps = {
    children: React.ReactNode
    className?: string
}

const Sidebar = ({ children, className }: SidebarProps) => {
    return (
        <aside className={`px-3 py-6 w-full max-w-[300px] ${className}`}>
            {children}
        </aside>
    )
}
export default Sidebar
