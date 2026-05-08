import type { SocialIconName } from "@/types/portfolio";

type SocialIconProps = {
  icon: SocialIconName;
  className?: string;
};

export function SocialIcon({ icon, className }: SocialIconProps) {
  switch (icon) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M17.291 19.073h-3.007v-4.709c0-1.123-.02-2.568-1.564-2.568-1.566 0-1.806 1.223-1.806 2.487v4.79H7.908V9.389h2.887v1.323h.04c.589-1.006 1.683-1.607 2.848-1.564 3.048 0 3.609 2.005 3.609 4.612v5.313ZM4.515 8.065c-.964 0-1.745-.781-1.745-1.745 0-.964.781-1.745 1.745-1.745.964 0 1.745.781 1.745 1.745 0 .964-.781 1.745-1.745 1.745Zm1.503 11.008h-3.01V9.389h3.01v9.684ZM18.79 1.783H1.497C.68 1.774.01 2.429 0 3.246V20.61c.01.818.68 1.473 1.497 1.464H18.79c.819.01 1.492-.645 1.503-1.464V3.245c-.012-.819-.685-1.474-1.503-1.463Z"
            fill="currentColor"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M20.36 8.36a2.5 2.5 0 0 0-1.76-1.76C17.16 6.2 12 6.2 12 6.2s-5.16 0-6.6.4a2.5 2.5 0 0 0-1.76 1.76c-.4 1.44-.4 3.64-.4 3.64s0 2.2.4 3.64a2.5 2.5 0 0 0 1.76 1.76c1.44.4 6.6.4 6.6.4s5.16 0 6.6-.4a2.5 2.5 0 0 0 1.76-1.76c.4-1.44.4-3.64.4-3.64s0-2.2-.4-3.64Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="m10.3 14.84 4.54-2.84-4.54-2.84v5.68Z" fill="currentColor" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M4.5 4.5h3.38l4.35 5.74L17.1 4.5h2.4l-6.23 7.23 6.73 8.77h-3.38l-4.87-6.3-5.45 6.3H3.9l6.91-7.97L4.5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
