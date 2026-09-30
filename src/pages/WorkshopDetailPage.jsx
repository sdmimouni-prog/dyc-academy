import {
  BookOpen, ChartBar, ChefHat, Check, Clock, Coffee, Confetti, ForkKnife,
  Gift, GraduationCap, Heart, Leaf, Package, User, UsersThree,
} from '@phosphor-icons/react';
import { Arrow } from '../components/Arrow';
import { getProgramDetail, programDetails } from '../data/programDetails';
import '../ateliers-page.css';
import '../workshop-detail.css';

const icons = {
  chef: ChefHat, leaf: Leaf, tools: ForkKnife, apron: User,
  coffee: Coffee, package: Package, book: BookOpen, graduate: GraduationCap,
  heart: Heart, group: UsersThree, chart: ChartBar, gift: Gift, party: Confetti,
};

function DetailIcon({ name, size = 27 }) {
  const Icon = icons[name] || ChefHat;
  return <Icon size={size} weight="thin" aria-hidden="true" />;
}

function BookingFacts({ workshop, detail, hero = false }) {
  const facts = [
    { Icon: Clock, text: detail.durationLabel },
    { Icon: UsersThree, text: workshop.capacity },
    { Icon: ChartBar, text: workshop.level },
    ...(detail.minAge ? [{ Icon: User, text: detail.minAge }] : []),
  ];
  return <ul className={hero ? 'detail-hero-facts' : 'detail-booking-facts'}>
    {(hero ? [facts[0], facts[2], facts[1], facts[3]].filter(Boolean) : facts).map(({ Icon, text }) =>
      <li key={text}><Icon size={hero ? 29 : 24} weight="thin" aria-hidden="true" /><span>{text}</span></li>
    )}
  </ul>;
}

function DetailHero({ workshop, detail, onBook }) {
  return <section className="detail-hero" aria-labelledby="detail-title">
    <img className="detail-hero-image" src={detail.heroImage} alt="" fetchPriority="high" style={{ objectPosition: detail.heroPosition }} />
    <div className="detail-hero-content">
      <nav className="detail-breadcrumb" aria-label="Fil d’Ariane">
        <a href="/">Accueil</a><span aria-hidden="true">›</span>
        <a href="/ateliers-masterclasses">Ateliers &amp; Masterclasses</a><span aria-hidden="true">›</span>
        <span aria-current="page">{workshop.title}</span>
      </nav>
      <p className="eyebrow">{workshop.title.toUpperCase()}</p>
      <h1 id="detail-title">{detail.taglineLines ? <>{detail.taglineLines[0]}<br />{detail.taglineLines[1]}</> : detail.tagline}</h1>
      <p className="detail-hero-description">{detail.heroDescription}</p>
      <BookingFacts workshop={workshop} detail={detail} hero />
    </div>
    <aside className="detail-booking" aria-label={`Réservation : ${workshop.name}`}>
      <p className="detail-booking-price"><strong>{workshop.price} MAD</strong> <span>/ personne</span></p>
      {workshop.note && <p className="detail-booking-note">{workshop.note}</p>}
      <button type="button" className="pill detail-booking-button" onClick={onBook}>{detail.bookingLabel || 'Réserver ma place'} <Arrow /></button>
      <BookingFacts workshop={workshop} detail={detail} />
    </aside>
  </section>;
}

