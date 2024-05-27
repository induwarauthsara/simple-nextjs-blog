
export default function Container({ children }) {
    return (
        <div className="max-w-[1100px] mx-auto flex flex-col min-h-screen bg-white border-l border-r drop-shadow-xl">{children}</div>
    )
}
