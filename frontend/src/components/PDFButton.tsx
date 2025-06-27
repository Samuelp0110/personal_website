import type { FC, ReactNode } from "react";
import { Link } from "react-router";
import Button from "./Button";

interface PDFButtonProps {
  slug: string;
  children: ReactNode;
}

const PDFButton: FC<PDFButtonProps> = ({ slug, children }) => {
  return (
    <div className="mt-8">
      <Link to={`/pdf/${slug}`}>
        <Button>{children}</Button>
      </Link>
    </div>
  );
};

export default PDFButton;
