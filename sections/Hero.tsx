"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, FileText, Mail } from "lucide-react";

const heroMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero section-grid" id="home">
      <div className="hero-noise" />
      <div className="container hero-layout">
        <motion.div
          animate="visible"
          className="hero-content"
          initial={reduceMotion ? false : "hidden"}
          transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
          variants={reduceMotion ? undefined : { hidden: {}, visible: {} }}
        >
          <motion.div className="availability" variants={heroMotion}>
            <span className="availability-dot" /> Disponible pour un stage
          </motion.div>
          <motion.p className="hero-kicker" variants={heroMotion}>
            CYBERSÉCURITÉ · SYSTÈMES · RÉSEAUX
          </motion.p>
          <motion.div
  className="hero-profile"
  variants={heroMotion}
>
  <img
    src="/images/profile/profile.jpeg"
    alt="Mohamed Salem Abdel Wedoud"
    className="profile-image"
  />

  <h1>
    Mohamed Salem <br />
    <em>Abdel Wedoud</em>
  </h1>
</motion.div>
          <motion.p className="hero-summary" variants={heroMotion}>
            Passionné par la cybersécurité, je conçois et teste des environnements
            de sécurité réseau. Mon PFE s’appuie sur Suricata et pfSense pour
            détecter et bloquer les intrusions dans un laboratoire bancaire virtualisé.
          </motion.p>
          <motion.div className="hero-actions" variants={heroMotion}>
            <a className="button button-primary" href="#projects">
              Voir mes projets <ArrowDownRight aria-hidden="true" size={18} />
            </a>
            <a className="button button-ghost" href="#contact">
              Me contacter <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </motion.div>
          <motion.div className="hero-footer" variants={heroMotion}>
            <div className="hero-socials" aria-label="Moyens de contact">
              <a aria-label="Envoyer un email" href="mailto:abdelwedoudmohamedsalem@gmail.com">
                <Mail aria-hidden="true" size={17} />
              </a>
              <a aria-label="Consulter le CV" href="/cv/resume.pdf" target="_blank" rel="noreferrer">
                <FileText aria-hidden="true" size={16} />
              </a>
              <a aria-label="Profil LinkedIn de Mohamed Salem Abdel Wedoud" href="https://www.linkedin.com/in/mohamed-salem-abdel-wedoud-a7bb9736b/" target="_blank" rel="noreferrer">
                <span className="social-monogram" aria-hidden="true">in</span>
              </a>
              <a aria-label="Profil GitHub de Mohamed Salem Abdel Wedoud" href="https://github.com/abdelwedoudmohamedsalem-glitch" target="_blank" rel="noreferrer">
                <span className="social-monogram" aria-hidden="true">GH</span>
              </a>
            </div>
            <p>Basé à Nouakchott, Mauritanie</p>
          </motion.div>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
          className="hero-portrait-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1], y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        >
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-frame">
            <Image
              alt="Portrait de Mohamed Salem Abdel Wedoud"
              className="portrait"
              height={640}
              priority
              sizes="(max-width: 760px) 280px, 430px"
              src="/images/profile/profile.jpeg"
              width={512}
            />
          </div>
          <div className="portrait-label">
            <span className="label-icon"><Check aria-hidden="true" size={14} /></span>
            <span><strong>Cybersecurity enthusiast</strong><small>Detect. Defend. Improve.</small></span>
          </div>
          <div className="portrait-index">01 <span>/</span> 05</div>
        </motion.div>
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <div>
          <span>NETWORK SECURITY</span><b>✦</b><span>SYSTEMS ADMINISTRATION</span><b>✦</b><span>WEB DEVELOPMENT</span><b>✦</b><span>NETWORK SECURITY</span><b>✦</b><span>SYSTEMS ADMINISTRATION</span><b>✦</b>
        </div>
      </div>
    </section>
  );
}
