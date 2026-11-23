import React, { useEffect, useMemo, useState } from "react";
import {
  Stethoscope,
  Sparkles,
  Activity,
  Smile,
  ShieldPlus,
  HeartPulse,
  Cpu,
  Baby,
  AlertCircle,
  ArrowRight,
  X,
  Check,
  Calendar,
} from "lucide-react";
import {
  TREATMENT_CATEGORIES,
  TREATMENTS,
  TreatmentCategoryId,
  TreatmentItem,
} from "../data/treatmentsData";
import { CLINIC_CONFIG, buildWhatsAppUrl } from "../config/clinicConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

interface TreatmentsSectionProps {
  activeCategory: TreatmentCategoryId | "all";
  onSelectCategory: (category: TreatmentCategoryId | "all") => void;
  onBookTreatment: (treatmentName: string) => void;
}

const CATEGORY_ICONS: Record<TreatmentCategoryId, React.ComponentType<{ className?: string }>> = {
  general: Stethoscope,
  cosmetic: Sparkles,
  rct: Activity,
  braces: Smile,
  implants: ShieldPlus,
  gum: HeartPulse,
  advanced: Cpu,
  children: Baby,
  emergency: AlertCircle,
};

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onBookTreatment,
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);

  const filteredTreatments = useMemo(() => {
    if (activeCategory === "all") return TREATMENTS;
    return TREATMENTS.filter((item) => item.categoryId === activeCategory);
  }, [activeCategory]);

  const activeCategoryMeta = useMemo(() => {
    if (activeCategory === "all") return null;
    return TREATMENT_CATEGORIES.find((cat) => cat.id === activeCategory) ?? null;
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedTreatment) {
        setSelectedTreatment(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedTreatment]);

  useEffect(() => {
    if (selectedTreatment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTreatment]);

  const getCategoryById = (id: TreatmentCategoryId) =>
    TREATMENT_CATEGORIES.find((c) => c.id === id);

  return (
    <section
      id="treatments"
      className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-y border-[#123C3B]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <Reveal className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A875] mb-3">
            Treatments & Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0B2929] leading-[1.12] text-balance mb-4">
            Comprehensive Dental Care, All Under One Roof.
          </h2>
          <p className="text-[15px] sm:text-base leading-[1.7] text-[#263332]/80">
            Explore our range of dental treatments designed to support your oral
            health and smile goals.
          </p>
        </Reveal>

        {/* Interactive Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter dental treatments by category"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 border-b border-[#123C3B]/10"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === "all"}
            onClick={() => onSelectCategory("all")}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 min-h-[42px] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#123C3B] ${
              activeCategory === "all"
                ? "bg-[#123C3B] text-[#F8F6F0]"
                : "bg-[#F8F6F0] text-[#263332]/80 hover:bg-[#E7EDE7] hover:text-[#123C3B]"
            }`}
          >
            All Treatments ({TREATMENTS.length})
          </button>

          {TREATMENT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(category.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 min-h-[42px] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#123C3B] ${
                  isActive
                    ? "bg-[#123C3B] text-[#F8F6F0]"
                    : "bg-[#F8F6F0] text-[#263332]/80 hover:bg-[#E7EDE7] hover:text-[#123C3B]"
                }`}
              >
                {category.code}. {category.label}
              </button>
            );
          })}
        </div>

        {/* Active Category Summary Line */}
        {activeCategoryMeta && (
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-[#263332]/80">
            <p>
              <span className="font-semibold text-[#123C3B]">
                {activeCategoryMeta.code}. {activeCategoryMeta.label}:
              </span>{" "}
              {activeCategoryMeta.summary}
            </p>
            <span className="text-xs font-medium text-[#263332]/60 tabular-nums shrink-0">
              {filteredTreatments.length} treatments
            </span>
          </div>
        )}

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredTreatments.map((treatment) => {
            const cat = getCategoryById(treatment.categoryId);
            const Icon = CATEGORY_ICONS[treatment.categoryId];
            return (
              <article
                key={treatment.id}
                onClick={() => setSelectedTreatment(treatment)}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-[#F8F6F0]/75 border border-[#123C3B]/10 hover:bg-[#FFFFFF] hover:border-[#C6A875]/60 hover:shadow-[0_14px_34px_-16px_rgba(11,41,41,0.16)] transition-all duration-200 cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E7EDE7] text-[#123C3B] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#123C3B] group-hover:text-[#F8F6F0]">
                      <Icon className="w-5 h-5" />
                    </div>
                    {cat && (
                      <span className="text-[11px] font-medium tracking-[0.06em] text-[#263332]/60 text-right">
                        {cat.code} · {cat.shortLabel}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-[#0B2929] leading-snug mb-2.5 group-hover:text-[#123C3B] transition-colors">
                    {treatment.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#263332]/80 mb-6">
                    {treatment.shortDescription}
                  </p>
                </div>

                <div
                  className="pt-4 border-t border-[#123C3B]/10 flex items-center justify-between gap-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedTreatment(treatment)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#123C3B] hover:text-[#0B2929] transition-colors py-1.5 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookTreatment(treatment.name)}
                    className="inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold text-[#123C3B] bg-[#E7EDE7] rounded-lg hover:bg-[#123C3B] hover:text-[#F8F6F0] transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[38px] cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Treatment Detail Modal */}
      {selectedTreatment && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="treatment-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B2929]/65 backdrop-blur-xs"
          onClick={() => setSelectedTreatment(null)}
        >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#F8F6F0] border border-[#C6A875]/40 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-[#123C3B]/12">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C6A875] mb-1.5">
                  {getCategoryById(selectedTreatment.categoryId)?.label}
                </p>
                <h3
                  id="treatment-modal-title"
                  className="font-display text-2xl sm:text-3xl font-semibold text-[#0B2929] leading-tight"
                >
                  {selectedTreatment.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTreatment(null)}
                aria-label="Close treatment details"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#263332]/70 hover:text-[#0B2929] hover:bg-[#123C3B]/8 transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[15px] sm:text-base leading-[1.7] text-[#263332]/85 mb-6">
              {selectedTreatment.detailedExplanation}
            </p>

            <div className="mb-6 p-5 rounded-xl bg-[#FFFFFF] border border-[#123C3B]/10">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#123C3B] mb-3">
                How This Care Helps
              </p>
              <ul className="space-y-2.5">
                {selectedTreatment.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-sm text-[#263332]/85 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-[#C6A875] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-[#263332]/65 mb-6 leading-relaxed">
              Individual suitability and treatment timelines are confirmed following an
              in-clinic clinical assessment at {CLINIC_CONFIG.shortBrandName}.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const name = selectedTreatment.name;
                  setSelectedTreatment(null);
                  onBookTreatment(name);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#F8F6F0] bg-[#123C3B] rounded-lg hover:bg-[#0B2929] transition-colors min-h-[46px] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={buildWhatsAppUrl(
                  `Hello ${CLINIC_CONFIG.clinicName}, I would like to enquire about ${selectedTreatment.name} and available appointment timings.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#123C3B] bg-[#E7EDE7] border border-[#123C3B]/15 rounded-lg hover:bg-[#123C3B]/12 transition-colors min-h-[46px]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
