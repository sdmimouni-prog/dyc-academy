import { ChefHat, UsersThree, ForkKnife, Star } from '@phosphor-icons/react';
import { Arrow } from '../components/Arrow';
import { Benefits } from '../components/Benefits';

const A = '/assets/academie/';
const academyBenefits = [
  [ChefHat, 'Chefs pâtissiers', 'expérimentés'],
  [UsersThree, 'Petits groupes', '(12 participants max)'],
  [ForkKnife, 'Matériel professionnel', 'haut de gamme'],
  [Star, 'Une expérience', 'unique et gourmande'],
];

export function AcademyPage({ onOpen }) {
  return <div className="academy-page">
    <section className="academy-page-hero" id="academie-top" aria-labelledby="academy-title">
      <img className="academy-hero-image" src={A + 'hero-academie.png'} alt="Une pâtissière décore un gâteau de fleurs et de fruits rouges" fetchPriority="high" />
      <div className="academy-hero-copy">
        <p className="eyebrow">DYC CULINARY ARTS ACADEMY</p>
        <h1 id="academy-title">L’académie</h1>
        <p className="academy-hero-subtitle">Un lieu où la passion s’exprime</p>
        <p className="academy-hero-description">Des formations culinaires et pâtissières pour apprendre,<br className="academy-desktop-break" /> créer et se révéler.</p>
        <a className="pill home-cta" href="/#ateliers">Découvrir nos ateliers <Arrow /></a>
      </div>
      <p className="academy-hero-signature"><span>Bien plus</span>{' '}<span>que des ateliers,</span>{' '}<span>une expérience</span></p>
    </section>

    <section className="academy-story" id="notre-histoire" aria-labelledby="academy-story-title">
      <div className="academy-story-gallery">
        <img src={A + 'histoire-enseigne.png'} alt="L’enseigne DYC Culinary Arts Academy dans l’académie" width="213" height="173" />
        <img src={A + 'histoire-chocolat-fouet.png'} alt="Un chef travaille le chocolat au fouet" width="234" height="173" />
        <img src={A + 'histoire-macarons.png'} alt="Macarons et créations au chocolat" width="213" height="132" loading="lazy" />
        <img src={A + 'histoire-salle.png'} alt="La salle lumineuse des ateliers de l’académie" width="234" height="132" loading="lazy" />
      </div>
      <div className="academy-story-copy">
        <p className="eyebrow">NOTRE HISTOIRE</p>
        <h2 id="academy-story-title">Une académie née<br /> d’une passion</h2>
        <p>DYC Culinary Arts Academy est un espace dédié à l’apprentissage des arts culinaires et pâtissiers, pensé pour tous ceux qui souhaitent transformer leur passion en compétences concrètes.</p>
        <p>Nous croyons en une cuisine qui allie créativité, technique et partage. Nos ateliers et masterclasses sont conçus pour offrir une expérience complète, dans un cadre professionnel et inspirant, avec des chefs passionnés et bienveillants.</p>
        <button className="pill home-cta" onClick={() => onOpen('histoire')}>Découvrir notre histoire <Arrow /></button>
      </div>
    </section>

    <div className="academy-benefits"><Benefits items={academyBenefits} /></div>

    <section className="academy-philosophy" id="notre-philosophie" aria-labelledby="academy-philosophy-title">
      <div className="academy-philosophy-copy">
        <img className="academy-philosophy-decoration" src={A + 'philosophie-decoration.png'} alt="" loading="lazy" />
        <div>
          <p className="eyebrow">NOTRE PHILOSOPHIE</p>
          <h2 id="academy-philosophy-title">Transmettre,<br /> Inspirer. Faire grandir</h2>
          <p>Nous plaçons l’humain et la créativité au cœur de notre démarche. Notre mission est de transmettre un savoir-faire d’excellence, de révéler les talents et d’accompagner chacun dans son parcours culinaire, qu’il soit amateur passionné ou futur professionnel.</p>
          <button className="pill home-cta" onClick={() => onOpen('valeurs')}>Nos valeurs <Arrow /></button>
        </div>
      </div>
      <figure className="academy-citation">
        <img src={A + 'tarte-framboises.png'} alt="Des mains de pâtissier apportent la touche finale à une tarte aux framboises" width="1422" height="804" loading="lazy" />
        <figcaption className="academy-citation-copy">
          <span className="academy-quote-mark" aria-hidden="true">“</span>
          <blockquote>La cuisine est un<br /> langage universel qui<br /> rassemble et inspire.</blockquote>
          <p className="academy-citation-attribution">DYC CULINARY ARTS ACADEMY</p>
        </figcaption>
      </figure>
    </section>

    <section className="academy-space" id="notre-espace" aria-labelledby="academy-space-title">
      <div className="academy-space-copy">
        <p className="eyebrow">UN CADRE D’EXCEPTION</p>
        <h2 id="academy-space-title">Un espace pensé<br /> pour la créativité</h2>
        <p>Notre académie vous accueille dans un espace moderne et chaleureux, équipé de matériel professionnel, pour apprendre dans les meilleures conditions et vivre une expérience immersive.</p>
        <button className="pill home-cta" onClick={() => onOpen('visite')}>Visiter l’académie <Arrow /></button>
      </div>
      <div className="academy-space-visual">
        <img src={A + 'espace-academie.png'} alt="L’académie DYC : îlots en marbre, matériel professionnel et espaces de création" width="568" height="224" loading="lazy" />
      </div>
    </section>
  </div>;
}
