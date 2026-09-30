import { useRef, useState } from 'react';
import { Briefcase, CalendarBlank, Clock, Gift, Heart, House, Lightbulb, UsersThree, Wine } from '@phosphor-icons/react';
import { Arrow } from '../components/Arrow';
import { siteConfig } from '../data/siteConfig';
import { submitLead } from '../data/submitLead';
import '../entreprises-page.css';

const formats = [
  { title: 'Chocolate Challenge', subtitle: 'Pralines & Mendiants', image: '/assets/chocolat-pralines-mendiants.png', duration: '2h30', capacity: 'Jusqu’à 12 personnes par session', href: '/ateliers-masterclasses/chocolat-pralines-mendiants' },
  { title: 'Cake Challenge', subtitle: 'Créer et décorer en équipe.', image: '/assets/layer-cake-framboises.png', duration: '2h à 3h', capacity: 'Jusqu’à 12 personnes par session', experience: 'Cake Challenge' },
  { title: 'Atelier sur mesure', subtitle: 'Une expérience personnalisée selon votre entreprise, vos objectifs et l’occasion.', image: '/assets/academie/histoire-macarons.png', duration: 'Durée et format adaptables', experience: 'Atelier sur mesure' },
];

const benefits = [
  { Icon: Lightbulb, title: 'CRÉER', text: 'Sortir du cadre professionnel habituel.' },
  { Icon: UsersThree, title: 'COLLABORER', text: 'Travailler ensemble autour d’un objectif commun.' },
  { Icon: Heart, title: 'PARTAGER', text: 'Créer un moment informel entre collaborateurs.' },
  { Icon: Gift, title: 'REPARTIR AVEC', text: 'Une création réalisée ensemble.' },
];

const stages = [
  { title: 'Accueil', text: 'Café d’accueil et présentation de l’atelier.', image: '/assets/team-atelier-dyc.png', position: '10% center' },
  { title: 'Brief du chef', text: 'Explication des techniques et constitution des équipes.', image: '/assets/academie/histoire-chocolat-fouet.png', position: 'center' },
  { title: 'Challenge', text: 'Mise en pratique en équipe.', image: '/assets/chocolat-pralines-mendiants.png', position: 'center' },
  { title: 'Création en équipe', text: 'Réalisation des pralines, mendiants ou gâteaux.', image: '/assets/team-atelier-dyc.png', position: '55% center' },
  { title: 'Dégustation', text: 'Moment convivial autour de vos créations.', image: '/assets/academie/histoire-macarons.png', position: 'center' },
  { title: 'Photo & souvenirs', text: 'Repartez avec vos créations et un souvenir inoubliable.', image: '/assets/team-atelier-dyc.png', position: '88% center' },
];

const occasions = [
  { Icon: UsersThree, title: 'Team Building', image: '/assets/team-atelier-dyc.png', experience: 'Team Building', position: 'center' },
  { Icon: Briefcase, title: 'Séminaires', image: '/assets/academie/histoire-salle.png', experience: 'Séminaire', position: 'center' },
  { Icon: Gift, title: 'Célébrations d’équipe', image: '/assets/hero-gateau-fleuri.png', experience: 'Autre', position: 'center' },
  { Icon: UsersThree, title: 'Événements clients', image: '/assets/academie/tarte-framboises.png', experience: 'Événement client', position: 'center' },
  { Icon: Wine, title: 'Afterworks', image: '/assets/academie/histoire-macarons.png', experience: 'Autre', position: 'center' },
  { Icon: House, title: 'Privatisation', image: '/assets/academie/espace-academie.png', experience: 'Privatisation', position: 'center' },
];

const experienceOptions = ['Chocolate Challenge', 'Cake Challenge', 'Atelier sur mesure', 'Team Building', 'Séminaire', 'Événement client', 'Privatisation', 'Autre'];

function ExperienceCard({ item, chooseExperience }) {
  const content = <><img src={item.image} alt="" loading="lazy" /><div className="corporate-format-copy"><h3>{item.title}</h3><p>{item.subtitle}</p><div className="corporate-format-meta"><span><Clock size={17} weight="light" aria-hidden="true" />{item.duration}</span>{item.capacity && <span><UsersThree size={18} weight="light" aria-hidden="true" />{item.capacity}</span>}</div><span className="corporate-format-arrow" aria-hidden="true"><Arrow /></span></div></>;
  return item.href ? <a className="corporate-format" href={item.href} aria-label={`Découvrir ${item.title}`}>{content}</a> : <a className="corporate-format" href="#projet" onClick={() => chooseExperience(item.experience)} aria-label={`${item.title} — demander un devis`}>{content}</a>;
}

