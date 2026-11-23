import React, { useEffect, useState } from "react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import { CLINIC_CONFIG, GalleryPhotoSlot } from "../config/clinicConfig";
import { Reveal } from "./Reveal";

export const GallerySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const items = CLINIC_CONFIG.gallery;

  const openLightbox = (idx: number) => setActiveIndex(idx);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % items.length);
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + items.length) % items.length
        );
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % items.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, items.length]);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const hasPhoto = (slot: GalleryPhotoSlot) =>
    Boolean(slot.imageUrl.trim()) && !failedImages[slot.id];

  const activeSlot = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A875] mb-3">
              Clinic Gallery
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0B2929] leading-[1.12] text-balance">
              A Closer Look at Our Clinic.
            </h2>
          </div>

          <p className="text-sm text-[#263332]/75 max-w-md leading-relaxed">
            Dedicated photo frames prepared for actual photographs of our reception,
            waiting lounge, treatment suite, equipment, and Dr Chawla’s portrait.
          </p>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((slot, idx) => {
            const loaded = hasPhoto(slot);
            return (
              <Reveal key={slot.id} delayMs={idx * 60}>
                <button
                  type="button"
                  onClick={() => openLightbox(idx)}
                  aria-label={`Expand ${slot.title} in gallery lightbox`}
                  className="group w-full text-left rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#123C3B]/10 hover:border-[#C6A875]/60 transition-all duration-300 shadow-[0_10px_30px_-20px_rgba(11,41,41,0.2)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C3B]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E7EDE7]">
                    {loaded ? (
                      <img
                        src={slot.imageUrl}
                        alt={slot.alt}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [slot.id]: true }))
                        }
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#E7EDE7] via-[#F2F4EE] to-[#F8F6F0] transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                        <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#C6A875]/45 flex items-center justify-center mb-3 text-[#123C3B]/75">
                          <Camera className="w-5 h-5 stroke-[1.6]" />
                        </div>
                        <p className="font-display text-xl font-semibold text-[#0B2929]">
                          {slot.title}
                        </p>
                        <p className="text-xs text-[#263332]/65 mt-1">
                          Clinic Photograph Placeholder · {slot.aspectHint}
                        </p>
                      </div>
                    )}

                    {/* Expand indicator */}
                    <span className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#F8F6F0]/90 text-[#123C3B] flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:bg-[#123C3B] group-hover:text-[#F8F6F0] transition-colors shadow-xs">
                      <Expand className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#0B2929]">
                        {slot.title}
                      </h3>
                      <p className="text-xs text-[#263332]/70 mt-0.5">
                        {slot.subtitle}
                      </p>
                    </div>
                    <span className="text-[11px] font-medium text-[#C6A875] tabular-nums shrink-0">
                      0{idx + 1}
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeSlot && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeSlot.title}
          className="fixed inset-0 z-50 bg-[#0B2929]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-[#F8F6F0] border border-[#C6A875]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Top Bar */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#123C3B]/10 bg-[#FFFFFF]">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#0B2929]">
                  {activeSlot.title}
                </h3>
                <p className="text-xs text-[#263332]/70">
                  {activeSlot.subtitle} ·{" "}
                  <span className="tabular-nums">
                    {activeIndex + 1} / {items.length}
                  </span>
                </p>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close gallery lightbox"
                className="w-10 h-10 rounded-lg text-[#123C3B] hover:bg-[#E7EDE7] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Media Frame */}
            <div className="relative bg-[#E7EDE7] aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center">
              {hasPhoto(activeSlot) ? (
                <img
                  src={activeSlot.imageUrl}
                  alt={activeSlot.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain bg-[#0B2929]/95"
                />
              ) : (
                <div className="p-8 sm:p-12 text-center max-w-md">
                  <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border border-[#C6A875]/50 flex items-center justify-center mx-auto mb-4 text-[#123C3B]">
                    <Camera className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#0B2929] mb-2">
                    {activeSlot.title}
                  </p>
                  <p className="text-sm text-[#263332]/75 leading-relaxed mb-4">
                    This slot is reserved for an authentic clinic photograph. Add the
                    image path for <code className="font-mono text-xs text-[#123C3B]">{activeSlot.id}</code> in{" "}
                    <code className="font-mono text-xs text-[#123C3B]">src/config/clinicConfig.ts</code>.
                  </p>
                  <span className="text-xs font-medium text-[#123C3B]/70">
                    Recommended format: {activeSlot.aspectHint}
                  </span>
                </div>
              )}

              {/* Previous & Next Controls */}
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous gallery image"
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#F8F6F0]/90 text-[#123C3B] hover:bg-[#123C3B] hover:text-[#F8F6F0] flex items-center justify-center shadow-md transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next gallery image"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#F8F6F0]/90 text-[#123C3B] hover:bg-[#123C3B] hover:text-[#F8F6F0] flex items-center justify-center shadow-md transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
