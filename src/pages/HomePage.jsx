import { PlayCircle, Pause, Play } from "@phosphor-icons/react";
import { useHeroMotion } from "../useHeroMotion";
import { workshops } from "../data/workshops";
import { Arrow } from "../components/Arrow";
import { Benefits } from "../components/Benefits";

const A = "/assets/";

export function HomePage({ onOpen }) {
  const { heroRef, paused: heroPaused, toggle: toggleHeroMotion } = useHeroMotion();
  const open = onOpen;
  return <><section className="hero" id="accueil" ref={heroRef} data-motion-paused={heroPaused}><div className="hero-scene" aria-hidden="true"><div className="hero-parallax"><div className="hero-photo"/></div><div className="hero-glow"/></div><div className="hero-copy"><p className="eyebrow">APPRENDRE&nbsp; CRÉER&nbsp; PARTAGER</p><h1>L’art culinaire<br/>{' '}prend vie avec vous</h1><div className="hero-actions"><a className="pill home-cta" href="#ateliers">Découvrir nos ateliers <Arrow/></a><button className="pill home-cta outline" onClick={()=>open('video')}>Voir la vidéo <PlayCircle size={18} weight="light" aria-hidden="true"/></button></div></div><p className="hero-signature"><span>Plus</span>{' '}<span>qu’un atelier,</span>{' '}<span>une expérience</span></p><button className="hero-motion-toggle" onClick={toggleHeroMotion} aria-label={heroPaused ? 'Reprendre l’animation du décor' : 'Mettre l’animation du décor en pause'}>{heroPaused ? <Play size={14} weight="fill" aria-hidden="true"/> : <Pause size={14} weight="fill" aria-hidden="true"/>}<span>{heroPaused ? 'Reprendre' : 'Pause'}</span></button></section>
<section id="ateliers" className="workshops"><div className="section-heading"><div><p className="eyebrow">NOS ATELIERS & MASTERCLASSES</p><p className="workshops-tagline">Des expériences gourmandes pour tous les passionnés</p></div><a href="#workshop-list" className="pill home-cta all-workshops">Voir tous les ateliers <Arrow/></a></div><div className="cards" id="workshop-list">{workshops.map(w=><article className="card" key={w.image}><div className="card-photo"><img src={A+w.image+'.png'} alt={w.name}/><span className="duration">{w.duration}</span></div><div className="card-copy"><h3>{w.title}</h3><p>{w.description}</p><div className="card-bottom"><div><span className="price">{w.price} MAD</span> / personne{w.note&&<small>{w.note}</small>}</div><button className="round" aria-label={'Réserver '+w.name} onClick={()=>open(w.name)}><Arrow/></button></div></div></article>)}</div><Benefits/></section>
<section className="academy" id="academie"><div className="academy-visual"><img className="academy-photo" src={A+'academy-chocolat-signature.png'} alt="La passion du détail — tablette de chocolat aux facettes géométriques sur ardoise"/></div><div className="academy-copy"><img className="bird" src={A+'bird-transparent.png'} alt=""/><div className="academy-content"><p className="eyebrow">L’ACADÉMIE</p><h2>Un lieu où la passion<br/>{' '}devient savoir-faire</h2><p>DYC Culinary Arts Academy est une académie dédiée aux arts culinaires, spécialisée en pâtisserie et en chocolat. Nous proposons des ateliers et masterclasses dans un cadre premium, avec une approche pratique, conviviale et accessible à tous.</p><a className="pill home-cta dark" href="/academie">Découvrir l’académie <Arrow/></a></div></div></section>
<section className="groups" id="groupes">
  <div className="groups-copy">
    <p className="eyebrow">GROUPES & ENTREPRISES</p>
    <h2>Des expériences sur mesure</h2>
    <p className="groups-intro">Team building, événements privés, anniversaires…</p>
    <p className="groups-description">Offrez à vos équipes ou à vos proches un moment gourmand et inoubliable autour du chocolat.</p>
    <button className="pill home-cta dark" onClick={()=>open('evenement')}>Organiser un événement <Arrow/></button>
  </div>
  <div className="groups-visual">
    <img src={A+'team-atelier-dyc.png'} alt="Un groupe partage un atelier chocolat à l’académie DYC" loading="lazy"/>
  </div>
</section><section className="quote" aria-label="Créer, c’est offrir un peu de bonheur à ceux qui nous entourent. DYC Culinary Arts Academy."></section></>;
}
