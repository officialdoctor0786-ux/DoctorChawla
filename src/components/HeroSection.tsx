import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { CLINIC_CONFIG } from "../config/clinicConfig";

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

const TRUST_HIGHLIGHTS = [
  "Comprehensive Dental Care",
  "Modern Treatment Options",
  "Patient-Focused Approach",
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookClick,
  onExploreClick,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-[#F8F6F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-center py-2 lg:py-4">
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.16em] text-[#123C3B]/80 uppercase mb-4">
              {CLINIC_CONFIG.locationLabel}
            </p>

            <h1 className="font-display text-[clamp(2.35rem,4.1vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-[#0B2929] text-balance mb-6">
              Your Smile Deserves Exceptional Care.
            </h1>

            <p className="text-base sm:text-[17px] leading-[1.7] text-[#263332]/85 max-w-[54ch] mb-8">
              Experience personalised dental care, advanced treatments, and a more
              comfortable journey towards a healthier, more confident smile at{" "}
              <span className="font-medium text-[#123C3B]">
                {CLINIC_CONFIG.clinicName}
              </span>
              .
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-[#F8F6F0] bg-[#123C3B] rounded-lg hover:bg-[#0B2929] transition-all duration-200 shadow-[0_10px_24px_-10px_rgba(18,60,59,0.55)] whitespace-nowrap shrink-0 min-h-[48px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C3B]"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-[#123C3B] bg-transparent border border-[#123C3B]/25 rounded-lg hover:border-[#123C3B] hover:bg-[#E7EDE7]/60 transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[48px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C3B]"
              >
                Explore Treatments
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-[#123C3B]/12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {TRUST_HIGHLIGHTS.map((item, idx) => (
                <div key={item} className="flex flex-col gap-1">
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-[#C6A875] tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-medium text-[#0B2929] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Clinic Visual + Floating Priority Card */}
          <div className="lg:col-span-7 relative flex flex-col">
            {/* Subtle decorative editorial frame border */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -top-3 -right-3 w-28 h-28 border-t border-r border-[#C6A875]/45 rounded-tr-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -bottom-3 -left-3 w-28 h-28 border-b border-l border-[#123C3B]/20 rounded-bl-3xl pointer-events-none"
            />

            <div className="relative flex-1 aspect-[16/9] lg:aspect-auto lg:min-h-[460px] rounded-2xl overflow-hidden bg-[#E7EDE7] border border-[#123C3B]/10 shadow-[0_24px_60px_-24px_rgba(11,41,41,0.22)] group">
              {!imageError && CLINIC_CONFIG.media.heroImageUrl ? (
                <img
                  src={CLINIC_CONFIG.media.heroImageUrl}
                  alt={CLINIC_CONFIG.media.heroImageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#E7EDE7] to-[#F8F6F0]">
                  <Sparkles className="w-8 h-8 text-[#C6A875] mb-3" />
                  <p className="font-display text-2xl text-[#123C3B]">
                    {CLINIC_CONFIG.clinicName}
                  </p>
                  <p className="text-sm text-[#263332]/70 mt-1">
                    Sector 15D, Chandigarh
                  </p>
                </div>
              )}

              {/* Subtle bottom gradient scrim for legible floating card contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B2929]/35 via-transparent to-transparent pointer-events-none"
              />

              {/* Floating Information Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 sm:max-w-xs bg-[#F8F6F0]/95 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-[#C6A875]/35 shadow-[0_12px_32px_-10px_rgba(11,41,41,0.28)]">
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C6A875]">
                    Sector 15 · Chandigarh
                  </span>
                </div>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#0B2929] leading-snug">
                  Your Dental Care, Our Priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
