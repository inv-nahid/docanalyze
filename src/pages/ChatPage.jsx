import { useState, useEffect, useRef } from "react";
import { useChatStore } from "../store/chatStore";
import MainLayout from "../layouts/MainLayout";
import api from "../api/axios";
import MessageBubble from "../components/MessageBubble";
import Loader from "../components/Loader";

export default function ChatPage() {
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    const {
        messages,
        addMessage,
        updateLastMessage,
        loading,
        setLoading,
    } = useChatStore();

    const handleSend = async () => {
        if (!input.trim()) return;

        const question = input;

        addMessage({
            role: "user",
            content: question,
        });

        setInput("");
        setLoading(true);

        addMessage({
            role: "assistant",
            content: "",
            sources: [],
        });

        try {
            const response = await fetch(
                "http://localhost:8000/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        question,
                    }),
                }
            );

            const reader =
                response.body.getReader();

            const decoder = new TextDecoder();

            let fullText = "";

            while (true) {
                const { done, value } =
                    await reader.read();

                if (done) break;

                const chunk =
                    decoder.decode(value);

                fullText += chunk;

                updateLastMessage(fullText);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className="h-screen flex flex-col">
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {messages.length === 0 && (
                        <div className="h-full flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold">
                                    Ask your documents
                                </h1>

                                <p className="text-zinc-400 mt-3">
                                    Upload PDFs and chat with them.
                                </p>
                            </div>
                        </div>
                    )}

                    {messages.map((msg, index) => (
                        <MessageBubble
                            key={index}
                            message={msg}
                        />
                    ))}
                    <div ref={bottomRef} />
                </div>

                <div className="p-6 border-t border-zinc-800">
                    <div className="max-w-4xl mx-auto flex gap-3">
                        <input
                            value={input}
                            disabled={loading}
                            onChange={(e) =>
                                setInput(e.target.value)
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSend();
                                }
                            }}
                            placeholder="Ask anything..."
                            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
                        />

                        <button
                            disabled={loading}
                            onClick={handleSend}
                            className="bg-white text-black px-6 rounded-2xl font-semibold"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}