import MainLayout from "../layouts/MainLayout";
import UploadBox from "../components/UploadBox";

export default function UploadPage() {
    return (
        <MainLayout>
            <div className="p-8">
                <h1 className="text-3xl font-bold">
                    Upload Document
                </h1>

                <div className="mt-10">
                    <UploadBox />
                </div>
            </div>
        </MainLayout>
    );
}