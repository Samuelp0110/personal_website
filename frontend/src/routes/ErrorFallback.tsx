import type { FC } from "react";

const ErrorFallback: FC = () => {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center text-center px-6 py-12'>
      <h1 className='text-[48px] font-cormorant font-bold text-rtertiary mb-4'>
        🚧 Page Under Construction
      </h1>
      <p className='text-[24px] text-rfg font-cormorant'>
        This page is not developed yet. Check back soon!
      </p>
    </main>
  );
};

export default ErrorFallback;
