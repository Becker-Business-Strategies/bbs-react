interface Contact {
  name: string;
  phone: string;
  email: string;
}

interface ContactProps {
  contact?: Contact;
  size?: "sm" | "md" | "lg";
}

const BBS_CONTACT: Contact = {
  phone: "314-304-8880",
  name: "Stephen W. Becker",
  email: "swb@beckerbusinessstrategies.com",
};

const titleSizes = {
  sm: "text-sm",
  md: "text-2xl",
  lg: "text-3xl",
};

const paddingSizes = {
  sm: "p-4",
  md: "p-8",
  lg: "p-12",
};

const ContactCard = ({ contact = BBS_CONTACT, size = "md" }: ContactProps) => {
  return (
    <div
      className={`flex flex-col rounded-lg bg-slate-800 ${paddingSizes[size]} text-white w-full`}
    >
      <h3 className={`${titleSizes[size]} font-bold mb-2`}>
        Contact Information
      </h3>
      <p className="text-slate-300 mb-4">
        Prefer to reach out directly? Use the details below.
      </p>

      <div className="flex items-start gap-4">
        <div className="shrink-0 h-12 w-12 rounded-full bg-brand/20 flex items-center justify-center">
          <span className="material-icons text-brand">person</span>
        </div>
        <div className="flex-1">
          <div className="font-semibold">{contact.name}</div>
          <a
            href={`tel:${contact.phone}`}
            className="text-brand block hover:underline"
          >
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-slate-300 block hover:underline"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
