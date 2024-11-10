export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="w-16 h-16 relative">
                <div className="w-16 h-16 rounded-full absolute border-4 border-solid border-primary"></div>
                <div className="w-16 h-16 rounded-full animate-spin absolute border-4 border-solid border-primary border-t-transparent"></div>
            </div>
        </div>
    )
}