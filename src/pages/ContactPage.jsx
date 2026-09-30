import { useRef, useState } from 'react';
import { Clock, Envelope, FacebookLogo, InstagramLogo, LockKey, MapPin, Phone } from '@phosphor-icons/react';
import { Arrow } from '../components/Arrow';
import { siteConfig } from '../data/siteConfig';
import { submitLead } from '../data/submitLead';
import '../contact-page.css';

const interestOptions = [
  ['layer-cake', 'Masterclass Layer Cake'],
  ['cake-design', 'Masterclass Cake Design'],
  ['chocolat', 'Atelier Chocolat — Pralines & Mendiants'],
  ['team-building', 'Team Building / Entreprises'],
  ['autre', 'Autre'],
];

const initialInterest = () => {
  const requested = new URLSearchParams(window.location.search).get('interest');
  return interestOptions.some(([key]) => key === requested) ? requested : '';
};

function ContactDetails() {
  const { contact } = siteConfig;
  const details = [
    { Icon: MapPin, label: contact.name, value: contact.address },
    { Icon: Phone, label: 'Téléphone', value: contact.phone || 'À renseigner', href: contact.phone && `tel:${contact.phone.replace(/\s/g, '')}` },
    { Icon: Envelope, label: 'Email', value: contact.email || 'À renseigner', href: contact.email && `mailto:${contact.email}` },
    { Icon: Clock, label: 'Horaires', value: contact.openingHours || 'À renseigner' },
  ];

  return <section className="contact-details" aria-labelledby="contact-details-title">
    <p className="eyebrow">NOS COORDONNÉES</p>
    <h2 id="contact-details-title">Parlons-nous</h2>
    <p className="contact-details-intro">Une question, un projet ou simplement<br /> envie d’en savoir plus ?<br /> Nous serons ravis d’échanger avec vous.</p>
    <ul className="contact-detail-list">
      {details.map(({ Icon, label, value, href }) => <li key={label}>
        <span className="contact-detail-icon"><Icon size={23} weight="light" aria-hidden="true" /></span>
        <span><strong>{label}</strong>{href ? <a href={href}>{value}</a> : <span>{value}</span>}</span>
      </li>)}
    </ul>
    <div className="contact-social">
      <span>Suivez notre actualité</span>
      <div aria-label="Réseaux sociaux">
        {contact.instagram ? <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramLogo size={25} weight="regular" /></a> : <span title="Lien Instagram à renseigner" aria-label="Instagram : lien à renseigner"><InstagramLogo size={25} weight="regular" /></span>}
        {contact.facebook ? <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookLogo size={25} weight="regular" /></a> : <span title="Lien Facebook à renseigner" aria-label="Facebook : lien à renseigner"><FacebookLogo size={25} weight="regular" /></span>}
      </div>
    </div>
  </section>;
}

