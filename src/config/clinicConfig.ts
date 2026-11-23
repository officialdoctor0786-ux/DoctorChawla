/**
 * Central Clinic Configuration
 * -----------------------------------------------------------------------------
 * Update the placeholder fields below with verified clinic details before
 * publishing to production. Keep phone numbers, WhatsApp, timings, and doctor
 * credentials accurate and verified by the clinic.
 */

export interface GalleryPhotoSlot {
  id: string;
  title: string;
  subtitle: string;
  aspectHint: string;
  /** Replace empty string with path or URL to actual clinic photograph (e.g. "/images/gallery/reception.jpg") */
  imageUrl: string;
  alt: string;
}

export interface DayTiming {
  day: string;
  hours: string;
  isVerified?: boolean;
}

/**
 * Single configurable WhatsApp number (country code + number, digits only, e.g. "9198XXXXXXXX").
 * Leave empty until the clinic's verified WhatsApp number is provided.
 */
export const CLINIC_WHATSAPP_NUMBER = "";

/**
 * Single configurable telephone number for Call Now button (e.g. "+91 172 XXXXXXX").
 * Leave empty until the clinic's verified telephone number is provided.
 */
export const CLINIC_PHONE_NUMBER = "";

/**
 * Single configurable clinic email address.
 * Leave empty until the clinic's verified email address is provided.
 */
export const CLINIC_EMAIL = "";

