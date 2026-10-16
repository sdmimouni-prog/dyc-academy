import { whatsappHref } from '../data/whatsapp';
import { useEffect, useRef } from 'react';
import { Briefcase, CalendarBlank, Clock, Gift, Heart, House, Lightbulb, UsersThree, Wine } from '@phosphor-icons/react';
import { Arrow } from '../components/Arrow';
import '../entreprises-page.css';

const formats = [
  { title: 'Chocolate Challenge', subtitle: 'Pralines & Mendiants', image: '/assets/chocolat-pralines-mendiants.png', duration: '2h30', capacity: 'Jusqu’à 12 personnes par session', href: '/ateliers-masterclasses/chocolat-pralines-mendiants' },
  { title: 'Cake Challenge', subtitle: 'Créer et décorer en équipe.', image: '/assets/layer-cake-hero-panorama.png', duration: '2h à 3h', capacity: 'Jusqu’à 12 personnes par session', experience: 'Cake Challenge' },
  { title: 'Atelier sur mesure', subtitle: 'Une expérience personnalisée selon votre entreprise, vos objectifs et l’occasion.', image: '/assets/academie/histoire-macarons.png', duration: 'Durée et format adaptables', experience: 'Atelier sur mesure' },
];

const benefits = [
  { Icon: Lightbulb, title: 'CRÉER', text: 'Sortir du cadre professionnel habituel.' },
  { Icon: UsersThree, title: 'COLLABORER', text: 'Travailler ensemble autour d’un objectif commun.' },
  { Icon: Heart, title: 'PARTAGER', text: 'Créer un moment informel entre collaborateurs.' },
  { Icon: Gift, title: 'REPARTIR AVEC', text: 'Une création réalisée ensemble.' },
];

const stages = [
  { title: 'Accueil', text: 'Café d’accueil et présentation de l’atelier.', image: '/assets/entreprises/atelier-chocolat-accueil-dyc.jpg', position: 'center' },
  { title: 'Brief du chef', text: 'Explication des techniques et constitution des équipes.', image: '/assets/academie/histoire-chocolat-fouet.png', position: 'center' },
  { title: 'Challenge', text: 'Mise en pratique en équipe.', image: '/assets/chocolat-pralines-mendiants.png', position: 'center' },
  { title: 'Création en équipe', text: 'Réalisation des pralines, mendiants ou gâteaux.', image: '/assets/team-atelier-dyc-distinct.png', position: '55% center' },
  { title: 'Dégustation', text: 'Moment convivial autour de vos créations.', image: '/assets/entreprises/degustation-pralines-dyc.jpg', position: 'center center' },
  { title: 'Photo & souvenirs', text: 'Repartez avec vos créations et un souvenir inoubliable.', image: '/assets/entreprises/photo-souvenirs-dyc.jpg', position: 'center' },
];

const occasions = [
  { Icon: UsersThree, title: 'Teambuilding sur mesure', image: '/assets/team-atelier-dyc-distinct.png', experience: 'Teambuilding sur mesure', position: 'center' },
  { Icon: Briefcase, title: 'Séminaires', image: '/assets/entreprises/seminaires-salle-dyc.jpg', experience: 'Séminaire', position: 'center 60%' },
  { Icon: Gift, title: 'Célébrations d’équipe', image: '/assets/hero-gateau-fleuri.png', experience: 'Autre', position: 'center' },
  { Icon: UsersThree, title: 'Événements clients', image: '/assets/academie/tarte-framboises.png', experience: 'Événement client', position: 'center' },
  { Icon: Wine, title: 'Afterworks', image: '/assets/academie/histoire-macarons.png', experience: 'Autre', position: 'center' },
  { Icon: House, title: 'Privatisation', image: '/assets/academie/histoire-salle-dyc.jpg', experience: 'Privatisation', position: 'center 35%' },
];

function ExperienceCard({ item }) {
  const content = <><img src={item.image} alt="" loading="lazy" /><div className="corporate-format-copy"><h3>{item.title}</h3><p>{item.subtitle}</p><div className="corporate-format-meta"><span><Clock size={17} weight="light" aria-hidden="true" />{item.duration}</span>{item.capacity && <span><UsersThree size={18} weight="light" aria-hidden="true" />{item.capacity}</span>}</div><span className="corporate-format-arrow" aria-hidden="true"><Arrow /></span></div></>;
  return item.href ? <a className="corporate-format" href={item.href} aria-label={`Découvrir ${item.title}`}>{content}</a> : <a className="corporate-format" href={whatsappHref(item.experience)} aria-label={`${item.title} — demander un devis`}>{content}</a>;
}

