import React, { useState } from "react";
import { Github, Mail, Phone, Linkedin } from "lucide-react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/Samuelp0110",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:spreston110@gmail.com",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/SamuelRMPreston/",
  },
];

const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [showPhone, setShowPhone] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-primary outline-2 outline-background  w-full max-w-md mx-4 rounded-xl shadow-lg p-6 space-y-4 text-center relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold font-cormorant">Let’s Connect</h2>

        <ul className="space-y-3">
          {links.map(({ icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 justify-center text-lg text-background hover:underline"
              >
                {icon} {label}
              </a>
            </li>
          ))}

          <li>
            {showPhone ? (
              <div className="text-lg text-background flex justify-center items-center gap-2">
                <Phone className="w-5 h-5" />
                845-262-8575
              </div>
            ) : (
              <button
                onClick={() => setShowPhone(true)}
                className="flex items-center gap-3 justify-center text-lg text-background hover:underline"
              >
                <Phone className="w-5 h-5" /> Show Phone
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConnectModal;
