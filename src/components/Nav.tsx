import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

type NavProps = {
  isLoggedIn?: boolean;
  username?: string | null;
  onLogout?: () => void;
};

export default function Nav({
  isLoggedIn = false,
  username,
  onLogout,
}: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    }
    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenuOpen]);

  const handleLogout = () => {
    setUserMenuOpen(false);
    if (onLogout) onLogout();
  };

  const navLinkBase =
    "relative text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#17664b] after:transition-all hover:after:w-full";
  const contactButtonBase =
    "inline-flex items-center justify-center rounded-lg bg-linear-to-r from-[#17664b]/70 to-[#17664b] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:from-[#17664b] hover:to-[#17664b]/80 shadow-md hover:shadow-lg";

  return (
    <>
      {/* Top Nav Bar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <nav className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-6">
          {/* Mobile menu button */}
          <button
            type="button"
            className="flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="material-icons">menu</span>
          </button>

          {/* Spacer on mobile to center logo similar to Angular */}
          <div className="flex-1 md:hidden" />

          {/* Logo */}
          <div
            className="flex cursor-pointer items-center gap-4"
            onClick={() => navigate("/")}
          >
            {/* Small logo (hidden on mobile in Angular; we show on md+ only) */}
            <div className="hidden md:block">
              <img
                src="/logos/blogo2.png"
                alt="Becker Business Strategies logo"
                className="h-10 w-auto"
              />
            </div>
            {/* Wordmark */}
            <div>
              <img
                src="/logos/bbs-words.png"
                alt="Becker Business Strategies"
                className="h-auto w-40 md:w-52"
              />
            </div>
          </div>

          {/* Flex spacer */}
          <div className="flex-1" />

          {/* Desktop Nav Links */}
          <div className="hidden flex-1 items-center justify-evenly md:flex">
            {isLoggedIn && (
              <NavLink to="/clients" className={navLinkBase}>
                Clients
              </NavLink>
            )}
            <NavLink to="/" end className={navLinkBase}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkBase}>
              About
            </NavLink>
            <NavLink to="/expertise" className={navLinkBase}>
              Expertise
            </NavLink>

            <NavLink to="/contact" className={contactButtonBase}>
              Contact
            </NavLink>
          </div>

          {/* Admin icon + user menu (desktop) */}
          {isLoggedIn && (
            <div
              ref={userMenuRef}
              className="ml-4 flex items-center border-l border-slate-200 pl-4 relative"
            >
              <button
                type="button"
                className="flex items-center justify-center text-brand hover:text-slate-400"
                onClick={() => setUserMenuOpen((open) => !open)}
                aria-label="Open user menu"
              >
                {/* Material icon text assumes you loaded Material Icons in index.html */}
                <span className="material-icons text-3xl cursor-pointer">
                  supervised_user_circle
                </span>
              </button>

              {/* User dropdown menu */}
              {userMenuOpen && (
                <div className="absolute right-0 top-10 w-48 overflow-hidden rounded-lg border border-slate-200 bg-white text-sm shadow-lg">
                  <div className="bg-slate-50 px-3 py-2 text-xs uppercase tracking-wide text-slate-600 font-600">
                    {username || "Account"}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      navigate("/profile");
                    }}
                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-slate-700 hover:bg-brand/5 transition-colors"
                  >
                    <span className="material-icons text-base">person</span>
                    <span>Profile</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-slate-700 hover:bg-red-50 transition-colors border-t border-slate-100"
                  >
                    <span className="material-icons text-base">logout</span>
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>

      {/* Spacer so content isn't hidden behind fixed nav */}
      <div className="h-20" />

      {/* Mobile Side Nav (sidenav) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="relative h-full w-72 bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200">
              <span className="flex-1" />
              <button
                type="button"
                className="rounded-lg p-2 text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <span className="material-icons">clear</span>
              </button>
            </div>

            <nav className="mt-2 flex flex-col gap-2 px-4 pb-6">
              <button
                type="button"
                onClick={() => {
                  navigate("/");
                  setMobileOpen(false);
                }}
                className="h-12 w-full text-left text-sm font-500 text-slate-700 hover:text-brand"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate("/about");
                  setMobileOpen(false);
                }}
                className="h-12 w-full text-left text-sm font-500 text-slate-700 hover:text-brand"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate("/expertise");
                  setMobileOpen(false);
                }}
                className="h-12 w-full text-left text-sm font-500 text-slate-700 hover:text-brand"
              >
                Expertise
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate("/contact");
                  setMobileOpen(false);
                }}
                className="h-12 w-full text-left text-sm font-medium text-slate-700 hover:text-brand"
              >
                Contact Us
              </button>

              <div className="mt-4 px-2">
                <NavLink
                  to="/contact"
                  className={contactButtonBase}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </NavLink>
              </div>

              {isLoggedIn && (
                <button
                  type="button"
                  onClick={() => {
                    navigate("/clients");
                    setMobileOpen(false);
                  }}
                  className="flex h-12 w-full items-center text-left text-sm font-500 text-slate-700 hover:text-brand"
                >
                  <span className="material-icons mr-3 text-brand">
                    supervised_user_circle
                  </span>
                  Clients
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
