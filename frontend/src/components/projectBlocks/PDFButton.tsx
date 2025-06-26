import type { FC } from "react";
import { Link } from "react-router"; // correct package for v7
import Button from "../Button";

interface PDFButtonProps {
  slug: string; // Now we're using a slug instead of full URL
  label?: string;
}

const PDFButton: FC<PDFButtonProps> = ({
  slug,
  label = "View Full Report",
}) => {
  return (
    <div className='mt-8'>
      <Link to={`/pdfs/${slug}.pdf`}>
        <Button className='bg-accent border-body text-body hover:bg-body hover:text-accent hover:border-accent text-[20px] font-semibold'>
          {label}
        </Button>
      </Link>
    </div>
  );
};

export default PDFButton;
