import { Instagram, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className='w-full px-6 py-2 bg-rtertiary'>
      <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
        {/* Name */}
        <img
          src='/SamPrestonLogo.svg'
          alt='Samuel Preston logo'
          className='h-10 md:h-12 w-auto'
        />

        {/* Social Icons */}
        <div className='flex items-center gap-6'>
          <a
            href='https://www.linkedin.com/in/SamuelRMPreston/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin'
            className='text-rprimary hover:text-rprimary transition-colors duration-300'
          >
            <Linkedin size={24} />
          </a>
          <a
            href='https://github.com/Samuelp0110'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-rprimary hover:text-rprimary transition-colors duration-300'
          >
            <Github size={24} />
          </a>
          <a
            href='https://www.instagram.com/sampreston110/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
            className='text-rprimary hover:text-rprimary transition-colors duration-300'
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
