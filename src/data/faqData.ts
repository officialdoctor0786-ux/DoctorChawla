export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "book-appointment",
    question: "How can I book a dental appointment?",
    answer:
      "You can request an appointment using the online Appointment Request form on this page or by clicking any WhatsApp enquiry button. Once you submit your preferred date, time, and treatment, our clinic team will review availability and confirm your slot directly.",
  },
  {
    id: "treatments-available",
    question: "What dental treatments are available?",
    answer:
      "Dr Chawla’s Multi-speciality Famicare Dental Clinic offers comprehensive care across General Dentistry, Cosmetic Dentistry, Root Canal Treatments, Braces & Aligners, Dental Implants & Restorative Care, Gum Care, Advanced Dental Care, Children’s Dentistry, and Emergency Dental Consultations.",
  },
  {
    id: "need-appointment",
    question: "Do I need an appointment before visiting?",
    answer:
      "Requesting an appointment in advance is recommended so we can allocate dedicated time for your consultation and minimise waiting. For urgent dental concerns, please contact the clinic via WhatsApp or telephone to check same-day availability before arriving.",
  },
  {
    id: "cleaning-scaling",
    question: "Do you provide teeth cleaning and scaling?",
    answer:
      "Yes. We provide routine Teeth Cleaning, Scaling & Polishing, as well as Deep Cleaning and Scaling & Root Planing for gum health maintenance. Your dentist will recommend the appropriate level of cleaning after examining your teeth and gums.",
  },
  {
    id: "dental-implants",
    question: "Are dental implants available?",
    answer:
      "Yes. We offer Single Tooth Implants, Full Mouth Implants, and Implant-Supported Dentures, alongside conventional Dentures and Dental Bridges. Suitability for implants is always assessed individually through clinical examination and dental X-rays.",
  },
  {
    id: "braces-aligners",
    question: "Do you offer braces and aligners?",
    answer:
      "Yes. We offer Metal Braces, Ceramic Braces, and Invisible Aligners as part of our Teeth Alignment Correction services. A consultation helps determine which orthodontic option best fits your alignment needs and lifestyle.",
  },
  {
    id: "childrens-dental-care",
    question: "Do you provide children’s dental care?",
    answer:
      "Yes. We provide Kids Dental Care and Pediatric Dental Check-ups in a calm, welcoming environment, focusing on preventive check-ups, cavity protection, and helping children build comfortable lifelong dental habits.",
  },
  {
    id: "emergency-contact",
    question: "How can I contact the clinic for an emergency?",
    answer:
      "For an urgent toothache, broken tooth, or swelling, please send an immediate message via our WhatsApp enquiry button or call the clinic directly once the telephone number is listed, or visit us at First Floor, SCO 78,79, Sector 15D, Chandigarh during clinic hours.",
  },
];
