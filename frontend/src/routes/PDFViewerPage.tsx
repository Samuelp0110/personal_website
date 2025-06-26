import { useParams } from "react-router";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";

const PDFViewerPage = () => {
  const { slug } = useParams();
  const [numPages, setNumPages] = useState<number | null>(null);

  // Define a lookup map for PDFs
  const pdfMap: Record<string, string> = {
    fleco: "/pdfs/fleco-report.pdf",
  };

  const file = slug ? pdfMap[slug] : undefined;

  if (!file) {
    return (
      <main className='min-h-screen flex items-center justify-center bg-primary text-red-500 font-bold text-xl'>
        PDF not found.
      </main>
    );
  }

  return (
    <main className='min-h-screen flex flex-col items-center bg-primary px-4 py-12'>
      <div className='max-w-[1000px] w-full bg-white p-4 rounded-lg shadow-lg'>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (_, i) => (
            <Page
              key={i + 1}
              pageNumber={i + 1}
            />
          ))}
        </Document>
      </div>
    </main>
  );
};

export default PDFViewerPage;
