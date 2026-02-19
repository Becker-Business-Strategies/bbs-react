import { useState } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Carousel from "../components/ui/Carousel";
import Hero from "../components/Hero";
import SuccessMessage from "../components/SuccessMessage";
import { useContactSubmit } from "../hooks/useContactSubmit";
import type { ContactFormValues } from "../schemas/contact";

type Plank = {
  number: number;
  title: string;
  icon: string;
  msg: string;
  img: string;
  link?: string;
};

type ContactForm = {
  name: string;
  last: string;
  email: string;
  phone: string;
  message: string;
};

const PLANKS: Plank[] = [
  {
    number: 1,
    title: "Mentoring",
    icon: "chat_bubble",
    msg:
      "As someone who has already “been there”, I enjoy imparting my work experiences on others to help guide them along the way. " +
      "Acting as a sounding board as well as a role model helps me to enhance the value of developing talent and gives them " +
      "the opportunity to question and develop their own skill set.",
    link: "Learn More",
    img: "/images/mentoring.jpg",
  }, // TS will ignore extra props
  {
    number: 2,
    title: "International",
    icon: "airplanemode_active",
    msg:
      "As an executive who has worked and developed businesses in countries around the world, " +
      "I am able to connect with cultures at various levels and understand their unique ways of doing business. " +
      "By creating an organizational climate that pays attention to cultural differences, yet understands and pursues " +
      "corporate objectives, a successful venture is created.",
    link: "Learn More",
    img: "/images/globe.jpg",
  },
  {
    number: 3,
    title: "Metrics",
    icon: "bar_chart",
    msg:
      "Utilizing a drive to manage by the numbers, I work to improve productivity and utilization of the business. " +
      "This includes eliminating waste, reducing costs through lean manufacturing techniques, and managing the supply chain.",
    link: "Learn More",
    img: "/images/metrics-phone.jpg",
  },
  {
    number: 4,
    title: "Strategy",
    icon: "trending_up",
    msg:
      "I develop courses of action that strengthen a company’s competitive position. " +
      "This includes market and industry leadership, as well as providing direction and motivation to the organization.",
    link: "Learn More",
    img: "/images/mentoring2.jpg",
  },
  {
    number: 5,
    title: "Railway",
    icon: "directions_railway",
    msg:
      "As a seasoned executive who has worked and developed railway business in North America and countries around the world, " +
      "both on the Mechanical as well as the Infrastructure side, I am able to connect with organizations at various levels " +
      "and understand their unique ways of doing business. The globalization of the supply base makes understanding the " +
      "international players very important.",
    link: "Learn More",
    img: "/images/trains-sunset.jpg",
  },
];

