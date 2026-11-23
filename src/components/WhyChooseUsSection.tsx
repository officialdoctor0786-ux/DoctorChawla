import React from "react";
import {
  Layers,
  ClipboardList,
  HeartHandshake,
  Sparkles,
  MessageSquare,
  UserCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    title: "Multi-Speciality Dental Care",
    description:
      "Coordinated care spanning routine check-ups, cosmetic enhancements, endodontics, orthodontics, gum care, and restorations.",
    icon: Layers,
  },
  {
    title: "Comprehensive Treatment Options",
    description:
      "Thoughtfully structured treatment pathways allowing patients and families to address varied oral health needs in one place.",
    icon: ClipboardList,
  },
  {
    title: "Patient-Centred Approach",
    description:
      "Every appointment prioritises clear communication, respectful listening, and your comfort before, during, and after care.",
    icon: HeartHandshake,
  },
  {
    title: "Modern Dental Care",
    description:
      "Contemporary clinical workflows focused on cleanliness, careful diagnosis, and conservative preservation of natural teeth.",
    icon: Sparkles,
  },
  {
    title: "Convenient Appointment Enquiries",
    description:
      "Streamlined online request form and direct WhatsApp enquiry access so scheduling your visit takes only a moment.",
    icon: MessageSquare,
  },
  {
    title: "Personalised Consultations",
    description:
      "Individualised evaluations that consider your symptoms, smile preferences, and practical schedule without rushed decisions.",
    icon: UserCheck,
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-choose-us"
      className="py-16 sm:py-20 lg:py-24 bg-[#0B2929] text-[#F8F6F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14 pb-8 border-b border-[#F8F6F0]/12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A875] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F8F6F0] leading-[1.12] text-balance tracking-wide">
              Your Comfort. Your Smile. Our Priority.
            </h2>
          </div>

          <p className="text-sm sm:text-[15px] leading-relaxed text-[#F8F6F0]/75 max-w-md">
            Calm clinical attention in Sector 15, Chandigarh—built around clarity,
            cleanliness, and long-term oral wellbeing.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delayMs={idx * 60}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#123C3B]/65 border border-[#F8F6F0]/10 hover:border-[#C6A875]/55 transition-colors duration-200">
                  <div className="w-11 h-11 rounded-xl bg-[#0B2929] border border-[#C6A875]/35 text-[#C6A875] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[1.7]" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-[#F8F6F0] tracking-wide mb-2.5">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#F8F6F0]/75">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
