import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`logo ${light ? "logo-light" : ""}`} aria-label="OmniReach home"><span className="logo-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="1.7" fill="currentColor"/><path d="M8.4 8.4a5.1 5.1 0 0 0 0 7.2M15.6 8.4a5.1 5.1 0 0 1 0 7.2M5.3 5.3a9.5 9.5 0 0 0 0 13.4M18.7 5.3a9.5 9.5 0 0 1 0 13.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></span><span>OmniReach</span></Link>;
}
