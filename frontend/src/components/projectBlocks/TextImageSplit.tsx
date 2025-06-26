import type { FC } from "react";

interface TextImageSplitProps {
  text: string;
  image: string;
  reverse?: boolean;
}

const TextImageSplit: FC<TextImageSplitProps> = ({
  text,
  image,
  reverse = false,
}) => {
  return (
    <section className='w-full px-6 py-16 flex justify-center'>
      <div
        className={`max-w-[1000px] flex flex-col md:flex-row items-center gap-8 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <img
          src={image}
          alt='project visual'
          className='w-full md:w-1/2 rounded-2xl object-cover'
        />
        <p className='flex-1 text-[20px] md:text-[24px] font-cormorant text-justify text-background'>
          {text}
        </p>
      </div>
    </section>
  );
};

export default TextImageSplit;
