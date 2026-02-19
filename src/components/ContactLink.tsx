import type { ReactNode } from "react";

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
  label?: string;
  target?: string;
  rel?: string;
  className?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  icon,
  text,
  label,
  target,
  rel,
  className = "",
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`flex items-center gap-3 text-slate-700 hover:text-brand transition-colors group ${className}`}
    >
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
      <div className="flex flex-col">
        {label && (
          <span className="text-xs text-slate-500 uppercase tracking-wide">
            {label}
          </span>
        )}
        <span className="font-500 break-all">{text}</span>
      </div>
    </a>
  );
};

export default ContactLink;