export const CLINIC_CONFIG = {
  clinicName: "Dr Chawla’s Multi-speciality Famicare Dental Clinic",
  shortBrandName: "Dr Chawla’s Famicare",
  locationLabel: "Multi-Speciality Dental Care · Chandigarh",
  closingLine: "Care for Every Smile.",
  copyrightYear: 2026,

  whatsapp: {
    number: CLINIC_WHATSAPP_NUMBER,
    defaultEnquiryMessage:
      "Hello, I would like to enquire about dental treatments and appointments at Dr Chawla’s Multi-speciality Famicare Dental Clinic.",
  },

  contact: {
    phone: CLINIC_PHONE_NUMBER,
    email: CLINIC_EMAIL,
    addressLine1: "First Floor, SCO 78,79, 15D,",
    addressLine2: "Sector 15, Chandigarh,",
    addressLine3: "160015, India.",
    fullAddress:
      "First Floor, SCO 78,79, 15D, Sector 15, Chandigarh, 160015, India.",
  },

  googleMaps: {
    searchDestination:
      "Dr Chawla’s Multi-speciality Famicare Dental Clinic, First Floor, SCO 78,79, Sector 15D, Chandigarh, 160015",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Dr+Chawla%E2%80%99s+Multi-speciality+Famicare+Dental+Clinic,+First+Floor,+SCO+78,79,+Sector+15D,+Chandigarh,+160015",
    searchUrl:
      "https://www.google.com/maps/search/?api=1&query=Dr+Chawla%E2%80%99s+Multi-speciality+Famicare+Dental+Clinic,+First+Floor,+SCO+78,79,+Sector+15D,+Chandigarh,+160015",
    embedUrl:
      "https://maps.google.com/maps?q=Dr%20Chawla%E2%80%99s%20Multi-speciality%20Famicare%20Dental%20Clinic,%20SCO%2078,79,%20Sector%2015D,%20Chandigarh,%20160015&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },

  media: {
    /**
     * Replace with actual clinic interior photograph or doctor portrait when ready.
     */
    heroImageUrl: "/src/assets/images/famicare_clinic_upgraded_1795426963156.jpg",
    heroImageAlt:
      "Renovated interior view of Dr Chawla’s Multi-speciality Famicare Dental Clinic in Sector 15, Chandigarh featuring warm ivory walls, walnut wood accents, and deep forest teal dental chairs",
    introImageUrl: "/src/assets/images/dental_studio_stilllife_1795426197484.jpg",
    introImageAlt:
      "Minimalist travertine stone and ceramic dental care studio composition",
  },

  doctor: {
    name: "Dr Chawla",
    practiceName: "Dr Chawla’s Multi-speciality Famicare Dental Clinic",
    description:
      "Dedicated to providing comprehensive dental care in a welcoming and patient-focused environment.",
    /**
     * Upload or link the real doctor's professional portrait photographs here.
     * Supports multiple swipeable portraits in the About Doctor section.
     */
    portraitUrl: "/assets/doctor/dr_chawla_1.jpg",
    portraitAlt:
      "Dr Chawla — Dental Care Professional at Dr Chawla’s Multi-speciality Famicare Dental Clinic, Sector 15, Chandigarh",
    portraits: [
      {
        url: "/assets/doctor/dr_chawla_1.jpg",
        alt: "Dr Chawla seated at the consultation desk inside Dr Chawla’s Multi-speciality Famicare Dental Clinic, Sector 15, Chandigarh",
        caption: "Dr Chawla · Consultation Desk",
      },
      {
        url: "/assets/doctor/dr_chawla_2.jpg",
        alt: "Dr Chawla inside the clinical operatory at Dr Chawla’s Multi-speciality Famicare Dental Clinic, Sector 15, Chandigarh",
        caption: "Dr Chawla · Clinical Operatory",
      },
    ],
    /**
     * Optional editable verified fields. Only displayed in the UI once verified values are added.
     */
    verifiedCredentials: {
      qualifications: "",
      degrees: "",
      yearsOfExperience: "",
      specialisations: "",
      professionalMemberships: "",
      awardsAndRecognition: "",
    },
  },

  timings: {
    verifiedListingStatus: "Open · Closes 7 PM",
    note: "Schedule details for individual days are editable and should be confirmed directly with the clinic.",
    days: [
      { day: "Monday", hours: "Closes 7:00 PM (Verify opening time)", isVerified: false },
      { day: "Tuesday", hours: "Closes 7:00 PM (Verify opening time)", isVerified: false },
      { day: "Wednesday", hours: "Closes 7:00 PM (Verify opening time)", isVerified: false },
      { day: "Thursday", hours: "Closes 7:00 PM (Verify opening time)", isVerified: false },
      { day: "Friday", hours: "Closes 7:00 PM (Verify opening time)", isVerified: false },
      { day: "Saturday", hours: "Closes 7:00 PM (Verify opening time)", isVerified: false },
      { day: "Sunday", hours: "Confirm availability with clinic", isVerified: false },
    ] as DayTiming[],
  },

  gallery: [
    {
      id: "reception",
      title: "Clinic Reception",
      subtitle: "Sector 15D, First Floor Welcome Desk",
      aspectHint: "4:3 Landscape",
      imageUrl: "",
      alt: "Clinic reception area at Dr Chawla’s Multi-speciality Famicare Dental Clinic",
    },
    {
      id: "waiting-area",
      title: "Waiting Area",
      subtitle: "Calm Patient Lounge",
      aspectHint: "4:3 Landscape",
      imageUrl: "",
      alt: "Patient waiting lounge at Dr Chawla’s Multi-speciality Famicare Dental Clinic",
    },
    {
      id: "treatment-room",
      title: "Dental Treatment Room",
      subtitle: "Clinical Operatory Suite",
      aspectHint: "4:3 Landscape",
      imageUrl: "",
      alt: "Dental treatment operatory at Dr Chawla’s Multi-speciality Famicare Dental Clinic",
    },
    {
      id: "clinic-interior",
      title: "Clinic Interior",
      subtitle: "Hygiene & Spatial Design",
      aspectHint: "4:3 Landscape",
      imageUrl: "",
      alt: "Interior architecture of Dr Chawla’s Multi-speciality Famicare Dental Clinic",
    },
    {
      id: "dental-equipment",
      title: "Dental Equipment",
      subtitle: "Diagnostic & Clinical Instrumentation",
      aspectHint: "4:3 Landscape",
      imageUrl: "",
      alt: "Dental equipment at Dr Chawla’s Multi-speciality Famicare Dental Clinic",
    },
    {
      id: "doctors-portrait",
      title: "Doctor’s Portrait",
      subtitle: "Dr Chawla in Clinic",
      aspectHint: "3:4 Portrait",
      imageUrl: "",
      alt: "Portrait of Dr Chawla at Famicare Dental Clinic in Chandigarh",
    },
  ] as GalleryPhotoSlot[],

  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  },
};

/**
 * Generates a WhatsApp click-to-chat URL with properly URL-encoded text.
 * Uses the configured clinic WhatsApp number when set, or opens WhatsApp
 * with the pre-filled message ready when the number is pending configuration.
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanedNumber = CLINIC_CONFIG.whatsapp.number.replace(/[^\d]/g, "");
  const encodedText = encodeURIComponent(message);
  if (cleanedNumber) {
    return `https://wa.me/${cleanedNumber}?text=${encodedText}`;
  }
  return `https://wa.me/?text=${encodedText}`;
}
