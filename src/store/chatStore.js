import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useChatStore = create(
    persist(
        (set) => ({
            messages: [],
            loading: false,

            addMessage: (message) =>
                set((state) => ({
                    messages: [
                        ...state.messages,
                        message,
                    ],
                })),

            updateLastMessage: (content) =>
                set((state) => {
                    const updated = [...state.messages];

                    updated[updated.length - 1].content =
                        content;

                    return {
                        messages: updated,
                    };
                }),

            setLoading: (value) =>
                set({
                    loading: value,
                }),

            clearChat: () =>
                set({
                    messages: [],
                }),
        }),
        {
            name: "chat-storage",
        }
    )
);