function ContactForm() {
  const [interest, setInterest] = useState(initialInterest);
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
      phoneRef.current.setCustomValidity('Indiquez un numéro de téléphone valide (9 à 15 chiffres).');
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
      const result = await submitLead({ ...data, interest: interestOptions.find(([key]) => key === data.interest)?.[1] || data.interest, source: 'contact' });
      if (result.delivery === 'email-draft') {
        setDraftHref(result.href);
        setState('prepared');
        setMessage('Un e-mail prérempli va s’ouvrir. Envoyez-le depuis votre messagerie pour transmettre votre demande.');
        window.location.href = result.href;
      } else {
        form.reset();
        setInterest('');
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

  return <section className="contact-form-panel" id="contact-form" aria-labelledby="contact-form-title">
    <p className="eyebrow">VOTRE DEMANDE</p>
    <h2 id="contact-form-title">Comment pouvons-nous vous aider ?</h2>
    <p className="contact-form-intro">Remplissez ce formulaire et notre équipe vous recontactera rapidement.</p>
    <form onSubmit={submit} onChange={() => { if (state === 'error' || state === 'prepared') { setState('idle'); setMessage(''); setDraftHref(''); } }} onInvalid={() => { setState('error'); setMessage('Veuillez remplir et vérifier les champs obligatoires.'); }}>
      <div className="contact-fields">
        <label>Nom &amp; prénom *<input name="name" autoComplete="name" placeholder="Votre nom" required minLength="2" /></label>
        <label>Téléphone *<input ref={phoneRef} name="phone" type="tel" autoComplete="tel" placeholder="Votre numéro" required onInput={event => event.currentTarget.setCustomValidity('')} /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" placeholder="votre@email.com" required /></label>
        <label>Je suis intéressé(e) par *<select name="interest" value={interest} onChange={event => setInterest(event.target.value)} required>
          <option value="">Sélectionnez une option</option>
          {interestOptions.map(([key, label]) => <option value={key} key={key}>{label}</option>)}
        </select></label>
        <label className="contact-message-label">Message *<textarea name="message" rows="4" placeholder="Parlez-nous de votre projet, de vos besoins ou posez-nous votre question…" required minLength="10" /></label>
      </div>
      <button className="pill dark contact-submit" type="submit" disabled={state === 'loading'}>{state === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'} <Arrow /></button>
      <p className="contact-privacy"><LockKey size={15} weight="regular" aria-hidden="true" /> Vos données sont confidentielles et utilisées uniquement pour vous répondre.</p>
      {message && <p className={`contact-form-status ${state}`} role="status" aria-live="polite">{message} {draftHref && <a href={draftHref}>Rouvrir le brouillon</a>}</p>}
    </form>
  </section>;
}

function AcademyLocation() {
  const { contact } = siteConfig;
  const mapSource = contact.mapEmbedUrl || (contact.latitude != null && contact.longitude != null
    ? `https://maps.google.com/maps?q=${contact.latitude},${contact.longitude}&z=14&output=embed`
    : null);

  return <section className="contact-location" aria-labelledby="contact-location-title">
    <div className="contact-location-heading">
      <div><p className="eyebrow">VENEZ NOUS RENCONTRER</p><h2 id="contact-location-title">Notre académie vous accueille à Témara.</h2></div>
      <p>Un lieu unique, dédié à la pâtisserie, au chocolat<br /> et au partage, à quelques minutes de Rabat.</p>
    </div>
    <div className={`contact-map ${mapSource ? '' : 'contact-map-fallback'}`}>
      {mapSource ? <iframe src={mapSource} title={`Carte de ${contact.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> : <><img src="/assets/academie/espace-academie.png" alt="L’espace de l’académie DYC" loading="lazy" /><p className="contact-map-unlocated"><MapPin size={17} weight="light" aria-hidden="true" /> Localisation exacte à confirmer</p></>}
      <div className="contact-map-card">
        <h3>{contact.name}</h3>
        <p>{contact.address}</p>
        {contact.googleMapsUrl ? <a className="pill home-cta" href={contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">Itinéraire <Arrow /></a> : <span className="pill contact-map-disabled" aria-label="Itinéraire disponible lorsque l’adresse précise sera renseignée">Itinéraire <Arrow /></span>}
      </div>
    </div>
  </section>;
}

export function ContactPage({ onOpen }) {
  return <div className="contact-page" id="page-top">
    <section className="contact-hero" aria-labelledby="contact-title">
      <img src="/assets/academie/espace-academie.png" alt="" fetchPriority="high" />
      <div className="contact-hero-copy"><p className="eyebrow">CONTACT</p><h1 id="contact-title">Parlons de votre<br /> prochaine expérience.</h1><p>Un atelier, une masterclass, un Team Building<br /> ou une demande particulière ?<br /> L’équipe DYC Academy est à votre écoute.</p></div>
      <p className="contact-hero-signature" aria-hidden="true">More<br /> than recipes,<br /> lasting<br /> memories.</p>
    </section>
    <div className="contact-main"><ContactDetails /><ContactForm /></div>
    <AcademyLocation />
    <section className="contact-closing" aria-labelledby="contact-closing-title">
      <div><p className="eyebrow">VOUS SAVEZ DÉJÀ CE QUE VOUS VOULEZ CRÉER ?</p><h2 id="contact-closing-title">Réservez votre prochain atelier.</h2></div>
      <button type="button" className="pill home-cta" onClick={() => onOpen('reservation')}>Réserver un atelier <Arrow /></button>
    </section>
  </div>;
}
