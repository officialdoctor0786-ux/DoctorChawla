/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { AboutDoctorSection } from "./components/AboutDoctorSection";
import { TreatmentsSection } from "./components/TreatmentsSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { GallerySection } from "./components/GallerySection";
import { AppointmentSection } from "./components/AppointmentSection";
import { ContactLocationSection } from "./components/ContactLocationSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { TreatmentCategoryId } from "./data/treatmentsData";

const OBSERVED_SECTION_IDS = [
  "home",
  "about-doctor",
  "treatments",
  "why-choose-us",
  "gallery",
  "book-appointment",
  "contact",
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [activeCategory, setActiveCategory] = useState<TreatmentCategoryId | "all">("all");
  const [preselectedTreatment, setPreselectedTreatment] = useState<string>(
    "General Dental Check-up"
  );

  // Dynamic canonical URL resolution per SEO guidelines
  useEffect(() => {
    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute(
        "href",
        window.location.origin + window.location.pathname
      );
    }
  }, []);

  // Active section scroll-spy for header underline indicator
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    OBSERVED_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    const headerOffset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const handleBookTreatment = (treatmentName: string) => {
    setPreselectedTreatment(treatmentName);
    scrollToSection("book-appointment");
  };

  const handleFooterCategorySelect = (category: TreatmentCategoryId) => {
    setActiveCategory(category);
    scrollToSection("treatments");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#263332]">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="flex-1">
        <HeroSection
          onBookClick={() => scrollToSection("book-appointment")}
          onExploreClick={() => scrollToSection("treatments")}
        />

        <IntroSection />

        <AboutDoctorSection
          onBookConsultation={() => handleBookTreatment("Dental Consultation")}
        />

        <TreatmentsSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onBookTreatment={handleBookTreatment}
        />

        <WhyChooseUsSection />

        <GallerySection />

        <AppointmentSection preselectedTreatment={preselectedTreatment} />

        <ContactLocationSection />

        <FaqSection />
      </main>

      <Footer
        onNavigate={scrollToSection}
        onSelectCategory={handleFooterCategorySelect}
      />

      <FloatingWhatsAppButton />
    </div>
  );
}