export default function Home() {
  const [messageSent, setMessageSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    submit: submitContact,
    status: contactStatus,
    reset: resetContact,
  } = useContactSubmit();

  if (contactStatus === "success") {
    setMessageSent(true);
  }

  const handleContactSubmit = async (data: ContactFormValues) => {
    return await submitContact(data);
  };

  const companies = [
    { name: "ZZABC Castings Co. Ltd." },
    {
      name: "Amsted Rail",
      logo: "/logos/amsted.png",
      link: "https://www.amstedrail.com/",
    },
    {
      name: "Datong CRRC Amsted Castings Company",
      logo: "/logos/ccrc.png",
      link: "https://www.crrcgc.cc/abcen/",
    },
    {
      name: "Steel Founders Society of America",
      logo: "/logos/sfsa.png",
      link: "https://www.sfsa.org/",
    },
    {
      name: "Oak Brook Civic Association",
      logo: "/logos/oakbrook.png",
      link: "https://oak-brook.org/",
    },
    {
      name: "National Association of Corporate Directiors",
      logo: "/logos/nacd.webp",
      link: "https://www.nacdonline.org/",
    },
  ];

  return (
    <div className="home flex flex-col bg-white">
      <Hero
        title="Elevate Your Business Strategy"
        description="Strategic consulting from an experienced executive. I become an integral part of your business development initiative, providing the guidance you need to reach the next level."
        alignment="left"
        badge={{ icon: "trending_up", text: "Executive Strategy" }}
        image={{
          src: "/images/consulting-above.jpg",
          alt: "Strategic consulting from above",
          mobileSrc: "/images/consulting-above.jpg",
          mobileAlt: "Strategic consulting from above",
        }}
      >
        <div className="flex items-center gap-4 pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-3 text-base font-600 text-white transition-all hover:bg-[#13513b] shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-lg border border-slate-400 px-8 py-3 text-base font-600 text-white transition-all hover:bg-slate-700"
          >
            Learn More
          </Link>
        </div>
      </Hero>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="expertise w-full bg-white py-20 md:py-28 flex flex-col items-center"
      >
        <div className="container mx-auto flex max-w-7xl flex-col px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leverage decades of executive experience across multiple
              industries and markets
            </p>
          </div>
        </div>
        <Carousel items={PLANKS} />
      </section>

      {/* CTA SECTION */}
      {/* <section className="w-full bg-linear-to-r from-brand/40 to-brand py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-brand/30 mb-8">
            Let's discuss how strategic consulting can accelerate your growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-600 text-brand transition-all hover:bg-slate-100 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section> */}

      {/* CONTACT */}
      <section
        id="contact"
        className="contact w-full bg-slate-900 py-20 md:py-28 text-white"
      >
        <div className="container mx-auto flex max-w-7xl flex-col px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-300">
              Have a question or ready to get started? Reach out today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: contact info (hidden after form submitted) */}
            {!messageSent ? (
              <ContactCard />
            ) : (
              <SuccessMessage
                title="Message Received!"
                description="Thank you for reaching out! We will be in touch shortly."
                onReset={() => {
                  setMessageSent(false);
                  setSubmitError(null);
                  resetContact();
                }}
                variant="card"
              />
            )}

            {/* Right: form or thank-you */}
            <div className="contact-form">
              {!messageSent ? (
                <>
                  {submitError && (
                    <div className="mb-3 rounded-md border border-red-500/30 bg-red-50/10 px-4 py-3 text-sm text-red-200">
                      {submitError}
                    </div>
                  )}
                  <ContactForm />
                </>
              ) : (
                <SuccessMessage
                  title="Message Received!"
                  description="Thank you for reaching out! We will be in touch shortly."
                  onReset={() => {
                    setMessageSent(false);
                    setSubmitError(null);
                    resetContact();
                  }}
                  variant="card"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {/* CLIENTS LOGOS SECTION */}
      <section className="w-full bg-white py-16 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="text-center text-4xl md:text-5xl font-bold  text-brand mb-12  tracking-wide">
            Organizations Served
          </h2>

          {/* Scrolling container */}
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .scroll-wrapper {
              animation: scroll 20s linear infinite;
            }
            
            .scroll-wrapper:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex overflow-hidden ">
            <div className="scroll-wrapper flex gap-12 md:gap-16 whitespace-nowrap mt-5">
              {/* Logo set 1 - duplicated for seamless loop */}
              {companies.concat(companies).map((company, idx) => (
                <div
                  key={idx}
                  className="shrink-0 h-20 md:h-24 flex items-center justify-center  px-8 md:px-12"
                >
                  {company.logo ? (
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer"
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        loading="lazy"
                        decoding="async"
                        className="h-12 md:h-16 object-contain opacity-60  grayscale-100 hover:opacity-100 transition-opacity hover:grayscale-0"
                      />
                    </a>
                  ) : (
                    <>
                      <div className="text-center">
                        <div className="text-sm md:text-base font-semibold text-slate-400">
                          {company.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>
                        <div className="text-xs text-slate-300 whitespace-nowrap">
                          {company.name}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
