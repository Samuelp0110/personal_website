import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const pdfMap: Record<string, string> = {
  fleco: "/pdfs/fleco.pdf",
};

const PDFViewerPage = () => {
  const { slug } = useParams();
  const [file, setFile] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

  // Delay setting file until router param is resolved
  useEffect(() => {
    if (slug && pdfMap[slug]) {
      setFile(pdfMap[slug]);
    }
  }, [slug]);

  return (
    <main className='flex flex-col items-center bg-primary text-body px-6 py-12 min-h-screen'>
      <h1 className='text-[32px] md:text-[48px] font-bold font-cormorant mb-6'>
        PDF Viewer: {slug}
      </h1>

      {file ? (
        <div className='w-full max-w-4xl border border-background rounded-xl shadow-xl overflow-hidden bg-white p-4'>
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div
                key={`page-wrapper-${index}`}
                className={` pt-6 ${
                  index !== 0 ? "border-t-2 border-background" : ""
                }`}
              >
                <Page
                  pageNumber={index + 1}
                  width={800}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            ))}
          </Document>
        </div>
      ) : (
        <p className='text-red-500'>PDF not found or loading...</p>
      )}
    </main>
  );
};

export default PDFViewerPage;