function CorporateLeadForm({ experience, setExperience }) {
  const [state, setState] = useState('idle');
  const [message, setMessage] = useState('');
  const [draftHref, setDraftHref] = useState('');
  const submitting = useRef(false);
  const phoneRef = useRef(null);

  const submit = async event => {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const digits = data.phone.replace(/\D/g, '');
    if (digits.length < 9 || digits.length > 15) {
      phoneRef.current.setCustomValidity('Indiquez un numéro valide (9 à 15 chiffres).');
      phoneRef.current.reportValidity();
      setState('error');
      setMessage('Vérifiez le numéro de téléphone avant de réessayer.');
      return;
    }
    submitting.current = true;
    setDraftHref('');
    setState('loading');
    setMessage('Envoi de votre demande…');
    try {
      const result = await submitLead({ ...data, source: 'entreprises' });
      if (result.delivery === 'email-draft') {
        setDraftHref(result.href);
        setState('prepared');
        setMessage('Un e-mail prérempli va s’ouvrir. Envoyez-le depuis votre messagerie pour transmettre votre demande.');
        window.location.href = result.href;
      } else {
        form.reset();
        setExperience('');
        setDraftHref('');
        setState('success');
        setMessage('Votre demande a bien été envoyée. Notre équipe vous recontactera rapidement.');
      }
    } catch (error) {
      setState('error');
      setMessage(error.message === 'unconfigured' ? 'L’envoi est indisponible pour le moment : aucun service de réception n’est encore configuré.' : 'Votre demande n’a pas pu être envoyée. Réessayez dans quelques instants.');
    } finally {
      submitting.current = false;
    }
  };

  return <section className="corporate-lead" id="projet" aria-labelledby="corporate-lead-title">
    <div className="corporate-lead-inner">
      <div className="corporate-lead-copy"><p className="eyebrow">DEMANDEZ VOTRE EXPÉRIENCE SUR MESURE</p><h2 id="corporate-lead-title">Parlons de votre projet</h2><p>Remplissez ce formulaire et notre équipe vous recontactera rapidement avec une proposition adaptée à vos besoins.</p><div className="corporate-quick-contact"><UsersThree size={26} weight="light" aria-hidden="true" /><p>Une question ?<br />Contactez-nous directement à <a href={`mailto:${siteConfig.contact.businessEmail}`}>{siteConfig.contact.businessEmail}</a></p></div></div>
      <form className="corporate-lead-form" onSubmit={submit} onChange={() => { if (state === 'error' || state === 'prepared') { setState('idle'); setMessage(''); setDraftHref(''); } }} onInvalid={() => { setState('error'); setMessage('Veuillez remplir et vérifier les champs obligatoires.'); }}>
        <label>Entreprise *<input name="company" autoComplete="organization" placeholder="Votre entreprise" required minLength="2" /></label>
        <label>Nom &amp; prénom *<input name="name" autoComplete="name" placeholder="Votre nom" required minLength="2" /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" placeholder="votre@email.com" required /></label>
        <label>Téléphone *<input ref={phoneRef} name="phone" type="tel" autoComplete="tel" placeholder="Votre numéro" required onInput={event => event.currentTarget.setCustomValidity('')} /></label>
        <label>Nombre de participants *<select name="participants" defaultValue="" required><option value="">Sélectionnez</option><option>1 à 12</option><option>13 à 24</option><option>25 à 48</option><option>Plus de 48</option></select></label>
        <label>Date souhaitée<input name="date" type="date" /></label>
        <label>Type d’expérience *<select name="experience" value={experience} onChange={event => setExperience(event.target.value)} required><option value="">Sélectionnez</option>{experienceOptions.map(option => <option key={option}>{option}</option>)}</select></label>
        <label className="corporate-need">Votre besoin<textarea name="message" rows="3" placeholder="Décrivez-nous votre projet, vos objectifs, votre événement…" /></label>
        <button type="submit" className="pill dark corporate-submit" disabled={state === 'loading'}>{state === 'loading' ? 'Envoi en cours…' : 'Recevoir une proposition'} <Arrow /></button>
        {message && <p className={`corporate-form-status ${state}`} role="status" aria-live="polite">{message} {draftHref && <a href={draftHref}>Rouvrir le brouillon</a>}</p>}
      </form>
    </div>
  </section>;
}

