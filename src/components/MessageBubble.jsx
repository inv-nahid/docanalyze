import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MessageBubble({ message }) {
    const isUser = message.role === "user";

    return (
        <div
            className={`max-w-[75%] rounded-2xl px-4 py-3
        ${isUser
                    ? "bg-blue-600 ml-auto"
                    : "bg-zinc-900 border border-zinc-800"
                }`}
        >
            <div className="prose prose-invert max-w-none prose-p:leading-7">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}