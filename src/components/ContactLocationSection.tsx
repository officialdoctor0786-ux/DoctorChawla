import React, { useState } from "react";
import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";
import { CLINIC_CONFIG, buildWhatsAppUrl } from "../config/clinicConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

export const ContactLocationSection: React.FC = () => {
  const [phoneNoticeOpen, setPhoneNoticeOpen] = useState(false);
  const hasPhone = Boolean(CLINIC_CONFIG.contact.phone.trim());
  const whatsappUrl = buildWhatsAppUrl(
    CLINIC_CONFIG.whatsapp.defaultEnquiryMessage
  );

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A875] mb-3">
            Location & Clinic Timings
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0B2929] leading-[1.12] text-balance">
            Visit Us. We’re Here for Your Smile.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Address Card + Clinic Timings Card */}
          <Reveal className="lg:col-span-5 flex flex-col gap-6">
            {/* Address & Direct Actions Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#123C3B]/10 shadow-[0_12px_36px_-24px_rgba(11,41,41,0.2)]">
              <div className="flex items-start gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#E7EDE7] text-[#123C3B] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#0B2929] leading-snug">
                    {CLINIC_CONFIG.clinicName}
                  </h3>
                  <address className="not-italic text-sm text-[#263332]/80 leading-relaxed mt-2">
                    {CLINIC_CONFIG.contact.addressLine1}
                    <br />
                    {CLINIC_CONFIG.contact.addressLine2}
                    <br />
                    {CLINIC_CONFIG.contact.addressLine3}
                  </address>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-2.5 pt-4 border-t border-[#123C3B]/10">
                <a
                  href={CLINIC_CONFIG.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-[#F8F6F0] bg-[#123C3B] rounded-lg hover:bg-[#0B2929] transition-colors min-h-[44px] whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 shrink-0" />
                  <span>Get Directions</span>
                </a>

                {hasPhone ? (
                  <a
                    href={`tel:${CLINIC_CONFIG.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-[#123C3B] bg-[#E7EDE7] rounded-lg hover:bg-[#123C3B]/12 transition-colors min-h-[44px] whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Call Now</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setPhoneNoticeOpen((prev) => !prev)}
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-[#123C3B] bg-[#E7EDE7] rounded-lg hover:bg-[#123C3B]/12 transition-colors min-h-[44px] whitespace-nowrap cursor-pointer"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Call Now</span>
                  </button>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-[#123C3B] border border-[#123C3B]/20 rounded-lg hover:bg-[#E7EDE7]/60 transition-colors min-h-[44px] whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {phoneNoticeOpen && !hasPhone && (
                <p className="mt-3 p-3 rounded-lg bg-[#F8F6F0] border border-[#C6A875]/40 text-xs text-[#263332]/85 leading-relaxed">
                  Clinic telephone number is ready to be configured via{" "}
                  <code className="font-mono text-[#123C3B]">CLINIC_PHONE_NUMBER</code> in{" "}
                  <code className="font-mono text-[#123C3B]">src/config/clinicConfig.ts</code>.
                  You can enquire via WhatsApp or the appointment request form meanwhile.
                </p>
              )}
            </div>

            {/* Clinic Timings Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#123C3B]/10 shadow-[0_12px_36px_-24px_rgba(11,41,41,0.2)]">
              <div className="flex items-start justify-between gap-4 pb-4 mb-4 border-b border-[#123C3B]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E7EDE7] text-[#123C3B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#0B2929]">
                      Clinic Timings
                    </h3>
                    <p className="text-xs font-semibold text-[#123C3B] mt-0.5">
                      {CLINIC_CONFIG.timings.verifiedListingStatus}
                    </p>
                  </div>
                </div>
              </div>

              <dl className="divide-y divide-[#123C3B]/8 text-xs sm:text-sm">
                {CLINIC_CONFIG.timings.days.map((entry) => (
                  <div
                    key={entry.day}
                    className="py-2.5 flex items-center justify-between gap-3"
                  >
                    <dt className="font-medium text-[#0B2929]">{entry.day}</dt>
                    <dd className="text-[#263332]/75 text-right tabular-nums">
                      {entry.hours}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 pt-3 border-t border-[#123C3B]/10 text-[11px] sm:text-xs text-[#263332]/65 leading-relaxed">
                {CLINIC_CONFIG.timings.note}
              </p>
            </div>
          </Reveal>

          {/* Right Column: Embedded Google Map Location */}
          <Reveal delayMs={90} className="lg:col-span-7 flex flex-col">
            <div className="flex-1 rounded-2xl overflow-hidden bg-[#E7EDE7] border border-[#123C3B]/12 shadow-[0_16px_44px_-24px_rgba(11,41,41,0.22)] flex flex-col min-h-[340px] lg:min-h-full">
              <div className="px-5 py-3.5 bg-[#FFFFFF] border-b border-[#123C3B]/10 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#C6A875]">
                    Sector 15D · Chandigarh
                  </p>
                  <p className="text-xs sm:text-sm text-[#0B2929] font-medium truncate">
                    SCO 78,79, First Floor · Sector 15, Chandigarh 160015
                  </p>
                </div>

                <a
                  href={CLINIC_CONFIG.googleMaps.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123C3B] hover:text-[#0B2929] whitespace-nowrap shrink-0"
                >
                  <span>Open Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative flex-1 min-h-[300px] sm:min-h-[380px]">
                <iframe
                  title="Dr Chawla’s Multi-speciality Famicare Dental Clinic Location Map"
                  src={CLINIC_CONFIG.googleMaps.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[300px] sm:min-h-[380px] border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
