import { ArrowUpRight, Copy, Mail, MapPin, Phone } from "lucide-react";

import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="contact-main">
              <p className="eyebrow"><span /> CONTACT</p>
              <h2>Construisons quelque chose de <em>solide.</em></h2>
              <p>Vous cherchez un profil junior motivé pour une opportunité de stage en systèmes, réseaux ou cybersécurité ? Parlons-en.</p>
              <a className="contact-email" href="mailto:abdelwedoudmohamedsalem@gmail.com">
                abdelwedoudmohamedsalem@gmail.com <ArrowUpRight aria-hidden="true" size={21} />
              </a>
            </div>
            <div className="contact-details">
              <a href="mailto:abdelwedoudmohamedsalem@gmail.com"><Mail aria-hidden="true" size={18} /><span><small>EMAIL</small>Écrire un message</span></a>
              <a href="tel:+22238634664"><Phone aria-hidden="true" size={18} /><span><small>TÉLÉPHONE</small>+222 38 63 46 64</span></a>
              <div><MapPin aria-hidden="true" size={18} /><span><small>LOCALISATION</small>Nouakchott, Mauritanie</span></div>
              <a className="contact-cv" href="/cv/resume.pdf" target="_blank" rel="noreferrer"><Copy aria-hidden="true" size={17} /> Consulter mon CV</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
