"use client";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { useComingSoon } from "./ComingSoonProvider";
export function Navbar() {
  const [open, setOpen] = useState(false); const show = useComingSoon();
  return <header className="navbar"><div className="container nav-inner"><Logo/><button type="button" className="menu-toggle" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/><span/></button><nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation"><Link href="/#features" onClick={() => setOpen(false)}>Features</Link><Link href="/#how-it-works" onClick={() => setOpen(false)}>How it works</Link><button type="button" onClick={() => { show(); setOpen(false); }}>Pricing</button><button type="button" onClick={() => { show(); setOpen(false); }}>API docs</button><Link className="nav-login" href="/login" onClick={() => setOpen(false)}>Log in</Link><Link className="nav-signup" href="/signup" onClick={() => setOpen(false)}>Sign up</Link></nav></div></header>;
}
