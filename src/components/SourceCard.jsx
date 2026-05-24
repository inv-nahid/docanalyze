export default function SourceCard({
    source,
}) {
    return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 mt-3">
            <p className="text-sm text-zinc-300">
                {source.text}
            </p>

            <p className="text-xs text-zinc-500 mt-3">
                Page {source.page}
            </p>
        </div>
    );
}