import Link from "next/link";
import type { ReactNode } from "react";
export function Button({ children, href, onClick, variant = "primary", type = "button", className = "" }: { children: ReactNode; href?: string; onClick?: () => void; variant?: "primary" | "outline" | "dark"; type?: "button" | "submit"; className?: string }) {
  const classes = `button button-${variant} ${className}`;
  return href ? <Link href={href} className={classes}>{children}</Link> : <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
