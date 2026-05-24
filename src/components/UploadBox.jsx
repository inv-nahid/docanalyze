import { useState } from "react";
import api from "../api/axios";
import { useDocumentStore } from "../store/documentStore";

export default function UploadBox() {
    const [loading, setLoading] = useState(false);

    const { addDocument } = useDocumentStore();

    const handleUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            setLoading(true);

            const res = await api.post(
                "/upload",
                formData
            );

            addDocument(res.data);

            alert("Upload successful");
        } catch (err) {
            console.error(err);
            alert("Upload failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <label className="border-2 border-dashed border-zinc-700 rounded-2xl p-16 flex flex-col items-center justify-center cursor-pointer hover:border-zinc-500 transition">
            <input
                type="file"
                className="hidden"
                onChange={handleUpload}
            />

            <p className="text-xl font-semibold">
                {loading
                    ? "Uploading..."
                    : "Click to upload PDF"}
            </p>

            <p className="text-zinc-400 mt-2">
                PDF only
            </p>
        </label>
    );
}