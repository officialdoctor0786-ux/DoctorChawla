import React from "react";
import { CLINIC_CONFIG, buildWhatsAppUrl } from "../config/clinicConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const FloatingWhatsAppButton: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    CLINIC_CONFIG.whatsapp.defaultEnquiryMessage
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group inline-flex items-center gap-2.5 h-12 w-12 sm:w-auto sm:h-12 sm:px-4 rounded-full bg-[#123C3B] text-[#F8F6F0] border border-[#C6A875]/45 shadow-[0_12px_28px_-6px_rgba(11,41,41,0.45)] hover:bg-[#0B2929] hover:-translate-y-0.5 transition-all duration-200 justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C3B]"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0 text-[#C6A875]" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide whitespace-nowrap">
        WhatsApp Enquiry
      </span>
    </a>
  );
};
