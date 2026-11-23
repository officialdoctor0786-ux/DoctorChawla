export type TreatmentCategoryId =
  | "general"
  | "cosmetic"
  | "rct"
  | "braces"
  | "implants"
  | "gum"
  | "advanced"
  | "children"
  | "emergency";

export interface TreatmentCategory {
  id: TreatmentCategoryId;
  code: string;
  label: string;
  shortLabel: string;
  summary: string;
}

export interface TreatmentItem {
  id: string;
  categoryId: TreatmentCategoryId;
  name: string;
  shortDescription: string;
  detailedExplanation: string;
  benefits: string[];
}

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: "general",
    code: "A",
    label: "General Dentistry",
    shortLabel: "General",
    summary: "Preventive examinations, cleanings, diagnostics, and everyday restorative care.",
  },
  {
    id: "cosmetic",
    code: "B",
    label: "Cosmetic Dentistry",
    shortLabel: "Cosmetic",
    summary: "Aesthetic procedures tailored to enhance tooth shade, symmetry, and smile harmony.",
  },
  {
    id: "rct",
    code: "C",
    label: "Root Canal Treatments",
    shortLabel: "Root Canal",
    summary: "Endodontic care focused on preserving natural teeth affected by deep decay or infection.",
  },
  {
    id: "braces",
    code: "D",
    label: "Braces & Aligners",
    shortLabel: "Braces & Aligners",
    summary: "Orthodontic solutions to guide tooth alignment and improve bite balance.",
  },
  {
    id: "implants",
    code: "E",
    label: "Dental Implants & Restorative Care",
    shortLabel: "Implants & Restorative",
    summary: "Structured tooth-replacement options designed to restore chewing function and aesthetics.",
  },
  {
    id: "gum",
    code: "F",
    label: "Gum Care",
    shortLabel: "Gum Care",
    summary: "Periodontal therapies aimed at supporting healthy gums and underlying bone structure.",
  },
  {
    id: "advanced",
    code: "G",
    label: "Advanced Dental Care",
    shortLabel: "Advanced Care",
    summary: "Focused procedural care including laser applications, oral surgery, and protective appliances.",
  },
  {
    id: "children",
    code: "H",
    label: "Children’s Dentistry",
    shortLabel: "Children’s Care",
    summary: "Gentle, age-appropriate dental check-ups and preventive habits for growing smiles.",
  },
  {
    id: "emergency",
    code: "I",
    label: "Emergency Dental Care",
    shortLabel: "Emergency",
    summary: "Prompt assessment and urgent care consultations for acute toothache or dental trauma.",
  },
];

