import React from "react";
import { MapPin, Navigation, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { CLINIC_CONFIG, buildWhatsAppUrl } from "../config/clinicConfig";
import { TREATMENT_CATEGORIES, TreatmentCategoryId } from "../data/treatmentsData";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (category: TreatmentCategoryId) => void;
}

const QUICK_LINKS = [
  { id: "home", label: "Home" },
  { id: "about-doctor", label: "About Doctor" },
  { id: "treatments", label: "Treatments" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "gallery", label: "Gallery" },
  { id: "book-appointment", label: "Book Appointment" },
  { id: "contact", label: "Contact" },
];

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCategory,
}) => {
  const whatsappUrl = buildWhatsAppUrl(
    CLINIC_CONFIG.whatsapp.defaultEnquiryMessage
  );

  const socialItems = [
    { key: "instagram", label: "Instagram", href: CLINIC_CONFIG.social.instagram, icon: Instagram },
    { key: "facebook", label: "Facebook", href: CLINIC_CONFIG.social.facebook, icon: Facebook },
    { key: "linkedin", label: "LinkedIn", href: CLINIC_CONFIG.social.linkedin, icon: Linkedin },
    { key: "youtube", label: "YouTube", href: CLINIC_CONFIG.social.youtube, icon: Youtube },
  ];

  return (
    <footer className="bg-[#0B2929] text-[#F8F6F0] pt-16 pb-10 border-t border-[#C6A875]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F8F6F0]/12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F8F6F0] leading-snug">
              {CLINIC_CONFIG.clinicName}
            </h2>
            <p className="text-sm text-[#F8F6F0]/75 leading-relaxed max-w-sm">
              Multi-speciality dental care in Sector 15, Chandigarh, focused on
              personalised attention, modern treatment options, and patient comfort.
            </p>

            {/* Configurable Social Media Placeholders */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C6A875] mb-3">
                Connect
              </p>
              <div className="flex items-center gap-2.5">
                {socialItems.map((item) => {
                  const Icon = item.icon;
                  if (item.href) {
                    return (
                      <a
                        key={item.key}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="w-10 h-10 rounded-lg bg-[#123C3B] border border-[#F8F6F0]/12 flex items-center justify-center text-[#F8F6F0]/85 hover:border-[#C6A875] hover:text-[#C6A875] transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  }
                  return (
                    <span
                      key={item.key}
                      title={`${item.label} link configurable in clinicConfig.ts`}
                      aria-label={`${item.label} placeholder`}
                      className="w-10 h-10 rounded-lg bg-[#123C3B]/55 border border-[#F8F6F0]/10 flex items-center justify-center text-[#F8F6F0]/45"
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C6A875] mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="text-sm text-[#F8F6F0]/75 hover:text-[#C6A875] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Categories */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C6A875] mb-4">
              Treatment Categories
            </p>
            <ul className="space-y-2">
              {TREATMENT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => onSelectCategory(cat.id)}
                    className="text-left text-sm text-[#F8F6F0]/75 hover:text-[#C6A875] transition-colors cursor-pointer"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C6A875]">
              Visit & Enquire
            </p>

            <div className="flex items-start gap-2.5 text-sm text-[#F8F6F0]/80 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#C6A875] shrink-0 mt-1" />
              <address className="not-italic">
                {CLINIC_CONFIG.contact.addressLine1}
                <br />
                {CLINIC_CONFIG.contact.addressLine2}
                <br />
                {CLINIC_CONFIG.contact.addressLine3}
              </address>
            </div>

            {CLINIC_CONFIG.contact.phone && (
              <p className="text-sm text-[#F8F6F0]/85">
                Phone:{" "}
                <a
                  href={`tel:${CLINIC_CONFIG.contact.phone}`}
                  className="hover:text-[#C6A875] transition-colors"
                >
                  {CLINIC_CONFIG.contact.phone}
                </a>
              </p>
            )}

            {CLINIC_CONFIG.contact.email && (
              <p className="text-sm text-[#F8F6F0]/85">
                Email:{" "}
                <a
                  href={`mailto:${CLINIC_CONFIG.contact.email}`}
                  className="hover:text-[#C6A875] transition-colors"
                >
                  {CLINIC_CONFIG.contact.email}
                </a>
              </p>
            )}

            <p className="text-xs text-[#F8F6F0]/65">
              Timings: {CLINIC_CONFIG.timings.verifiedListingStatus}
            </p>

            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0B2929] bg-[#C6A875] rounded-lg hover:bg-[#d5b887] transition-colors min-h-[42px]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={CLINIC_CONFIG.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#F8F6F0] border border-[#F8F6F0]/20 rounded-lg hover:border-[#C6A875] hover:text-[#C6A875] transition-colors min-h-[42px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Closing Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F8F6F0]/65 text-center sm:text-left">
          <p>
            © {CLINIC_CONFIG.copyrightYear} {CLINIC_CONFIG.clinicName}. All Rights
            Reserved.
          </p>
          <p className="font-display italic text-base text-[#C6A875]">
            {CLINIC_CONFIG.closingLine}
          </p>
        </div>
      </div>
    </footer>
  );
};
