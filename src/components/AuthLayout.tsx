import type { ReactNode } from "react";
import { Logo } from "./Logo";
export function AuthLayout({ children }: { children: ReactNode }) { return <main className="auth-layout"><aside className="auth-aside"><Logo light/><div className="auth-promo"><h2>Reach everyone,<br/><span>instantly.</span></h2><p>Bulk SMS and a developer API, built for Zimbabwe.</p></div><div className="auth-bubble">Your verification code is 482 913.</div></aside><section className="auth-main"><div className="auth-form-wrap"><div className="mobile-auth-logo"><Logo/></div>{children}</div></section></main>; }
