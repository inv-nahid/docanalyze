import { create } from "zustand";

export const useDocumentStore = create((set) => ({
    documents: [],

    setDocuments: (docs) =>
        set({
            documents: docs,
        }),

    addDocument: (doc) =>
        set((state) => ({
            documents: [...state.documents, doc],
        })),
}));