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

        try {
            const res = await api.post("/chat", {
                question,
            });

            addMessage({
                role: "assistant",
                content: res.data.answer,
            });
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
                    {loading && <Loader />}
                    <div ref={bottomRef} />
                </div>

                <div className="p-6 border-t border-zinc-800">
                    <div className="max-w-4xl mx-auto flex gap-3">
                        <input
                            value={input}
                            onChange={(e) =>
                                setInput(e.target.value)
                            }
                            placeholder="Ask anything..."
                            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
                        />

                        <button
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