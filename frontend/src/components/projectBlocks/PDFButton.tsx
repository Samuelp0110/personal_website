import type { FC } from "react";
import Button from "../Button";

interface PDFButtonProps {
  url: string;
  label?: string;
}

const PDFButton: FC<PDFButtonProps> = ({ url, label = "View Full Report" }) => {
  return (
    <div className='mt-8'>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button className='bg-accent border-body text-body hover:bg-body hover:text-accent hover:border-accent text-[20px] font-semibold'>
          {label}
        </Button>
      </a>
    </div>
  );
};

export default PDFButton;