export const TREATMENTS: TreatmentItem[] = [
  // A. GENERAL DENTISTRY
  {
    id: "general-dental-check-up",
    categoryId: "general",
    name: "General Dental Check-up",
    shortDescription:
      "Thorough clinical examination of teeth, gums, and bite to monitor overall oral health.",
    detailedExplanation:
      "A routine dental check-up helps detect early signs of tooth decay, enamel wear, or gum inflammation before they progress. During the visit, your dentist evaluates your teeth, gums, and existing restorations and discusses any preventive steps suited to your needs.",
    benefits: [
      "Early identification of cavities and gum concerns",
      "Personalised guidance on daily brushing and flossing",
      "Helps plan conservative care before issues worsen",
    ],
  },
  {
    id: "dental-consultation",
    categoryId: "general",
    name: "Dental Consultation",
    shortDescription:
      "One-on-one clinical assessment to discuss symptoms, goals, and tailored treatment options.",
    detailedExplanation:
      "A focused consultation gives you dedicated time to share specific dental concerns, aesthetic goals, or discomfort. Your clinician reviews your oral health history, examines the area of concern, and explains appropriate treatment pathways clearly.",
    benefits: [
      "Clear explanation of findings and care options",
      "Transparent planning based on your priorities",
      "Opportunity to ask questions before any procedure",
    ],
  },
  {
    id: "teeth-cleaning",
    categoryId: "general",
    name: "Teeth Cleaning",
    shortDescription:
      "Professional removal of plaque and surface build-up to support clean teeth and fresh breath.",
    detailedExplanation:
      "Even with regular brushing, plaque can harden into tartar in hard-to-reach areas. Professional teeth cleaning gently clears plaque and calcified deposits around the gumline to help maintain healthier teeth and gums.",
    benefits: [
      "Removes stubborn plaque and tartar deposits",
      "Supports healthier gums and fresher breath",
      "Helps protect teeth against preventable decay",
    ],
  },
  {
    id: "scaling-polishing",
    categoryId: "general",
    name: "Scaling & Polishing",
    shortDescription:
      "Ultrasonic scaling and gentle surface polishing to remove tartar and everyday stains.",
    detailedExplanation:
      "Scaling removes hardened calculus along and slightly beneath the gum margin, followed by polishing to smooth enamel surfaces and lift superficial stains from tea, coffee, or food.",
    benefits: [
      "Reduces tartar accumulation along the gumline",
      "Leaves enamel feeling smoother and cleaner",
      "Helps reduce surface discolouration",
    ],
  },
  {
    id: "cavity-filling",
    categoryId: "general",
    name: "Cavity Filling",
    shortDescription:
      "Conservative restoration of decayed tooth structure to halt cavity progression.",
    detailedExplanation:
      "When decay creates a cavity in a tooth, removing the affected portion and placing a dental filling helps restore strength and protect the inner tooth from further bacterial entry.",
    benefits: [
      "Protects the tooth from deeper decay",
      "Restores comfortable biting and chewing surface",
      "Preserves natural tooth structure conservatively",
    ],
  },
  {
    id: "tooth-coloured-fillings",
    categoryId: "general",
    name: "Tooth-Coloured Fillings",
    shortDescription:
      "Shade-matched composite restorations that blend naturally with surrounding enamel.",
    detailedExplanation:
      "Composite resin fillings are carefully matched to your natural tooth shade and bonded directly to the prepared tooth. They offer a discreet finish suitable for both front and back teeth.",
    benefits: [
      "Blends naturally with your existing tooth colour",
      "Bonds securely to tooth structure",
      "Suitable for new cavities or replacing worn fillings",
    ],
  },
  {
    id: "fillings-sealants",
    categoryId: "general",
    name: "Fillings & Sealants",
    shortDescription:
      "Protective pit-and-fissure sealants and restorative fillings to shield vulnerable molars.",
    detailedExplanation:
      "Dental sealants place a thin protective coating over the deep grooves of premolars and molars where food and plaque tend to collect, working alongside fillings to protect decay-prone teeth.",
    benefits: [
      "Seals deep chewing grooves against plaque traps",
      "Quick, non-invasive preventive protection",
      "Helpful for decay-prone molars in children and adults",
    ],
  },
  {
    id: "dental-x-rays",
    categoryId: "general",
    name: "Dental X-rays",
    shortDescription:
      "Diagnostic radiographic imaging to evaluate tooth roots, bone levels, and hidden decay.",
    detailedExplanation:
      "Dental X-rays provide essential visibility beneath the gumline and between teeth where visual examination alone cannot reach. They assist in accurate diagnosis for cavities, root canals, wisdom teeth, and implants.",
    benefits: [
      "Reveals hidden decay between teeth or under restorations",
      "Assesses root health and supporting jawbone",
      "Supports accurate, well-informed treatment planning",
    ],
  },
  {
    id: "bad-breath-treatment",
    categoryId: "general",
    name: "Bad Breath Treatment",
    shortDescription:
      "Evaluation and targeted oral care to address underlying causes of persistent halitosis.",
    detailedExplanation:
      "Persistent bad breath often stems from plaque accumulation, gum inflammation, tongue coating, or untreated cavities. A structured assessment identifies the dental source and pairs professional cleaning with practical home-care guidance.",
    benefits: [
      "Identifies oral sources of persistent odour",
      "Combines clinical cleaning with hygiene coaching",
      "Supports lasting oral freshness and confidence",
    ],
  },

  // B. COSMETIC DENTISTRY
  {
    id: "teeth-whitening",
    categoryId: "cosmetic",
    name: "Teeth Whitening",
    shortDescription:
      "Clinical shade-brightening treatments designed to lift deep stains and discolouration.",
    detailedExplanation:
      "Professional teeth whitening uses dentist-supervised brightening agents tailored to your enamel sensitivity and shade goals, helping reduce yellowing caused by ageing or staining beverages.",
    benefits: [
      "Dentist-supervised for enamel and gum safety",
      "Even, controlled brightening across visible teeth",
      "Noticeable refresh without altering tooth shape",
    ],
  },
  {
    id: "smile-designing",
    categoryId: "cosmetic",
    name: "Smile Designing",
    shortDescription:
      "Comprehensive aesthetic planning harmonising tooth proportions, shade, and facial balance.",
    detailedExplanation:
      "Smile designing combines diagnostic assessment with tailored cosmetic procedures—such as whitening, bonding, veneers, or alignment—to create a natural-looking smile suited to your facial features.",
    benefits: [
      "Customised to your facial proportions and preferences",
      "Coordinated step-by-step aesthetic plan",
      "Addresses colour, spacing, and symmetry together",
    ],
  },
  {
    id: "dental-veneers",
    categoryId: "cosmetic",
    name: "Dental Veneers",
    shortDescription:
      "Thin custom-crafted facings placed on front teeth to refine colour, shape, and alignment.",
    detailedExplanation:
      "Dental veneers are ultra-thin shells bonded to the front surface of teeth to address stubborn discolouration, minor chips, uneven edges, or small gaps with a natural ceramic or composite finish.",
    benefits: [
      "Refines tooth shape, shade, and surface symmetry",
      "Stain-resistant finish options available",
      "Natural-looking translucency tailored to your smile",
    ],
  },
  {
    id: "teeth-bonding",
    categoryId: "cosmetic",
    name: "Teeth Bonding",
    shortDescription:
      "Conservative composite sculpting to repair chipped edges, small gaps, or worn areas.",
    detailedExplanation:
      "Cosmetic bonding applies tooth-coloured resin directly to enamel and shapes it artistically to restore chipped corners, smooth minor irregularities, or improve tooth symmetry—often in a single visit.",
    benefits: [
      "Minimal or no removal of healthy tooth enamel",
      "Repairs minor chips and uneven edges discreetly",
      "Natural shade-matched finish",
    ],
  },
  {
    id: "gap-closure-treatment",
    categoryId: "cosmetic",
    name: "Gap Closure Treatment",
    shortDescription:
      "Tailored aesthetic or orthodontic options to close unwanted spaces between teeth.",
    detailedExplanation:
      "Spaces between front or side teeth can be addressed conservatively with composite bonding, veneers, or orthodontic aligners and braces, depending on gap size and bite alignment.",
    benefits: [
      "Multiple conservative options based on gap width",
      "Improves smile continuity and visual balance",
      "Planned around long-term bite stability",
    ],
  },
  {
    id: "teeth-reshaping",
    categoryId: "cosmetic",
    name: "Teeth Reshaping",
    shortDescription:
      "Subtle enamel contouring to smooth rough edges and balance uneven tooth lengths.",
    detailedExplanation:
      "Also known as enameloplasty, teeth reshaping gently refines minor irregularities in tooth edges or pointed corners, helping adjacent teeth look more harmonious without extensive dental work.",
    benefits: [
      "Smooths minor chips and jagged enamel edges",
      "Conservative polishing with immediate visual refinement",
      "Can complement whitening or cosmetic bonding",
    ],
  },
  {
    id: "cosmetic-dental-procedures",
    categoryId: "cosmetic",
    name: "Cosmetic Dental Procedures",
    shortDescription:
      "Bespoke aesthetic combinations curated for brighter, balanced, natural-looking smiles.",
    detailedExplanation:
      "From subtle shade enhancements to full smile makeovers, cosmetic dental consultations help combine the right restorative and aesthetic techniques while keeping natural tooth health central.",
    benefits: [
      "Individualised aesthetic assessment",
      "Balanced focus on appearance and oral health",
      "Flexible options tailored to timeline and comfort",
    ],
  },

  // C. ROOT CANAL TREATMENTS
  {
    id: "root-canal-treatment",
    categoryId: "rct",
    name: "Root Canal Treatment",
    shortDescription:
      "Endodontic therapy to clear infected pulp and preserve your natural tooth structure.",
    detailedExplanation:
      "When deep decay or trauma reaches the inner nerve tissue of a tooth, root canal treatment carefully cleans, disinfects, and seals the root canals so the natural tooth can remain functional.",
    benefits: [
      "Saves your natural tooth from extraction",
      "Addresses source of internal tooth infection",
      "Restores comfortable chewing once properly crowned",
    ],
  },
  {
    id: "single-sitting-rct",
    categoryId: "rct",
    name: "Single Sitting RCT",
    shortDescription:
      "Streamlined root canal therapy completed in one appointment where clinically suitable.",
    detailedExplanation:
      "For select teeth without acute swelling or complex canal anatomy, root canal cleaning and sealing may be completed in a single extended visit, reducing the number of clinic trips required.",
    benefits: [
      "Fewer appointments when clinically appropriate",
      "Efficient cleaning and sealing protocol",
      "Assessment determines whether single or multi-visit care is safer",
    ],
  },
  {
    id: "pain-free-root-canal-treatment",
    categoryId: "rct",
    name: "Pain-Free Root Canal Treatment",
    shortDescription:
      "Root canal care performed with local anaesthesia and gentle techniques focused on comfort.",
    detailedExplanation:
      "Designed around patient comfort, this approach uses effective local anaesthesia, careful isolation, and modern rotary instrumentation to help keep the procedure as comfortable as possible while treating the affected tooth.",
    benefits: [
      "Comfort-focused anaesthetic and gentle clinical protocol",
      "Helps ease anxiety for nervous patients",
      "Aims to relieve toothache caused by pulp inflammation",
    ],
  },
  {
    id: "re-rct-failed-root-canal-treatment",
    categoryId: "rct",
    name: "Re-RCT / Failed Root Canal Treatment",
    shortDescription:
      "Endodontic retreatment to clean and re-seal teeth with recurrent symptoms after prior RCT.",
    detailedExplanation:
      "If a previously treated tooth develops new decay, missed canals, or persistent infection, retreatment carefully removes the prior filling material, disinfects the canal system, and places a fresh seal.",
    benefits: [
      "Offers a second chance to preserve the natural tooth",
      "Addresses missed canals or recurrent contamination",
      "Guided by diagnostic dental X-ray evaluation",
    ],
  },

  // D. BRACES & ALIGNERS
  {
    id: "metal-braces",
    categoryId: "braces",
    name: "Metal Braces",
    shortDescription:
      "Reliable, time-tested orthodontic brackets for correcting crowding, gaps, and bite alignment.",
    detailedExplanation:
      "Modern metal braces use sleek, compact brackets and gentle archwires to guide teeth steadily into healthier alignment, making them effective for both straightforward and complex orthodontic cases.",
    benefits: [
      "Effective across mild to complex alignment needs",
      "Durable fixed system with predictable progress",
      "Suitable for teenagers and adults",
    ],
  },
  {
    id: "ceramic-braces",
    categoryId: "braces",
    name: "Ceramic Braces",
    shortDescription:
      "Tooth-coloured brackets offering discreet fixed orthodontic correction.",
    detailedExplanation:
      "Ceramic braces function similarly to traditional braces while using translucent or tooth-shaded brackets that blend more subtly with your natural teeth during daily conversations and photos.",
    benefits: [
      "Less noticeable appearance than metal brackets",
      "Consistent control over tooth movement",
      "Well suited for image-conscious teens and adults",
    ],
  },
  {
    id: "invisible-aligners",
    categoryId: "braces",
    name: "Invisible Aligners",
    shortDescription:
      "Clear, removable custom trays that gradually straighten teeth without fixed brackets.",
    detailedExplanation:
      "Clear aligners consist of a series of transparent, custom-fitted trays worn over the teeth. Because they are removable for meals and brushing, they integrate smoothly into everyday routines.",
    benefits: [
      "Virtually invisible when worn",
      "Removable for eating, brushing, and flossing",
      "Smooth tray edges without metal wires",
    ],
  },
  {
    id: "teeth-alignment-correction",
    categoryId: "braces",
    name: "Teeth Alignment Correction",
    shortDescription:
      "Comprehensive orthodontic planning to align crooked teeth and balance your bite.",
    detailedExplanation:
      "Aligned teeth are easier to clean and distribute chewing forces more evenly. An orthodontic evaluation reviews crowding, spacing, and jaw bite to recommend braces or clear aligners suited to your case.",
    benefits: [
      "Supports easier brushing and gum hygiene",
      "Balances chewing forces across teeth",
      "Personalised options across braces and aligners",
    ],
  },

  // E. DENTAL IMPLANTS & RESTORATIVE CARE
  {
    id: "single-tooth-implants",
    categoryId: "implants",
    name: "Single Tooth Implants",
    shortDescription:
      "Standalone replacement for a missing tooth without grinding down neighbouring teeth.",
    detailedExplanation:
      "A single dental implant acts as an artificial tooth root placed in the jawbone, supporting a custom crown that restores natural appearance and biting strength independently of adjacent teeth.",
    benefits: [
      "Preserves neighbouring healthy teeth untouched",
      "Helps maintain jawbone volume at the missing site",
      "Natural-looking crown matched to adjacent teeth",
    ],
  },
  {
    id: "full-mouth-implants",
    categoryId: "implants",
    name: "Full Mouth Implants",
    shortDescription:
      "Comprehensive implant-based rehabilitation for patients missing most or all teeth.",
    detailedExplanation:
      "Full mouth implant care uses strategically positioned implants to support full-arch fixed bridges or prostheses, offering improved stability and chewing confidence compared with conventional removable plates.",
    benefits: [
      "Restores full-arch dental aesthetics and function",
      "Enhanced stability while speaking and chewing",
      "Structured multi-stage planning tailored to bone health",
    ],
  },
  {
    id: "implant-supported-dentures",
    categoryId: "implants",
    name: "Implant-Supported Dentures",
    shortDescription:
      "Overdentures anchored securely to dental implants to minimise slipping and movement.",
    detailedExplanation:
      "Unlike conventional dentures that rest solely on the gums, implant-supported dentures snap onto implants placed in the jaw, giving noticeably firmer retention while remaining removable for cleaning.",
    benefits: [
      "Reduces shifting or looseness during meals",
      "Improves comfort compared with loose plates",
      "Easy to remove for daily hygiene maintenance",
    ],
  },
  {
    id: "dentures",
    categoryId: "implants",
    name: "Dentures",
    shortDescription:
      "Custom partial or complete removable prostheses crafted for fit, comfort, and function.",
    detailedExplanation:
      "Modern dentures are individually measured and shaped to support facial contours, speech clarity, and everyday chewing when several or all teeth are missing.",
    benefits: [
      "Non-surgical option for replacing multiple teeth",
      "Customised shade and tooth arrangement",
      "Supports facial profile and everyday chewing",
    ],
  },
  {
    id: "dental-bridges",
    categoryId: "implants",
    name: "Dental Bridges",
    shortDescription:
      "Fixed restorations anchored to adjacent teeth to span gaps left by missing teeth.",
    detailedExplanation:
      "A dental bridge fills the space of one or more missing teeth using custom crowns on neighbouring support teeth, helping prevent nearby teeth from drifting out of position.",
    benefits: [
      "Fixed, non-removable tooth replacement",
      "Prevents adjacent teeth from shifting into gaps",
      "Shade-matched ceramic options for natural appearance",
    ],
  },

  // F. GUM CARE
  {
    id: "deep-cleaning",
    categoryId: "gum",
    name: "Deep Cleaning",
    shortDescription:
      "Targeted cleaning beneath the gumline to manage plaque build-up in periodontal pockets.",
    detailedExplanation:
      "When plaque and tartar extend below the gum margin, routine polishing is not enough. Deep cleaning gently clears deposits from beneath the gums so irritated tissue can heal and reattach.",
    benefits: [
      "Clears hard-to-reach deposits below the gumline",
      "Helps calm gum inflammation and bleeding",
      "Supports long-term tooth stability",
    ],
  },
  {
    id: "scaling-root-planing",
    categoryId: "gum",
    name: "Scaling & Root Planing",
    shortDescription:
      "Non-surgical periodontal therapy to clean tooth roots and smooth root surfaces.",
    detailedExplanation:
      "Scaling removes tartar along the root surface while root planing gently smooths rough areas where bacteria gather, helping reduce pocket depth and support healthier gum tissue.",
    benefits: [
      "Helps control progression of gum disease",
      "Smooths root surfaces to discourage bacterial plaque",
      "Conservative, non-surgical periodontal management",
    ],
  },
  {
    id: "gum-infection-treatment",
    categoryId: "gum",
    name: "Gum Infection Treatment",
    shortDescription:
      "Clinical management for swollen, tender, or infected gum tissues.",
    detailedExplanation:
      "Gum infections can cause tenderness, swelling, or localised discharge. Prompt clinical evaluation removes irritants, addresses infection, and establishes a recovery plan to protect supporting bone.",
    benefits: [
      "Targets localised gum swelling and discomfort",
      "Helps prevent infection from affecting tooth support",
      "Includes follow-up hygiene recommendations",
    ],
  },
  {
    id: "bleeding-gums-treatment",
    categoryId: "gum",
    name: "Bleeding Gums Treatment",
    shortDescription:
      "Assessment and gentle care to resolve gum bleeding triggered by plaque or gingivitis.",
    detailedExplanation:
      "Bleeding during brushing is often an early sign of gingivitis. Addressing plaque accumulation with gentle professional cleaning and tailored brushing guidance helps restore firmer, healthier gums.",
    benefits: [
      "Addresses early gingivitis before deeper damage",
      "Gentle removal of irritating tartar deposits",
      "Clear home-care steps for everyday gum health",
    ],
  },
  {
    id: "general-gum-treatment",
    categoryId: "gum",
    name: "General Gum Treatment",
    shortDescription:
      "Ongoing periodontal maintenance and monitoring for healthy gums and supporting bone.",
    detailedExplanation:
      "Healthy gums form the foundation of every smile. General gum care includes regular pocket assessments, maintenance cleanings, and personalised advice to keep gum tissues resilient.",
    benefits: [
      "Protects the foundation supporting your teeth",
      "Supports fresh breath and comfortable chewing",
      "Scheduled maintenance adapted to your gum health",
    ],
  },

  // G. ADVANCED DENTAL CARE
  {
    id: "laser-dentistry",
    categoryId: "advanced",
    name: "Laser Dentistry",
    shortDescription:
      "Precision soft-tissue laser applications supporting clean, conservative clinical care.",
    detailedExplanation:
      "Dental lasers can assist with select soft-tissue contouring, gum disinfection, and minor oral procedures, offering controlled precision and minimal tissue disturbance where clinically indicated.",
    benefits: [
      "Precise targeting of soft oral tissues",
      "Supports tidy clinical margins during select procedures",
      "Evaluated case-by-case for clinical suitability",
    ],
  },
  {
    id: "oral-surgery",
    categoryId: "advanced",
    name: "Oral Surgery",
    shortDescription:
      "Carefully planned extractions, wisdom tooth care, and minor surgical procedures.",
    detailedExplanation:
      "From impacted wisdom teeth to non-restorable tooth extractions and minor surgical corrections, procedures are planned with diagnostic imaging, local anaesthesia, and clear post-operative care instructions.",
    benefits: [
      "Guided by pre-operative clinical and X-ray assessment",
      "Focus on safe technique and guided recovery",
      "Detailed aftercare support following your visit",
    ],
  },
  {
    id: "dental-reshaping",
    categoryId: "advanced",
    name: "Dental Reshaping",
    shortDescription:
      "Precision tooth and bite adjustment to relieve high spots or refine enamel contours.",
    detailedExplanation:
      "Minor structural adjustments help balance uneven biting contacts or smooth chipped enamel edges, reducing localised pressure and improving day-to-day comfort.",
    benefits: [
      "Refines uneven tooth contacts and edges",
      "Conservative, tooth-preserving approach",
      "Supports smoother function and aesthetics",
    ],
  },
  {
    id: "mouth-guards",
    categoryId: "advanced",
    name: "Mouth Guards",
    shortDescription:
      "Custom-fitted protective guards for sports activities and night-time teeth grinding.",
    detailedExplanation:
      "Custom dental guards are moulded accurately to your teeth to cushion impact during contact sports or protect enamel and jaw joints from night-time clenching and grinding (bruxism).",
    benefits: [
      "Accurate custom fit for comfortable breathing and wear",
      "Helps protect enamel from grinding wear and fractures",
      "Shields teeth and lips during sports",
    ],
  },

  // H. CHILDREN’S DENTISTRY
  {
    id: "kids-dental-care",
    categoryId: "children",
    name: "Kids Dental Care",
    shortDescription:
      "Gentle, reassuring dental care tailored for infants, toddlers, and growing children.",
    detailedExplanation:
      "Positive early dental visits help children feel comfortable in the clinic. Care covers cavity prevention, gentle restorations for milk teeth, and parent guidance on brushing and nutrition.",
    benefits: [
      "Calm, child-friendly pace and communication",
      "Protects primary teeth that guide adult teeth",
      "Builds lifelong healthy oral hygiene habits",
    ],
  },
  {
    id: "pediatric-dental-check-ups",
    categoryId: "children",
    name: "Pediatric Dental Check-ups",
    shortDescription:
      "Routine growth monitoring, cavity screening, and preventive care for young smiles.",
    detailedExplanation:
      "Regular pediatric check-ups track jaw development, tooth eruption timing, and early enamel health so small concerns can be guided gently before becoming uncomfortable.",
    benefits: [
      "Monitors tooth eruption and jaw alignment early",
      "Early preventive sealants and fluoride guidance where advised",
      "Helps reduce dental anxiety through familiar visits",
    ],
  },

  // I. EMERGENCY DENTAL CARE
  {
    id: "toothache-consultation",
    categoryId: "emergency",
    name: "Toothache Consultation",
    shortDescription:
      "Focused urgent assessment to identify the cause of sudden or persistent dental pain.",
    detailedExplanation:
      "A toothache can stem from decay, a cracked filling, gum irritation, or nerve inflammation. Prompt clinical examination and targeted diagnostics help establish safe next steps to address the source.",
    benefits: [
      "Prioritised diagnostic check for acute pain",
      "Identifies underlying dental or gum cause",
      "Clear plan for immediate and follow-up care",
    ],
  },
  {
    id: "broken-tooth-treatment",
    categoryId: "emergency",
    name: "Broken Tooth Treatment",
    shortDescription:
      "Timely assessment and stabilisation for chipped, fractured, or knocked teeth.",
    detailedExplanation:
      "Accidental chips or fractures can expose sensitive tooth layers or sharp edges. Prompt dental evaluation assesses nerve vitality and restores the tooth using bonding, crowns, or protective care.",
    benefits: [
      "Protects exposed enamel and sensitive dentin",
      "Smooths sharp edges to prevent tongue or lip injury",
      "Restores form and function promptly",
    ],
  },
  {
    id: "emergency-dental-consultation",
    categoryId: "emergency",
    name: "Emergency Dental Consultation",
    shortDescription:
      "Urgent clinical attention for swelling, dental trauma, lost crowns, or sudden discomfort.",
    detailedExplanation:
      "When an unexpected dental issue arises, contact the clinic promptly to request an urgent slot. Our team guides you on interim comfort steps and arranges timely clinical evaluation.",
    benefits: [
      "Guidance on what to do before reaching the clinic",
      "Focused examination for swelling, trauma, or loose restorations",
      "Direct WhatsApp and clinic contact options for enquiries",
    ],
  },
];
