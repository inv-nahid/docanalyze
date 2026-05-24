export default function Loader() {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 w-fit">
            <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-white animate-bounce delay-100" />
                <div className="w-2 h-2 rounded-full bg-white animate-bounce delay-200" />
            </div>
        </div>
    );
}