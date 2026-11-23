import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { CLINIC_CONFIG } from "../config/clinicConfig";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about-doctor", label: "About Doctor" },
  { id: "treatments", label: "Treatments" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F6F0]/95 backdrop-blur-md shadow-[0_6px_28px_-12px_rgba(11,41,41,0.14)] border-b border-[#123C3B]/10"
            : "bg-[#F8F6F0]/80 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-4 lg:gap-8">
          {/* Zone 1: Single-element Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
            className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#123C3B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#123C3B]"
          >
            {CLINIC_CONFIG.shortBrandName}
          </a>

          {/* Zone 2: Clean Typography Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] xl:text-sm font-medium text-[#263332]/80"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#123C3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#123C3B] ${
                    isActive ? "text-[#123C3B] font-semibold" : ""
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-[#C6A875] transition-transform duration-200 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#book-appointment"
              onClick={(e) => handleLinkClick(e, "book-appointment")}
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#F8F6F0] bg-[#123C3B] rounded-lg hover:bg-[#0B2929] transition-colors duration-200 whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C3B]"
            >
              Book Appointment
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#123C3B] hover:bg-[#123C3B]/8 transition-colors focus-visible:outline-2 focus-visible:outline-[#123C3B]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0B2929]/55 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <aside
          aria-label="Mobile Navigation"
          className={`absolute top-0 right-0 bottom-0 w-[86%] max-w-sm bg-[#F8F6F0] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between pb-5 border-b border-[#123C3B]/12">
              <span className="font-display text-xl font-semibold text-[#123C3B]">
                {CLINIC_CONFIG.shortBrandName}
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#123C3B] hover:bg-[#123C3B]/8 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`flex items-center justify-between px-3 py-3.5 rounded-lg text-base font-medium transition-colors min-h-[44px] ${
                      isActive
                        ? "bg-[#E7EDE7] text-[#123C3B] font-semibold"
                        : "text-[#263332] hover:bg-[#123C3B]/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#C6A875]" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="p-6 border-t border-[#123C3B]/12 bg-[#FFFFFF]/60">
            <p className="text-xs text-[#263332]/70 mb-3">
              {CLINIC_CONFIG.contact.addressLine1} {CLINIC_CONFIG.contact.addressLine2}
            </p>
            <a
              href="#book-appointment"
              onClick={(e) => handleLinkClick(e, "book-appointment")}
              className="w-full inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-[#F8F6F0] bg-[#123C3B] rounded-lg hover:bg-[#0B2929] transition-colors min-h-[44px]"
            >
              Book Appointment
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};
