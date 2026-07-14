import { ShieldCheck } from "lucide-react";

export default function Logo() {
  return (
    <a aria-label="Accueil — Mohamed Salem" className="brand" href="#home">
      <span className="brand-mark">
        <ShieldCheck aria-hidden="true" size={19} strokeWidth={2.4} />
      </span>
      <span className="brand-copy">
        <strong>MSAW</strong>
        <small>CYBERSECURITY</small>
      </span>
    </a>
  );
}
