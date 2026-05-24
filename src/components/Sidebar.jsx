import { Link, useLocation } from "react-router-dom";
import { MessageSquare, Upload, Home } from "lucide-react";

export default function Sidebar() {
    const location = useLocation();

    const links = [
        {
            name: "Dashboard",
            path: "/",
            icon: Home,
        },
        {
            name: "Chat",
            path: "/chat",
            icon: MessageSquare,
        },
        {
            name: "Upload",
            path: "/upload",
            icon: Upload,
        },
    ];

    return (
        <aside className="w-64 border-r border-zinc-800 p-4">
            <h1 className="text-2xl font-bold mb-8">
                DocAI
            </h1>

            <nav className="space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center gap-3 p-3 rounded-xl transition
              ${location.pathname === link.path
                                    ? "bg-zinc-800"
                                    : "hover:bg-zinc-900"
                                }`}
                        >
                            <Icon size={18} />
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}