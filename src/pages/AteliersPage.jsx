import { useState } from 'react';
import { Briefcase, ChartBar, ChefHat, ForkKnife, Star, User, UsersThree } from '@phosphor-icons/react';
import { Arrow } from '../components/Arrow';
import { Benefits } from '../components/Benefits';
import { workshops, workshopHref } from '../data/workshops';
import '../ateliers-page.css';

const filters = [
  ['all', 'Tous les ateliers'],
  ['cake-design', 'Cake Design'],
  ['layer-cake', 'Layer Cake'],
  ['chocolat', 'Chocolat'],
];

const pageBenefits = [
  [ChefHat, 'Chefs pâtissiers', 'expérimentés'],
  [UsersThree, 'Petits groupes', '(12 participants max)'],
  [ForkKnife, 'Matériel professionnel', 'haut de gamme'],
  [Star, 'Une expérience', 'unique et gourmande'],
];

const audiences = [
  { title: 'Particuliers', text: 'Vivez une expérience unique, seul, en famille ou entre amis.', image: '/assets/hero-gateau-fleuri.png', Icon: User, href: '#programmes' },
  { title: 'Groupes & Événements', text: 'Célébrez vos moments spéciaux autour de la pâtisserie.', image: '/assets/team-atelier-dyc.png', Icon: UsersThree, href: '/#groupes' },
  { title: 'Entreprises', text: 'Renforcez la cohésion de vos équipes avec une activité gourmande.', image: '/assets/academie/histoire-chocolat-fouet.png', Icon: Briefcase, href: '/#groupes' },
];

function ProgramCard({ workshop }) {
  return <a className="program-card" href={workshopHref(workshop)} aria-label={`Découvrir ${workshop.name}`}>
    <div className="program-photo">
      <img src={`/assets/${workshop.image}.png`} alt="" loading="lazy" />
      <span className="duration">{workshop.duration}</span>
    </div>
    <div className="program-content">
      <h2>{workshop.cardTitle ? <>{workshop.cardTitle[0]}<br />{workshop.cardTitle[1]}</> : workshop.title}</h2>
      <p className="program-description">{workshop.description}</p>
      <ul className="program-facts" aria-label="Informations sur l’atelier">
        <li><UsersThree size={23} weight="light" aria-hidden="true" />{workshop.capacity}</li>
        <li><ChartBar size={23} weight="light" aria-hidden="true" />{workshop.level}</li>
        <li><ChefHat size={23} weight="light" aria-hidden="true" />{workshop.takeaway}</li>
      </ul>
      <div className="program-bottom">
        <p><strong>{workshop.price} MAD</strong> / personne{workshop.note && <small>{workshop.note}</small>}</p>
        <span className="program-arrow"><Arrow /></span>
      </div>
    </div>
  </a>;
}

export function AteliersPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleWorkshops = activeFilter === 'all' ? workshops : workshops.filter(workshop => workshop.category === activeFilter);

  return <div className="ateliers-page" id="page-top">
    <section className="ateliers-hero" aria-labelledby="ateliers-page-title">
      <img className="ateliers-hero-photo" src="/assets/hero-atelier-dyc.png" alt="" fetchPriority="high" />
      <div className="ateliers-hero-copy">
        <p className="eyebrow">ATELIERS &amp; MASTERCLASSES</p>
        <h1 id="ateliers-page-title">Apprenez. Créez.<br /><em>Repartez avec votre réalisation.</em></h1>
        <p>Des expériences gourmandes, pour tous les passionnés,<br className="ateliers-wide-break" /> dans un cadre professionnel et inspirant.</p>
        <a className="pill home-cta" href="#programmes">Voir nos ateliers <Arrow /></a>
      </div>
      <p className="ateliers-hero-signature">L’art<br /> du partage</p>
    </section>

    <section className="programs" id="programmes" aria-label="Nos ateliers et masterclasses">
      <div className="program-filters" role="group" aria-label="Filtrer les ateliers">
        {filters.map(([key, label]) => <button type="button" className={activeFilter === key ? 'active' : ''} aria-pressed={activeFilter === key} onClick={() => setActiveFilter(key)} key={key}>{label}</button>)}
      </div>
      <div className="program-grid" aria-live="polite">
        {visibleWorkshops.map(workshop => <ProgramCard workshop={workshop} key={workshop.slug} />)}
      </div>
    </section>

    <div className="ateliers-benefits"><Benefits items={pageBenefits} /></div>

    <section className="audiences" id="publics" aria-labelledby="audiences-title">
      <div className="audiences-copy">
        <h2 id="audiences-title">Trouvez l’expérience<br /> qui vous ressemble</h2>
        <p>Que vous soyez un particulier, une entreprise ou un groupe, nos ateliers s’adaptent à vos envies et à vos occasions.</p>
        <a className="pill home-cta" href="#programmes">Découvrir toutes les formules <Arrow /></a>
      </div>
      <div className="audience-grid">
        {audiences.map(({ title, text, image, Icon, href }) => <a className="audience-card" href={href} key={title}>
          <img src={image} alt="" loading="lazy" />
          <div className="audience-card-content">
            <Icon size={34} weight="light" aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="audience-arrow"><Arrow /></span>
          </div>
        </a>)}
      </div>
    </section>
  </div>;
}
