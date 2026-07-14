import { Binary, Network, ShieldCheck } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const strengths = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Sécuriser",
    text: "Comprendre les risques et participer à la protection des environnements systèmes et réseaux.",
  },
  {
    icon: Network,
    number: "02",
    title: "Connecter",
    text: "Concevoir une infrastructure fiable : adressage, routage, VLANs et services réseau.",
  },
  {
    icon: Binary,
    number: "03",
    title: "Construire",
    text: "Développer des outils et des applications utiles avec une approche pragmatique et structurée.",
  },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="À propos"
            title="Curieux par nature. Rigoureux par méthode."
            description="Passionné par la cybersécurité, je développe un profil hybride à la croisée des infrastructures, du développement et de la défense réseau. Mon objectif : rendre chaque système plus fiable, un environnement à la fois."
          />
        </Reveal>
        <div className="strength-grid">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <Reveal delay={index * 0.1} key={strength.number}>
                <article className="strength-card">
                  <div className="strength-card-top">
                    <span>{strength.number}</span>
                    <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
                  </div>
                  <h3>{strength.title}</h3>
                  <p>{strength.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="about-signal">
            <span>EN CE MOMENT</span>
            <p>Je recherche un stage pour approfondir mes compétences en sécurité des systèmes et réseaux dans un environnement stimulant.</p>
            <a href="#contact">Échangeons <span>↗</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
