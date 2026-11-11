"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type ComingSoonContextValue = { showComingSoon: (message?: string) => void };
const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);
const defaultMessage = "This feature is coming soon. We're building OmniReach for Zimbabwe and beyond.";
export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");
  const closeButton = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showComingSoon = useCallback((custom?: string) => { setMessage(custom || defaultMessage); if (timer.current) clearTimeout(timer.current); timer.current = setTimeout(() => setMessage(""), 3000); }, []);
  const close = useCallback(() => { if (timer.current) clearTimeout(timer.current); setMessage(""); }, []);
  useEffect(() => { if (!message) return; closeButton.current?.focus(); const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [message, close]);
  return <ComingSoonContext.Provider value={{ showComingSoon }}>{children}{message && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}><section className="coming-modal" role="dialog" aria-modal="true" aria-live="polite" aria-label="Coming soon"><span className="modal-icon" aria-hidden="true">i</span><p>{message}</p><button ref={closeButton} type="button" className="modal-close" onClick={close}>Close</button></section></div>}</ComingSoonContext.Provider>;
}
export function useComingSoon() { const context = useContext(ComingSoonContext); if (!context) throw new Error("useComingSoon must be used inside ComingSoonProvider"); return context.showComingSoon; }
