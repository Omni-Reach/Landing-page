"use client";
import { useComingSoon } from "./ComingSoonProvider";
export function ApiDocsButton() { const show = useComingSoon(); return <button type="button" className="button button-outline" onClick={() => show()}>View API docs</button>; }
