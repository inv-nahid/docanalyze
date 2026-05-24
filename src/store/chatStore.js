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

            clearChat: () =>
                set({
                    messages: [],
                }),

            setLoading: (value) =>
                set({
                    loading: value,
                }),
        }),
        {
            name: "chat-storage",
        }
    )
);