function Introduction({ data }) {
  return <section className="detail-introduction" id="experience" aria-labelledby="detail-introduction-title">
    <div className="detail-introduction-copy">
      <p className="eyebrow">{data.eyebrow}</p>
      <h2 id="detail-introduction-title">{data.title}</h2>
      {data.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <a className="pill home-cta" href="#programme">Vivre l’expérience <Arrow /></a>
    </div>
    <div className="detail-introduction-photo"><img src={data.image} alt={data.imageAlt} loading="lazy" style={{ objectPosition: data.imagePosition }} /></div>
  </section>;
}

function ProgramSection({ detail }) {
  if (!detail.programSteps?.length && !detail.programDays?.length) return null;
  return <section className={`detail-program${detail.programDays ? ' detail-program--days' : ''}`} id="programme" aria-labelledby="detail-program-title">
    <p className="eyebrow">AU PROGRAMME</p>
    <h2 id="detail-program-title">{detail.programHeading || 'De la base à la décoration, pas à pas'}</h2>
    {detail.programDays ? <div className="detail-day-grid">
      {detail.programDays.map(day => <article className="detail-day-card" key={day.day}>
        <img src={day.image} alt={day.imageAlt} loading="lazy" style={{ objectPosition: day.imagePosition }} />
        <div className="detail-day-content">
          <p className="detail-day-label">{day.day}</p>
          <h3>{day.title}</h3>
          <ul>{day.items.map(item => <li key={item}><span className="detail-check"><Check size={16} weight="light" aria-hidden="true" /></span><span>{item}</span></li>)}</ul>
        </div>
      </article>)}
    </div> : <ol className="detail-steps">
      {detail.programSteps.map((step, index) => <li key={step.title}>
        <span className="detail-step-number">{String(index + 1).padStart(2, '0')}</span>
        <h3>{step.title}</h3>
        <ul>{step.items.map(item => <li key={item}>{item}</li>)}</ul>
      </li>)}
    </ol>}
  </section>;
}

function Included({ data }) {
  if (!data?.items?.length) return null;
  return <section className="detail-included" aria-labelledby="detail-included-title">
    <div className="detail-included-photo">
      <img src={data.image} alt={data.imageAlt} loading="lazy" style={{ objectPosition: data.imagePosition }} />
      <span>{data.overlay || 'Des ingrédients\nd’exception'}</span>
    </div>
    <div className="detail-included-copy">
      <p className="eyebrow">TOUT EST INCLUS</p>
      <h2 id="detail-included-title">Nous nous occupons de tout</h2>
      <ul className={data.items.length === 7 ? 'detail-included-seven' : undefined}>{data.items.map(item => <li key={item.label}><DetailIcon name={item.icon} /><span>{item.label}</span></li>)}</ul>
    </div>
  </section>;
}

function Creations({ data }) {
  if (!data?.items?.length) return null;
  return <section className="detail-creations" aria-labelledby="detail-creations-title">
    <div className="detail-creations-photo">
      <img src={data.image} alt={data.imageAlt} loading="lazy" style={{ objectPosition: data.imagePosition }} />
      <span>{data.overlay}</span>
    </div>
    <div className="detail-creations-copy">
      <p className="eyebrow">{data.eyebrow}</p>
      <h2 id="detail-creations-title">{data.title}</h2>
      <ul>{data.items.map(item => <li key={item.amount}>
        <span className="detail-creation-icon"><DetailIcon name={item.icon} size={34} /></span>
        <strong>{item.amount}</strong><span>{item.label}</span><small>{item.detail}</small>
      </li>)}</ul>
    </div>
  </section>;
}

function ExperienceCards({ items, onOpen }) {
  if (!items?.length) return null;
  return <section className="detail-experiences" aria-label="Ateliers chocolat pour les groupes">
    {items.map(item => <article className="detail-experience-card" key={item.title}>
      <img src={item.image} alt="" loading="lazy" style={{ objectPosition: item.imagePosition }} />
      <div className="detail-experience-content">
        <h2><DetailIcon name={item.icon} size={40} />{item.title}</h2>
        <p>{item.description}</p>
        <ul>{item.points.map(point => <li key={point}><span className="detail-check"><Check size={15} aria-hidden="true" /></span>{point}</li>)}</ul>
        {item.href ? <a className="pill home-cta" href={item.href}>{item.action} <Arrow /></a> :
          <button type="button" className="pill home-cta" onClick={() => onOpen(item.onOpenKind)}>{item.action} <Arrow /></button>}
      </div>
    </article>)}
  </section>;
}

function Takeaways({ data }) {
  if (!data?.items?.length) return null;
  return <section className="detail-takeaways" aria-labelledby="detail-takeaways-title">
    <div className="detail-takeaways-image">
      <p className="eyebrow">VOUS REPARTEZ AVEC</p>
      <h2 id="detail-takeaways-title">Bien plus qu’un gâteau</h2>
      <img src={data.image} alt={data.imageAlt} loading="lazy" style={{ objectPosition: data.imagePosition }} />
    </div>
    <ul className="detail-takeaways-list">
      {data.items.map(item => <li key={item}><span className="detail-check"><Check size={18} weight="light" aria-hidden="true" /></span><span>{item}</span></li>)}
    </ul>
    <blockquote className="detail-quote">
      <span className="detail-quote-mark" aria-hidden="true">“</span>
      <p>{data.quote}</p>
      <cite>DYC CULINARY ARTS ACADEMY</cite>
    </blockquote>
  </section>;
}

function AudienceCards({ items }) {
  if (!items?.length) return null;
  return <section className="detail-audiences" aria-labelledby="detail-audiences-title">
    <p className="eyebrow">À QUI S’ADRESSE CETTE MASTERCLASS ?</p>
    <h2 id="detail-audiences-title">Une expérience pour tous les passionnés</h2>
    <div className="detail-audience-grid">
      {items.map(item => <article key={item.title}>
        <DetailIcon name={item.icon} size={38} />
        <div><h3>{item.title}</h3><p>{item.text}</p></div>
      </article>)}
    </div>
  </section>;
}

function Closing({ data, onBook }) {
  return <section className="detail-closing" aria-labelledby="detail-closing-title" style={{ '--detail-closing-image': `url("${data.image}")` }}>
    <div>
      <p className="eyebrow">{data.eyebrow || 'PRÊT(E) À VOUS LANCER ?'}</p>
      <h2 id="detail-closing-title">{data.titleLines ? <>{data.titleLines[0]}<br /><em>{data.titleLines[1]}</em></> : data.title}</h2>
    </div>
    <button type="button" className="pill home-cta" onClick={onBook}>{data.bookingLabel || 'Réserver ma place'} <Arrow /></button>
  </section>;
}

export function WorkshopDetailPage({ workshop, onOpen }) {
  // Existing short workshop pages keep their current presentation until their
  // full content is supplied; adding data promotes them to this shared layout.
  if (!programDetails[workshop.slug]) return <SimpleWorkshopDetail workshop={workshop} onOpen={onOpen} />;
  const detail = getProgramDetail(workshop);
  const onBook = () => onOpen(workshop.name);
  return <div className={`workshop-detail workshop-detail--${workshop.slug}`} id="page-top">
    <DetailHero workshop={workshop} detail={detail} onBook={onBook} />
    <Introduction data={detail.introduction} />
    <ProgramSection detail={detail} />
    <Included data={detail.included} />
    <Creations data={detail.creations} />
    <Takeaways data={detail.takeaways} />
    <AudienceCards items={detail.audiences} />
    <ExperienceCards items={detail.experienceCards} onOpen={onOpen} />
    <Closing data={detail.closing} onBook={onBook} />
  </div>;
}

function SimpleWorkshopDetail({ workshop, onOpen }) {
  return <div className="workshop-detail" id="page-top">
    <section className="workshop-detail-hero" aria-labelledby="workshop-detail-title">
      <img src={`/assets/${workshop.image}.png`} alt="" fetchPriority="high" />
      <div className="workshop-detail-heading">
        <a href="/ateliers-masterclasses">Ateliers &amp; Masterclasses</a>
        <p className="eyebrow">{workshop.duration}</p>
        <h1 id="workshop-detail-title">{workshop.title}</h1>
      </div>
    </section>
    <section className="workshop-detail-body" aria-label={`À propos de ${workshop.name}`}>
      <div>
        <p className="eyebrow">L’EXPÉRIENCE DYC</p>
        <h2>Créez avec plaisir, repartez avec fierté.</h2>
        <p>{workshop.description}</p>
        <div className="workshop-detail-facts">
          <span><UsersThree size={26} weight="light" aria-hidden="true" />{workshop.capacity}</span>
          <span><ChartBar size={26} weight="light" aria-hidden="true" />{workshop.level}</span>
          <span><ChefHat size={26} weight="light" aria-hidden="true" />{workshop.takeaway}</span>
        </div>
      </div>
      <aside className="workshop-detail-booking">
        <p>À partir de</p>
        <strong>{workshop.price} MAD <small>/ personne</small></strong>
        {workshop.note && <p>{workshop.note}</p>}
        <button className="pill home-cta" onClick={() => onOpen(workshop.name)}>Réserver cet atelier <Arrow /></button>
        <a href="/ateliers-masterclasses">Voir tous les ateliers</a>
      </aside>
    </section>
  </div>;
}
