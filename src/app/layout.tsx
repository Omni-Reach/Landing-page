import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ComingSoonProvider } from "@/components/ComingSoonProvider";
import "./globals.css";
const heading = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
export const metadata: Metadata = { title: { default: "OmniReach | Bulk SMS for Zimbabwe and beyond", template: "%s | OmniReach" }, description: "Send bulk SMS to customers, classmates and communities with OmniReach, made for Zimbabwean students and developers." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${heading.variable} ${body.variable}`}><ComingSoonProvider>{children}</ComingSoonProvider></body></html>; }
