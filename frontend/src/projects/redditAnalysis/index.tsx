import meta from "./metadata";
import PDFButton from "../../components/PDFButton";

const RedditPage = () => {
  return (
    <main className="bg-primary w-full flex flex-col items-center mb-12">
      <PDFButton slug={meta.slug}>See the Report</PDFButton>
    </main>
  );
};

export default RedditPage;
