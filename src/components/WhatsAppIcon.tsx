import React from "react";

interface WhatsAppIconProps {
  className?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M9.5 9.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.2 1.4 1.6.5.4 1.1.7 1.7.9.2.1.4 0 .5-.1l.6-.7c.2-.2.5-.3.7-.1l1.5.7c.3.1.4.3.4.6v.5c0 .4-.2.8-.6 1-.5.3-1.2.4-1.9.3-1.2-.2-2.6-.9-3.8-2.1-1.2-1.1-2-2.5-2.2-3.7-.1-.7 0-1.3.4-1.8z" />
  </svg>
);
