// frontend/src/routes/PDFViewerPage.tsx
import { useParams } from "react-router";

const PDFViewerPage = () => {
  const { slug } = useParams();
  const fileUrl = slug ? `/pdfs/${slug}.pdf` : null;

  return (
    <main className="flex flex-col items-center bg-primary text-body px-6 py-12 min-h-screen">
      {/* <h1 className="text-[32px] md:text-[48px] font-bold font-cormorant mb-6">
        {slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : ""}
      </h1> */}

      {fileUrl ? (
        <iframe
          src={fileUrl}
          title={`PDF Viewer for ${slug}`}
          className="w-full max-w-4xl h-[80vh] border-2 border-background rounded-xl shadow-xl"
        />
      ) : (
        <p className="text-red-500">PDF not found</p>
      )}
    </main>
  );
};

export default PDFViewerPage;
