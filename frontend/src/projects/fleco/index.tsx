import type { FC } from "react";
import flecoMeta from "./metadata";
import previewImage from "../../assets/no_image.jpg"; // ensure this image exists

const FlecoPage: FC = () => {
  return (
    <main className='bg-primary w-full px-6 py-24 flex flex-col items-center'>
      {/* Title and Subtitle */}
      <section className='max-w-[1000px] w-full flex flex-col items-start gap-6 mb-12'>
        <h1 className='text-[40px] md:text-[56px] font-cormorant font-bold text-background'>
          {flecoMeta.title}
        </h1>
        <p className='text-[24px] md:text-[28px] text-background font-cormorant'>
          {flecoMeta.description}
        </p>
      </section>

      {/* Image */}
      <section className='max-w-[1000px] w-full mb-12'>
        <img
          src={previewImage}
          alt={`Preview of ${flecoMeta.title}`}
          className='w-full rounded-2xl object-cover max-h-[500px]'
        />
      </section>

      {/* Tags (optional) */}
      <section className='mb-12'>
        <div className='flex flex-wrap gap-4'>
          {flecoMeta.tags.map((tag) => (
            <span
              key={tag}
              className='px-3 py-1 bg-secondary text-body text-[16px] rounded-full font-cormorant'
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* PDF Link */}
      {flecoMeta.pdfUrl && (
        <section className='mb-12'>
          <a
            href={flecoMeta.pdfUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-accent hover:text-body transition-colors duration-300 font-cormorant text-[20px]'
          >
            View Full Report (PDF)
          </a>
        </section>
      )}
    </main>
  );
};

export default FlecoPage;