export function EntreprisesPage() {
  const requested = new URLSearchParams(window.location.search).get('experience');
  const [experience, setExperience] = useState(requested === 'chocolat' ? 'Chocolate Challenge' : '');
  const chooseExperience = value => setExperience(value);

  return <div className="corporate-page" id="page-top">
    <section className="corporate-hero" aria-labelledby="corporate-title"><img src="/assets/team-atelier-dyc.png" alt="" fetchPriority="high" /><div className="corporate-hero-copy"><p className="eyebrow">TEAM BUILDING · ENTREPRISES · ÉVÉNEMENTS</p><h1 id="corporate-title">Créez ensemble.<br />Soudez vos équipes<br /> autrement.</h1><p>Des expériences culinaires immersives pour renforcer la collaboration, stimuler la créativité et partager un moment mémorable.</p><div className="corporate-hero-actions"><a href="#projet" className="pill home-cta" onClick={() => chooseExperience('Team Building')}>Organiser un Team Building <Arrow /></a><a href="#projet" className="pill corporate-outline">Demander un devis <Arrow /></a></div></div><p className="corporate-hero-signature" aria-hidden="true">Plus<br /> qu’un atelier,<br /> une expérience<br /> humaine.</p></section>

    <section className="corporate-benefits" aria-labelledby="corporate-benefits-title"><div className="corporate-benefits-intro"><p className="eyebrow">UNE EXPÉRIENCE QUI RASSEMBLE</p><h2 id="corporate-benefits-title">Bien plus qu’un atelier,<br />un véritable levier d’équipe.</h2></div><div className="corporate-benefits-grid">{benefits.map(({ Icon, title, text }) => <div className="corporate-benefit" key={title}><span><Icon size={27} weight="light" aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

    <section className="corporate-formats corporate-container" aria-labelledby="corporate-formats-title"><p className="eyebrow">CHOISISSEZ VOTRE EXPÉRIENCE</p><h2 id="corporate-formats-title">Des formats adaptés à vos objectifs</h2><div className="corporate-format-grid">{formats.map(item => <ExperienceCard item={item} chooseExperience={chooseExperience} key={item.title} />)}</div></section>

    <section className="corporate-timeline corporate-container" aria-labelledby="corporate-timeline-title"><p className="eyebrow">LE DÉROULÉ</p><h2 id="corporate-timeline-title">Une expérience fluide et mémorable</h2><ol>{stages.map(({ title, text, image, position }, index) => <li key={title}><span className="corporate-stage-number">{String(index + 1).padStart(2, '0')}</span><img src={image} alt="" style={{ objectPosition: position }} loading="lazy" /><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

    <section className="corporate-occasions corporate-container" aria-labelledby="corporate-occasions-title"><p className="eyebrow">POUR QUELLES OCCASIONS ?</p><h2 id="corporate-occasions-title">Des moments qui marquent</h2><div className="corporate-occasion-grid">{occasions.map(({ Icon, title, image, experience: itemExperience, position }) => <a href="#projet" className="corporate-occasion" onClick={() => chooseExperience(itemExperience)} key={title}><img src={image} alt="" style={{ objectPosition: position }} loading="lazy" /><span><Icon size={24} weight="light" aria-hidden="true" />{title}</span></a>)}</div></section>

    <section className="corporate-private" aria-labelledby="corporate-private-title"><div className="corporate-private-image"><img src="/assets/academie/espace-academie.png" alt="L’espace DYC Academy, avec ses plans de travail et son matériel professionnel" loading="lazy" /><span>Un lieu<br /> d’exception<br /> pour vos équipes</span></div><div className="corporate-private-copy"><p className="eyebrow">PRIVATISATION DYC ACADEMY</p><h2 id="corporate-private-title">Votre événement. Notre univers.</h2><p>Privatisez notre académie et offrez à vos équipes un cadre unique pour vivre une expérience sur mesure autour de la pâtisserie et du chocolat.</p><ul><li><House size={25} weight="light" aria-hidden="true" />Un espace premium et modulable</li><li><UsersThree size={25} weight="light" aria-hidden="true" />Un accompagnement personnalisé</li><li><CalendarBlank size={25} weight="light" aria-hidden="true" />Des formats sur mesure selon vos objectifs</li></ul><a href="#projet" className="pill home-cta" onClick={() => chooseExperience('Privatisation')}>Découvrir la privatisation <Arrow /></a></div></section>

    <CorporateLeadForm experience={experience} setExperience={setExperience} />
  </div>;
}
