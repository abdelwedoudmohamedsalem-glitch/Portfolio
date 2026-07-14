import { ArrowUpRight, Database, Layers3, ShieldAlert, ShoppingBag } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    icon: ShieldAlert,
    index: "01",
    title: "PFE — Laboratoire IDS/IPS",
    text: "Conception d’un environnement bancaire virtualisé avec pfSense, Suricata, Active Directory et OpenVPN. Les scans Nmap et attaques Hydra ont été détectés et bloqués en mode IPS.",
    tags: ["Suricata", "pfSense", "AD / VPN"],
    accent: "cyan",
    report: true,
  },
  {
    icon: ShoppingBag,
    index: "02",
    title: "Store e-commerce",
    text: "Conception d’un site e-commerce avec HTML, CSS, JavaScript et PHP, puis exploration d’une version avancée sous Magento.",
    tags: ["PHP", "JavaScript", "Magento"],
    accent: "violet",
  },
  {
    icon: Database,
    index: "03",
    title: "Comptes bancaires",
    text: "Mini-projet de gestion de comptes bancaires construit avec Spring Boot pour consolider les fondamentaux backend.",
    tags: ["Java", "Spring Boot", "SQL"],
    accent: "lime",
  },
  {
    icon: Layers3,
    index: "04",
    title: "Services réseau & applications",
    text: "Mise en place de Samba pour le partage de fichiers et développement d’une gestion de professeurs avec Flutter et Flask.",
    tags: ["Samba", "Flutter", "Flask"],
    accent: "orange",
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <Reveal>
          <div className="projects-heading">
            <SectionHeading
              eyebrow="Projets sélectionnés"
              title="Appliquer, tester, améliorer."
              description="Des réalisations académiques qui traduisent mon intérêt pour les environnements concrets et les problématiques de sécurité."
            />
            <div className="projects-heading-actions">
              <span className="project-count">04 PROJETS</span>
              <a className="github-link" href="/documents/RPFE.pdf" target="_blank" rel="noreferrer">Lire le rapport PFE <ArrowUpRight aria-hidden="true" size={15} /></a>
            </div>
          </div>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal delay={index * 0.08} key={project.index}>
                <article className={`project-card ${project.accent}`}>
                  <div className="project-card-top">
                    <span className="project-index">{project.index}</span>
                    <span className="project-icon"><Icon aria-hidden="true" size={23} strokeWidth={1.7} /></span>
                  </div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                  <div className="project-card-bottom">
                    <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    {project.report ? (
                      <a className="project-report" href="/documents/RPFE.pdf" target="_blank" rel="noreferrer">Rapport <ArrowUpRight aria-hidden="true" size={15} /></a>
                    ) : (
                      <span className="project-arrow"><ArrowUpRight aria-hidden="true" size={18} /></span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
