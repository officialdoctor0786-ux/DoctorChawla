import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/faqData";
import { Reveal } from "./Reveal";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-t border-[#123C3B]/8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A875] mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0B2929] leading-[1.12] text-balance">
            Clear Answers Before Your Visit.
          </h2>
        </Reveal>

        <div className="divide-y divide-[#123C3B]/12 border-t border-b border-[#123C3B]/12">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-1">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                  className="w-full py-5 px-2 flex items-center justify-between gap-4 text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#123C3B] rounded-lg"
                >
                  <span className="font-display text-xl sm:text-2xl font-semibold text-[#0B2929] group-hover:text-[#123C3B] transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C6A875] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-2">
                    <p className="text-sm sm:text-[15px] leading-[1.75] text-[#263332]/80 max-w-[68ch]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
