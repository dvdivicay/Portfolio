import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* ---- stroke icons (use class "icon") ---- */
const Stroke = ({ children, ...p }: IconProps & { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden="true" {...p}>
    {children}
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <Stroke {...p}><path d="M5 12h14m0 0-6-6m6 6-6 6" /></Stroke>
);
export const ArrowDown = (p: IconProps) => (
  <Stroke {...p}><path d="M12 5v14m0 0 6-6m-6 6-6-6" /></Stroke>
);
export const Download = (p: IconProps) => (
  <Stroke {...p}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></Stroke>
);
export const Mail = (p: IconProps) => (
  <Stroke {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Stroke>
);
export const Phone = (p: IconProps) => (
  <Stroke {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></Stroke>
);
export const MapPin = (p: IconProps) => (
  <Stroke {...p}><path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" /><circle cx="12" cy="11" r="2.5" /></Stroke>
);
export const Calendar = (p: IconProps) => (
  <Stroke {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></Stroke>
);
export const Cpu = (p: IconProps) => (
  <Stroke {...p}><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></Stroke>
);
export const Chip = (p: IconProps) => (
  <Stroke {...p}><path d="M9 3h6l1 4h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2l1-4Z" /><circle cx="12" cy="13" r="3" /></Stroke>
);
export const Code = (p: IconProps) => (
  <Stroke {...p}><path d="m8 6-6 6 6 6M16 6l6 6-6 6M13 4l-2 16" /></Stroke>
);
export const Terminal = (p: IconProps) => (
  <Stroke {...p}><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6M12 4v16" /></Stroke>
);
export const Edu = (p: IconProps) => (
  <Stroke {...p}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5" /></Stroke>
);
export const Cert = (p: IconProps) => (
  <Stroke {...p}><path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" /><path d="M8.5 13 7 22l5-3 5 3-1.5-9" /></Stroke>
);
export const Award = (p: IconProps) => (
  <Stroke {...p}><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" /></Stroke>
);
export const Wave = (p: IconProps) => (
  <Stroke {...p}><path d="M3 12h3l2-5 4 14 3-9h6" /></Stroke>
);
export const Instagram = (p: IconProps) => (
  <Stroke {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></Stroke>
);

/* ---- filled brand icons (use class "icon-fill") ---- */
export const Github = (p: IconProps) => (
  <svg viewBox="0 0 24 24" className="icon-fill" aria-hidden="true" {...p}>
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5.1 18.3 5.1c.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
  </svg>
);
export const Linkedin = (p: IconProps) => (
  <svg viewBox="0 0 24 24" className="icon-fill" aria-hidden="true" {...p}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);
export const Facebook = (p: IconProps) => (
  <svg viewBox="0 0 24 24" className="icon-fill" aria-hidden="true" {...p}>
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
  </svg>
);

export const LogoMark = (p: IconProps) => (
  <svg viewBox="0 0 32 32" className="logo-mark" aria-hidden="true" {...p}>
    <rect x="6" y="6" width="20" height="20" rx="3" />
    <rect x="11" y="11" width="10" height="10" rx="1.5" className="logo-core" />
    <g className="logo-pins">
      <line x1="11" y1="2" x2="11" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="21" y1="2" x2="21" y2="6" />
      <line x1="11" y1="26" x2="11" y2="30" /><line x1="16" y1="26" x2="16" y2="30" /><line x1="21" y1="26" x2="21" y2="30" />
      <line x1="2" y1="11" x2="6" y2="11" /><line x1="2" y1="16" x2="6" y2="16" /><line x1="2" y1="21" x2="6" y2="21" />
      <line x1="26" y1="11" x2="30" y2="11" /><line x1="26" y1="16" x2="30" y2="16" /><line x1="26" y1="21" x2="30" y2="21" />
    </g>
  </svg>
);

/** Map a string key from data.ts to a stroke icon component. */
export const groupIcon: Record<string, (p: IconProps) => React.ReactElement> = {
  cpu: Cpu,
  chip: Chip,
  code: Code,
  terminal: Terminal,
  edu: Edu,
  cert: Cert,
  award: Award,
};
