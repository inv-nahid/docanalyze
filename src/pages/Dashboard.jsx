import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
    return (
        <MainLayout>
            <div className="p-8">
                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <p className="text-zinc-400 mt-2">
                    Upload documents and start chatting.
                </p>

                <div className="grid grid-cols-3 gap-6 mt-10">
                    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                        <h2 className="text-xl font-semibold">
                            Documents
                        </h2>

                        <p className="text-4xl mt-4">
                            0
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                        <h2 className="text-xl font-semibold">
                            Chats
                        </h2>

                        <p className="text-4xl mt-4">
                            0
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                        <h2 className="text-xl font-semibold">
                            Storage
                        </h2>

                        <p className="text-4xl mt-4">
                            --
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}