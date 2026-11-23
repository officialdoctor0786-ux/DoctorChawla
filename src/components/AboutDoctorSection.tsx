import React, { useRef, useState } from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Stethoscope,
  User,
  ArrowRight,
} from "lucide-react";
import { CLINIC_CONFIG } from "../config/clinicConfig";
import { Reveal } from "./Reveal";

interface AboutDoctorSectionProps {
  onBookConsultation: () => void;
}

export const AboutDoctorSection: React.FC<AboutDoctorSectionProps> = ({
  onBookConsultation,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedSlides, setFailedSlides] = useState<Record<number, boolean>>({});
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const { doctor } = CLINIC_CONFIG;
  const creds = doctor.verifiedCredentials;

  const portraits =
    doctor.portraits && doctor.portraits.length > 0
      ? doctor.portraits
      : doctor.portraitUrl.trim()
      ? [{ url: doctor.portraitUrl, alt: doctor.portraitAlt, caption: doctor.name }]
      : [];

  const totalSlides = portraits.length;

  const goToPrev = () => {
    if (totalSlides <= 1) return;
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    if (totalSlides <= 1) return;
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    const threshold = 40;
    if (touchDeltaX.current <= -threshold) {
      goToNext();
    } else if (touchDeltaX.current >= threshold) {
      goToPrev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const verifiedItems = [
    { label: "Qualifications", value: creds.qualifications, icon: GraduationCap },
    { label: "Degrees", value: creds.degrees, icon: BookOpen },
    { label: "Experience", value: creds.yearsOfExperience, icon: Briefcase },
    { label: "Specialisations", value: creds.specialisations, icon: Stethoscope },
    { label: "Professional Memberships", value: creds.professionalMemberships, icon: User },
    { label: "Awards & Recognition", value: creds.awardsAndRecognition, icon: Award },
  ].filter((item) => item.value.trim().length > 0);

  const hasValidPortraits =
    totalSlides > 0 && portraits.some((_, idx) => !failedSlides[idx]);

  return (
    <section id="about-doctor" className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Doctor Portrait Carousel (Touch-Swipeable + Controls) */}
          <Reveal className="lg:col-span-5">
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") goToPrev();
                if (e.key === "ArrowRight") goToNext();
              }}
              tabIndex={totalSlides > 1 ? 0 : undefined}
              role={totalSlides > 1 ? "region" : undefined}
              aria-roledescription={totalSlides > 1 ? "carousel" : undefined}
              aria-label="Doctor portrait gallery"
              className="relative rounded-2xl overflow-hidden bg-[#E7EDE7] border border-[#123C3B]/12 aspect-[3/4] max-w-md mx-auto lg:max-w-none shadow-[0_20px_50px_-24px_rgba(11,41,41,0.2)] select-none touch-pan-y focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C3B]"
            >
              {hasValidPortraits ? (
                <>
                  {/* Sliding Track */}
                  <div
                    className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                  >
                    {portraits.map((photo, idx) => (
                      <div
                        key={photo.url}
                        className="relative w-full h-full shrink-0 bg-[#E7EDE7]"
                      >
                        {!failedSlides[idx] ? (
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            referrerPolicy="no-referrer"
                            draggable={false}
                            onError={() =>
                              setFailedSlides((prev) => ({ ...prev, [idx]: true }))
                            }
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                            <User className="w-10 h-10 text-[#123C3B]/60 mb-3" />
                            <p className="font-display text-2xl text-[#0B2929]">
                              {doctor.name}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Measured Bottom Gradient Scrim */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B2929]/75 via-[#0B2929]/30 to-transparent pointer-events-none"
                  />

                  {/* Bottom Caption & Slide Controls */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C6A875] tabular-nums">
                        0{activeSlide + 1} / 0{totalSlides}
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-[#F8F6F0] truncate mt-0.5">
                        {portraits[activeSlide]?.caption || doctor.name}
                      </p>
                      {totalSlides > 1 && (
                        <div className="flex items-center gap-1.5 mt-2">
                          {portraits.map((item, idx) => (
                            <button
                              key={item.url}
                              type="button"
                              onClick={() => setActiveSlide(idx)}
                              aria-label={`View doctor photo ${idx + 1}`}
                              className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                                activeSlide === idx
                                  ? "w-6 bg-[#C6A875]"
                                  : "w-2 bg-[#F8F6F0]/45 hover:bg-[#F8F6F0]/75"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {totalSlides > 1 && (
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={goToPrev}
                          aria-label="Previous doctor photo"
                          className="w-10 h-10 rounded-full bg-[#F8F6F0]/90 text-[#123C3B] hover:bg-[#FFFFFF] flex items-center justify-center shadow-sm transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={goToNext}
                          aria-label="Next doctor photo"
                          className="w-10 h-10 rounded-full bg-[#F8F6F0]/90 text-[#123C3B] hover:bg-[#FFFFFF] flex items-center justify-center shadow-sm transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-between p-8 sm:p-10 text-center bg-gradient-to-b from-[#E7EDE7] via-[#F2F4EE] to-[#F8F6F0]">
                  <div className="w-full flex items-center justify-between text-[11px] font-medium tracking-[0.14em] uppercase text-[#123C3B]/60">
                    <span>Doctor Portrait</span>
                    <span>3:4 Frame</span>
                  </div>

                  <div className="flex flex-col items-center my-auto py-8">
                    <div className="w-24 h-24 rounded-full bg-[#FFFFFF] border border-[#C6A875]/45 flex items-center justify-center mb-6 shadow-xs">
                      <User className="w-10 h-10 text-[#123C3B]/70 stroke-[1.4]" />
                    </div>
                    <p className="font-display text-2xl sm:text-3xl font-semibold text-[#0B2929] mb-2">
                      {doctor.name}
                    </p>
                    <p className="text-xs sm:text-sm text-[#263332]/70 max-w-[26ch] leading-relaxed">
                      Dedicated slot for the verified doctor portrait photograph.
                    </p>
                  </div>

                  <div className="w-full pt-4 border-t border-[#123C3B]/10 text-[11px] text-[#263332]/65">
                    Replace via <code className="font-mono text-[#123C3B]">doctor.portraits</code> in{" "}
                    <code className="font-mono text-[#123C3B]">clinicConfig.ts</code>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Doctor Profile Content */}
          <Reveal delayMs={100} className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A875] mb-3">
              Meet Your Dental Care Professional
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0B2929] leading-[1.12] text-balance mb-6">
              Expertise That Puts Your Smile First.
            </h2>

            <div className="pb-6 mb-6 border-b border-[#123C3B]/12">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#123C3B]">
                {doctor.name}
              </h3>
              <p className="text-sm sm:text-[15px] font-medium text-[#263332]/75 mt-1">
                {doctor.practiceName}
              </p>
            </div>

            <p className="text-base sm:text-[17px] leading-[1.75] text-[#263332]/85 mb-8 max-w-[60ch]">
              {doctor.description}
            </p>

            {/* Verified Credentials Grid — Populated only when verified details exist */}
            {verifiedItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {verifiedItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-4 rounded-xl bg-[#FFFFFF] border border-[#123C3B]/10"
                    >
                      <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#C6A875] mb-1.5">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-sm font-medium text-[#0B2929]">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#123C3B]/10">
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#C6A875] mb-1.5">
                    Practice Focus
                  </p>
                  <p className="text-sm font-medium text-[#0B2929] leading-relaxed">
                    Multi-speciality general, cosmetic, restorative, and family dental consultations.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#123C3B]/10">
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#C6A875] mb-1.5">
                    Verified Credentials
                  </p>
                  <p className="text-sm text-[#263332]/75 leading-relaxed">
                    Qualifications, degrees, memberships, and experience details can be updated in{" "}
                    <code className="text-xs font-mono text-[#123C3B]">clinicConfig.ts</code> once confirmed.
                  </p>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={onBookConsultation}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#F8F6F0] bg-[#123C3B] rounded-lg hover:bg-[#0B2929] transition-colors duration-200 min-h-[46px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C3B]"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
