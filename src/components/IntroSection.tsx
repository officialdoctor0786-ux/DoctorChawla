import React, { useState } from "react";
import { UserCheck, Layers, HeartHandshake } from "lucide-react";
import { CLINIC_CONFIG } from "../config/clinicConfig";
import { Reveal } from "./Reveal";

const PILLARS = [
  {
    number: "01",
    title: "Personalised Attention",
    description: "Dental care planned around individual patient needs.",
    icon: UserCheck,
  },
  {
    number: "02",
    title: "Comprehensive Treatments",
    description:
      "A wide range of general, cosmetic, restorative, and specialised dental services.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Patient Comfort",
    description:
      "A welcoming environment designed to make dental visits more comfortable.",
    icon: HeartHandshake,
  },
];

export const IntroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-y border-[#123C3B]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Editorial Column + Studio Still Life */}
          <Reveal className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A875] mb-3">
                Patient Philosophy
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0B2929] leading-[1.12] text-balance mb-5">
                More Than Dental Care. A Better Experience.
              </h2>
              <p className="text-[15px] sm:text-base leading-[1.7] text-[#263332]/85">
                At {CLINIC_CONFIG.clinicName}, we focus on comprehensive dental care
                with an emphasis on patient comfort, personalised attention, and
                modern treatment options.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#E7EDE7] border border-[#123C3B]/10 aspect-[4/3]">
              {!imageError && CLINIC_CONFIG.media.introImageUrl ? (
                <img
                  src={CLINIC_CONFIG.media.introImageUrl}
                  alt={CLINIC_CONFIG.media.introImageAlt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-6 text-center text-sm text-[#123C3B]/70">
                  Calm, welcoming clinical care in Sector 15, Chandigarh
                </div>
              )}
            </div>
          </Reveal>

          {/* Right Structured Capability Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#123C3B]/12 border-t border-b border-[#123C3B]/12">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.number} delayMs={idx * 90}>
                  <div className="group py-7 sm:py-8 flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7 transition-colors duration-200 hover:bg-[#F8F6F0]/60 px-3 sm:px-5 rounded-xl">
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-display text-2xl sm:text-3xl font-semibold text-[#C6A875] tabular-nums">
                        {pillar.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#E7EDE7] text-[#123C3B] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#123C3B] group-hover:text-[#F8F6F0]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display text-2xl sm:text-[26px] font-semibold text-[#0B2929] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-[15px] sm:text-base leading-relaxed text-[#263332]/80">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