export function EntreprisesPage() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      timeline.dataset.reveal = 'visible';
      observer.disconnect();
    }, { threshold: .08 });
    timeline.dataset.reveal = 'pending';
    observer.observe(timeline);
    return () => {
      observer.disconnect();
      delete timeline.dataset.reveal;
    };
  }, []);

  return <div className="corporate-page" id="page-top">
    <section className="corporate-hero" aria-labelledby="corporate-title"><img src="/assets/team-atelier-dyc-distinct.png" alt="" fetchPriority="high" /><div className="corporate-hero-copy"><p className="eyebrow">TEAM BUILDING · ENTREPRISES · ÉVÉNEMENTS</p><h1 id="corporate-title">Créez ensemble.<br />Soudez vos équipes<br /> autrement.</h1><p>Des expériences culinaires immersives pour renforcer la collaboration, stimuler la créativité et partager un moment mémorable.</p><div className="corporate-hero-actions"><a href={whatsappHref('Teambuilding sur mesure')} className="pill home-cta">Organiser un Team Building <Arrow /></a><a href={whatsappHref('un devis entreprise')} className="pill corporate-outline">Demander un devis <Arrow /></a></div></div><p className="corporate-hero-signature" aria-hidden="true">Plus<br /> qu’un atelier,<br /> une expérience<br /> humaine.</p></section>

    <section className="corporate-benefits" aria-labelledby="corporate-benefits-title"><div className="corporate-benefits-intro"><p className="eyebrow">UNE EXPÉRIENCE QUI RASSEMBLE</p><h2 id="corporate-benefits-title">Bien plus qu’un atelier,<br />un véritable levier d’équipe.</h2></div><div className="corporate-benefits-grid">{benefits.map(({ Icon, title, text }) => <div className="corporate-benefit" key={title}><span><Icon size={27} weight="light" aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

    <section className="corporate-formats corporate-container" aria-labelledby="corporate-formats-title"><p className="eyebrow">CHOISISSEZ VOTRE EXPÉRIENCE</p><h2 id="corporate-formats-title">Des formats adaptés à vos objectifs</h2><div className="corporate-format-grid">{formats.map(item => <ExperienceCard item={item} key={item.title} />)}</div></section>

    <section className="corporate-timeline corporate-container" ref={timelineRef} aria-labelledby="corporate-timeline-title"><p className="eyebrow">LE DÉROULÉ</p><h2 id="corporate-timeline-title">Une expérience fluide et mémorable</h2><ol>{stages.map(({ title, text, image, position }, index) => <li key={title} style={{ '--stage-index': index }}><span className="corporate-stage-number">{String(index + 1).padStart(2, '0')}</span><span className="corporate-stage-photo"><img src={image} alt="" style={{ objectPosition: position }} loading="lazy" /></span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

    <section className="corporate-occasions corporate-container" aria-labelledby="corporate-occasions-title"><p className="eyebrow">POUR QUELLES OCCASIONS ?</p><h2 id="corporate-occasions-title">Des moments qui marquent</h2><div className="corporate-occasion-grid">{occasions.map(({ Icon, title, image, experience: itemExperience, position }) => <a href={whatsappHref(itemExperience)} className="corporate-occasion" key={title}><img src={image} alt="" style={{ objectPosition: position }} loading="lazy" /><span><Icon size={24} weight="light" aria-hidden="true" />{title}</span></a>)}</div></section>

    <section className="corporate-private" aria-labelledby="corporate-private-title"><div className="corporate-private-image"><img src="/assets/academie/histoire-salle-dyc.jpg" alt="L’espace DYC Academy, avec ses plans de travail et son matériel professionnel" loading="lazy" /><span>Un lieu<br /> d’exception<br /> pour vos équipes</span></div><div className="corporate-private-copy"><p className="eyebrow">PRIVATISATION DYC ACADEMY</p><h2 id="corporate-private-title">Votre événement. Notre univers.</h2><p>Privatisez notre académie et offrez à vos équipes un cadre unique pour vivre une expérience sur mesure autour de la pâtisserie et du chocolat.</p><ul><li><House size={25} weight="light" aria-hidden="true" />Un espace premium et modulable</li><li><UsersThree size={25} weight="light" aria-hidden="true" />Un accompagnement personnalisé</li><li><CalendarBlank size={25} weight="light" aria-hidden="true" />Des formats sur mesure selon vos objectifs</li></ul><a href={whatsappHref('Privatisation')} className="pill home-cta">Découvrir la privatisation <Arrow /></a></div></section>


  </div>;
}
