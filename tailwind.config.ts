import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { brand: { orange: "#F97316", ink: "#15171C", sky: "#F4F8FD", skyAccent: "#DCEBFA", tint: "#FFEDD5", rust: "#9A3412", gray: "#4B5563", border: "#94A3B8" } }, fontFamily: { heading: ["var(--font-heading)"], body: ["var(--font-body)"] } } }, plugins: [] };
export default config;
