import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
    return (
        <div className="h-screen flex bg-[#0b0f19] text-white">
            <Sidebar />

            <main className="flex-1 overflow-hidden">
                {children}
            </main>
        </div>
    );
}