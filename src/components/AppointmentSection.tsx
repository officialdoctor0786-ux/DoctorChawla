import React, { useEffect, useMemo, useState } from "react";
import { CalendarCheck2, Check, Copy, Info, AlertCircle } from "lucide-react";
import { CLINIC_CONFIG, buildWhatsAppUrl } from "../config/clinicConfig";
import { TREATMENT_CATEGORIES, TREATMENTS } from "../data/treatmentsData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

interface AppointmentSectionProps {
  preselectedTreatment: string;
}

interface FormValues {
  fullName: string;
  mobileNumber: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  treatment?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const TIME_SLOTS = [
  "Morning (10:00 AM – 12:00 PM)",
  "Midday (12:00 PM – 2:00 PM)",
  "Afternoon (2:00 PM – 4:30 PM)",
  "Evening (4:30 PM – 7:00 PM)",
];

function validateIndianMobile(raw: string): { valid: boolean; normalized: string } {
  const digits = raw.replace(/[^\d]/g, "");
  let tenDigit = digits;
  if (digits.length === 12 && digits.startsWith("91")) {
    tenDigit = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith("0")) {
    tenDigit = digits.slice(1);
  }
  const valid = /^[6-9]\d{9}$/.test(tenDigit);
  return { valid, normalized: tenDigit ? `+91 ${tenDigit}` : raw.trim() };
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedTreatment,
}) => {
  const todayIso = useMemo(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const [values, setValues] = useState<FormValues>({
    fullName: "",
    mobileNumber: "",
    treatment: preselectedTreatment || "General Dental Check-up",
    preferredDate: "",
    preferredTime: TIME_SLOTS[0],
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedPayload, setSubmittedPayload] = useState<{
    messageText: string;
    whatsappUrl: string;
    summary: FormValues;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedTreatment) {
      setValues((prev) => ({ ...prev, treatment: preselectedTreatment }));
      setSubmittedPayload(null);
    }
  }, [preselectedTreatment]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your full name (at least 2 characters).";
    }
    const mobileCheck = validateIndianMobile(values.mobileNumber);
    if (!mobileCheck.valid) {
      nextErrors.mobileNumber =
        "Please enter a valid 10-digit Indian mobile number (starting with 6–9).";
    }
    if (!values.treatment.trim()) {
      nextErrors.treatment = "Please select your preferred treatment.";
    }
    if (!values.preferredDate) {
      nextErrors.preferredDate = "Please select a preferred appointment date.";
    } else if (values.preferredDate < todayIso) {
      nextErrors.preferredDate = "Please choose today or an upcoming date.";
    }
    if (!values.preferredTime.trim()) {
      nextErrors.preferredTime = "Please choose a preferred time window.";
    }
    return nextErrors;
  };

  const formatAppointmentMessage = (data: FormValues): string => {
    const mobileFormatted = validateIndianMobile(data.mobileNumber).normalized;
    const additionalMsg = data.message.trim() || "None";

    return [
      "Hello Dr Chawla’s Dental Clinic,",
      "",
      "I would like to request a dental appointment.",
      "",
      `Name: ${data.fullName.trim()}`,
      `Phone: ${mobileFormatted}`,
      `Treatment: ${data.treatment}`,
      `Preferred Date: ${data.preferredDate}`,
      `Preferred Time: ${data.preferredTime}`,
      `Additional Message: ${additionalMsg}`,
      "",
      "Please confirm the appointment availability.",
      "",
      "Thank you.",
    ].join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const messageText = formatAppointmentMessage(values);
    const whatsappUrl = buildWhatsAppUrl(messageText);

    setSubmittedPayload({
      messageText,
      whatsappUrl,
      summary: { ...values },
    });
    setCopied(false);

    // Open WhatsApp via programmatic anchor click (avoids window.open popup blocks)
    const link = document.createElement("a");
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMessage = async () => {
    if (!submittedPayload) return;
    try {
      await navigator.clipboard.writeText(submittedPayload.messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="book-appointment"
      className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-y border-[#123C3B]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Explanatory Guidance */}
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A875] mb-3">
              Appointment Request
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0B2929] leading-[1.12] text-balance mb-5">
              Let’s Get Your Smile Started.
            </h2>
            <p className="text-[15px] sm:text-base leading-[1.7] text-[#263332]/85 mb-8">
              Share your preferred treatment, date, and time below. Submitting the form
              prepares a structured WhatsApp request so our clinic team can review
              availability and confirm your appointment directly.
            </p>

            <div className="space-y-4 pt-6 border-t border-[#123C3B]/12">
              <div className="flex items-start gap-3.5">
                <CalendarCheck2 className="w-5 h-5 text-[#123C3B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#0B2929]">
                    Appointment Request Workflow
                  </p>
                  <p className="text-xs sm:text-sm text-[#263332]/75 mt-0.5 leading-relaxed">
                    Slots are subject to confirmation by our clinic desk. You will
                    review the pre-filled WhatsApp message before sending.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Info className="w-5 h-5 text-[#C6A875] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#0B2929]">
                    Clinic Address
                  </p>
                  <p className="text-xs sm:text-sm text-[#263332]/75 mt-0.5 leading-relaxed">
                    {CLINIC_CONFIG.contact.fullAddress}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Form Container */}
          <Reveal delayMs={90} className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#F8F6F0] border border-[#123C3B]/12 shadow-[0_18px_45px_-26px_rgba(11,41,41,0.2)]">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* 1. Full Name */}
                  <div>
                    <label
                      htmlFor="appointment-name"
                      className="block text-xs sm:text-sm font-semibold text-[#0B2929] mb-1.5"
                    >
                      Full Name <span className="text-[#9E2A2B]">*</span>
                    </label>
                    <input
                      id="appointment-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Aarav Sharma"
                      value={values.fullName}
                      onChange={(e) => {
                        setValues({ ...values, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      aria-invalid={Boolean(errors.fullName)}
                      className={`w-full px-4 py-3 text-sm rounded-lg bg-[#FFFFFF] border transition-colors min-h-[46px] focus:outline-none focus:ring-2 focus:ring-[#123C3B]/25 ${
                        errors.fullName
                          ? "border-[#9E2A2B] focus:border-[#9E2A2B]"
                          : "border-[#123C3B]/18 focus:border-[#123C3B]"
                      }`}
                    />
                    {errors.fullName && (
                      <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* 2. Mobile Number */}
                  <div>
                    <label
                      htmlFor="appointment-phone"
                      className="block text-xs sm:text-sm font-semibold text-[#0B2929] mb-1.5"
                    >
                      Mobile Number (India) <span className="text-[#9E2A2B]">*</span>
                    </label>
                    <input
                      id="appointment-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="e.g. 98765 43210"
                      value={values.mobileNumber}
                      onChange={(e) => {
                        setValues({ ...values, mobileNumber: e.target.value });
                        if (errors.mobileNumber)
                          setErrors({ ...errors, mobileNumber: undefined });
                      }}
                      aria-invalid={Boolean(errors.mobileNumber)}
                      className={`w-full px-4 py-3 text-sm rounded-lg bg-[#FFFFFF] border transition-colors min-h-[46px] focus:outline-none focus:ring-2 focus:ring-[#123C3B]/25 ${
                        errors.mobileNumber
                          ? "border-[#9E2A2B] focus:border-[#9E2A2B]"
                          : "border-[#123C3B]/18 focus:border-[#123C3B]"
                      }`}
                    />
                    {errors.mobileNumber && (
                      <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.mobileNumber}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 3. Preferred Treatment */}
                <div>
                  <label
                    htmlFor="appointment-treatment"
                    className="block text-xs sm:text-sm font-semibold text-[#0B2929] mb-1.5"
                  >
                    Preferred Treatment <span className="text-[#9E2A2B]">*</span>
                  </label>
                  <select
                    id="appointment-treatment"
                    required
                    value={values.treatment}
                    onChange={(e) => {
                      setValues({ ...values, treatment: e.target.value });
                      if (errors.treatment) setErrors({ ...errors, treatment: undefined });
                    }}
                    aria-invalid={Boolean(errors.treatment)}
                    className="w-full px-4 py-3 text-sm rounded-lg bg-[#FFFFFF] border border-[#123C3B]/18 focus:border-[#123C3B] focus:outline-none focus:ring-2 focus:ring-[#123C3B]/25 min-h-[46px]"
                  >
                    <option value="General Consultation / Not Sure Yet">
                      General Consultation / Not Sure Yet
                    </option>
                    {TREATMENT_CATEGORIES.map((category) => (
                      <optgroup
                        key={category.id}
                        label={`${category.code}. ${category.label}`}
                      >
                        {TREATMENTS.filter((t) => t.categoryId === category.id).map(
                          (item) => (
                            <option key={item.id} value={item.name}>
                              {item.name}
                            </option>
                          )
                        )}
                      </optgroup>
                    ))}
                  </select>
                  {errors.treatment && (
                    <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.treatment}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* 4. Preferred Date */}
                  <div>
                    <label
                      htmlFor="appointment-date"
                      className="block text-xs sm:text-sm font-semibold text-[#0B2929] mb-1.5"
                    >
                      Preferred Appointment Date <span className="text-[#9E2A2B]">*</span>
                    </label>
                    <input
                      id="appointment-date"
                      type="date"
                      required
                      min={todayIso}
                      value={values.preferredDate}
                      onChange={(e) => {
                        setValues({ ...values, preferredDate: e.target.value });
                        if (errors.preferredDate)
                          setErrors({ ...errors, preferredDate: undefined });
                      }}
                      aria-invalid={Boolean(errors.preferredDate)}
                      className={`w-full px-4 py-3 text-sm rounded-lg bg-[#FFFFFF] border transition-colors min-h-[46px] tabular-nums focus:outline-none focus:ring-2 focus:ring-[#123C3B]/25 ${
                        errors.preferredDate
                          ? "border-[#9E2A2B] focus:border-[#9E2A2B]"
                          : "border-[#123C3B]/18 focus:border-[#123C3B]"
                      }`}
                    />
                    {errors.preferredDate && (
                      <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>

                  {/* 5. Preferred Time */}
                  <div>
                    <label
                      htmlFor="appointment-time"
                      className="block text-xs sm:text-sm font-semibold text-[#0B2929] mb-1.5"
                    >
                      Preferred Time <span className="text-[#9E2A2B]">*</span>
                    </label>
                    <select
                      id="appointment-time"
                      required
                      value={values.preferredTime}
                      onChange={(e) => {
                        setValues({ ...values, preferredTime: e.target.value });
                        if (errors.preferredTime)
                          setErrors({ ...errors, preferredTime: undefined });
                      }}
                      aria-invalid={Boolean(errors.preferredTime)}
                      className="w-full px-4 py-3 text-sm rounded-lg bg-[#FFFFFF] border border-[#123C3B]/18 focus:border-[#123C3B] focus:outline-none focus:ring-2 focus:ring-[#123C3B]/25 min-h-[46px]"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.preferredTime}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 6. Additional Message */}
                <div>
                  <label
                    htmlFor="appointment-message"
                    className="block text-xs sm:text-sm font-semibold text-[#0B2929] mb-1.5"
                  >
                    Message / Additional Information
                  </label>
                  <textarea
                    id="appointment-message"
                    rows={3}
                    placeholder="Share any symptoms, questions, or scheduling preferences (optional)"
                    value={values.message}
                    onChange={(e) =>
                      setValues({ ...values, message: e.target.value })
                    }
                    className="w-full px-4 py-3 text-sm rounded-lg bg-[#FFFFFF] border border-[#123C3B]/18 focus:border-[#123C3B] focus:outline-none focus:ring-2 focus:ring-[#123C3B]/25 resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-[#F8F6F0] bg-[#123C3B] rounded-lg hover:bg-[#0B2929] transition-colors duration-200 min-h-[48px] shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C3B]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Send Appointment Request</span>
                  </button>
                </div>
              </form>

              {/* Honest Request Prepared / Review Feedback */}
              {submittedPayload && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 p-5 sm:p-6 rounded-xl bg-[#FFFFFF] border border-[#123C3B]/20"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#E7EDE7] text-[#123C3B] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0B2929]">
                        Appointment Request Prepared for WhatsApp
                      </p>
                      <p className="text-xs text-[#263332]/75 mt-0.5 leading-relaxed">
                        Please review and send the pre-filled message in WhatsApp. Your
                        appointment is not confirmed until our clinic team confirms
                        availability.
                      </p>
                    </div>
                  </div>

                  <pre className="p-3.5 rounded-lg bg-[#F8F6F0] border border-[#123C3B]/10 text-xs text-[#263332]/85 whitespace-pre-wrap font-sans leading-relaxed mb-4">
                    {submittedPayload.messageText}
                  </pre>

                  {!CLINIC_CONFIG.whatsapp.number.trim() && (
                    <p className="text-xs text-[#8A6B2F] mb-3">
                      Clinic WhatsApp number is awaiting configuration in{" "}
                      <code className="font-mono">clinicConfig.ts</code> (
                      <code className="font-mono">CLINIC_WHATSAPP_NUMBER</code>).
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={submittedPayload.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#F8F6F0] bg-[#123C3B] rounded-lg hover:bg-[#0B2929] transition-colors min-h-[42px]"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Open WhatsApp Request</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#123C3B] bg-[#E7EDE7] rounded-lg hover:bg-[#123C3B]/12 transition-colors min-h-[42px] cursor-pointer"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copied ? "Copied" : "Copy Message"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
