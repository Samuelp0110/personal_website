import { Github, Mail, Phone, Linkedin, X } from "lucide-react";
import { Dialog } from "radix-ui";

const links = [
  {
    icon: <Mail className='w-5 h-5' />,
    label: "Email",
    href: "mailto:spreston110@gmail.com",
  },
  {
    icon: <Linkedin className='w-5 h-5' />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/SamuelRMPreston/",
  },
  {
    icon: <Github className='w-5 h-5' />,
    label: "GitHub",
    href: "https://github.com/Samuelp0110",
  },
  {
    icon: <Phone className='w-5 h-5' />,
    label: "845-262-8575",
    href: "tel:8462528575",
  },
];

const ConnectModal = () => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className='bg-rbg text-rprimary text-xl rounded-full cursor-pointer duration-200 hover:shadow-sm shadow-rprimary py-1 px-4 font-bold font-cormorant'>
            Let's Connect
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow' />
          <Dialog.Content className='fixed left-1/2 top-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-rneutral p-4 shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow'>
            <Dialog.Title className='mb-4 text-xl font-medium text-rfg'>
              Let's Connect
            </Dialog.Title>
            <ul className='space-y-3'>
              {links.map(({ icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 justify-center text-lg text-rfg hover:underline'
                  >
                    <span className=''> {icon} </span>
                    <span className=''> {label} </span>
                  </a>
                </li>
              ))}
            </ul>
            <Dialog.Close asChild>
              <button
                className='absolute right-4 top-4 inline-flex p-0.5 appearance-none items-center justify-center rounded-full text-rfg bg-rfg/10 transition-colors duration-200 hover:bg-rfg/30 '
                aria-label='Close'
              >
                <X />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default ConnectModal;
