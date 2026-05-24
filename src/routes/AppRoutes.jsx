import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ChatPage from "../pages/ChatPage";
import UploadPage from "../pages/UploadPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/upload" element={<UploadPage />} />
            </Routes>
        </BrowserRouter>
    );
}