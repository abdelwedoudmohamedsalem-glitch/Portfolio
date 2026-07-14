import { Building2, GraduationCap } from "lucide-react";
import Image from "next/image";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Parcours"
            title="Apprendre dans le réel."
            description="Une formation académique ciblée, complétée par une première immersion en équipe sécurité."
          />
        </Reveal>
        <div className="timeline">
          <Reveal delay={0.05}>
            <article className="timeline-item featured-timeline">
              <div className="timeline-date">2025 — 2026</div>
              <div className="timeline-dot"><Building2 aria-hidden="true" size={17} /></div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <div className="timeline-title-brand">
                    <Image alt="Banque Nationale de Mauritanie" className="timeline-logo timeline-logo-bnm" height={58} src="/images/brands/bnm.png" width={58} />
                    <div><p className="timeline-tag">EXPÉRIENCE</p><h3>Stage académique · Service Sécurité</h3></div>
                  </div>
                  <span className="timeline-company">BNM · 1 mois</span>
                </div>
                <p>Participation à l’administration et à la supervision de solutions de sécurité informatique dans la Banque National de Mauritanie.</p>
                <ul className="timeline-points">
                  <li>Configuration et gestion de pare-feu FortiGate.</li>
                  <li>Déploiement et validation de l’agent ESET XDR sur plus de 80 postes.</li>
                  <li>Diagnostic d’incidents DNS et de connectivité, en appui à la sécurisation du réseau.</li>
                </ul>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.13}>
            <article className="timeline-item">
              <div className="timeline-date">2025 — 2026</div>
              <div className="timeline-dot"><GraduationCap aria-hidden="true" size={17} /></div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <div className="timeline-title-brand">
                    <Image alt="Université de Nouakchott Al Asriya" className="timeline-logo" height={45} src="/images/brands/una.png" width={50} />
                    <div><p className="timeline-tag">FORMATION</p><h3>Licence 3 — Développement & administration</h3></div>
                  </div>
                  <span className="timeline-company">En cours</span>
                </div>
                <p>Développement, administration d’intranet et internet · Faculté des Sciences et Techniques, Université de Nouakchott Al Asriya.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
