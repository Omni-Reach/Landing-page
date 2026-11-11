import Link from "next/link";
import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
export const metadata: Metadata = { title: "Page not found", description: "The page you requested could not be found." };
export default function NotFound() { return <main className="not-found"><Logo/><span className="not-found-code">404</span><h1>We can’t find that page</h1><p>The page you’re looking for may have moved or isn’t available yet.</p><Link className="button button-primary" href="/">Back to home</Link></main>; }
