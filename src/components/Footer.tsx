import { Linkedin, User2 } from "lucide-react";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import ContactCard from "./ContactCard";

type FooterLink = {
  name: string;
  link: string;
};

type FooterProps = {
  isLoggedIn?: boolean;
  username?: string | null;
  aboutLinks?: FooterLink[];
  expertiseLinks?: FooterLink[];
  onLogin?: () => void;
};

export default function Footer({
  isLoggedIn = false,
  username,
  onLogin,
}: FooterProps) {
  const year = useMemo(() => new Date().getFullYear(), []);

  const handleLogin = () => {
    if (onLogin) onLogin();
  };

  return (
    <footer id="footer" className=" bg-slate-900 text-white flex">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand + CTA */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/logos/blogo2.png"
                alt="bbs logo"
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold">
                Becker Business Strategies
              </span>
            </div>
            <p className="text-sm text-white/70 mb-6">
              Executive strategy, transformation, and mentoring for leaders and
              organizations.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white shadow hover:bg-brand transition"
            >
              <span className="material-icons">calendar_today</span>
              Schedule Consultation
            </NavLink>
          </div>

          {/* Primary links */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3">Pages</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-sm text-white/70 hover:text-white"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/expertise"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Expertise
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Services
                </NavLink>
              </li>
              {isLoggedIn && (
                <li>
                  <NavLink
                    to="/clients"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Clients
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/contact"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact + social */}
          <div className="">
            <h4 className="text-sm font-semibold text-white/90 mb-3">
              Contact
            </h4>
            <ContactCard />

            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://www.linkedin.com/in/stephenwbecker/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/6 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/6 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/60">
            &copy; {year} Becker Business Strategies. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              onClick={handleLogin}
              className="cursor-pointer inline-flex items-center gap-2 hover:text-white/80 transition"
            >
              <User2 className="w-5 h-5 text-white/60" />
            </a>
          </div>
          {username && (
            <div className="text-sm text-white/60">
              Logged in as{" "}
              <span className="font-medium text-white">{username}</span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
