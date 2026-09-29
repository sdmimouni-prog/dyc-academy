import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle, CaretDown, X, ChefHat, UsersThree, Cake, Star, Pause, Play } from '@phosphor-icons/react';
import { useHeroMotion } from './useHeroMotion';
const A='/assets/';
const workshops=[{title:'Masterclass Layer Cake',name:'Masterclass Layer Cake',image:'layer-cake-framboises',duration:'1 JOUR · 6H',description:'Maîtrisez les techniques du Layer Cake et réalisez votre propre gâteau de 16 parts.',price:'790'}, {title:'Masterclass Cake Design',name:'Masterclass Cake Design',image:'cake-design-fleurs',duration:'2 JOURS · 12H',description:"Donnez vie à un gâteau d’exception et développez votre créativité.",price:'1 490'}, {title:'Atelier Chocolat — Pralines & Mendiants',name:'Atelier Chocolat — Pralines & Mendiants',image:'chocolat-pralines-mendiants',duration:'2H30',description:'Plongez dans l’univers du chocolat artisanal et réalisez vos propres créations.',price:'450',note:'(groupe de 10 à 12 personnes)'}];
const Arrow=()=> <ArrowRight aria-hidden="true" className="arrow" size={19} weight="light"/>;
export function App(){const { heroRef, paused: heroPaused, toggle: toggleHeroMotion } = useHeroMotion();const [menu,setMenu]=useState(false);const [modal,setModal]=useState(null);const [sent,setSent]=useState(false);const dialogRef=useRef(null);useEffect(()=>{if(modal){dialogRef.current?.showModal();document.body.style.overflow='hidden';}else{document.body.style.overflow='';}return()=>{document.body.style.overflow=''}},[modal]);const open=(kind)=>{setSent(false);setModal(kind)}; const close=()=>setModal(null);
return <><main><section className="hero" id="accueil" ref={heroRef} data-motion-paused={heroPaused}><div className="hero-scene" aria-hidden="true"><div className="hero-parallax"><div className="hero-photo"/></div><div className="hero-glow"/></div><header><a href="#accueil" className="logo" aria-label="DYC — Accueil"><img src={A+'logo-dyc-officiel.jpeg'} alt="DYC Culinary Arts Academy"/></a><button className="menu-toggle" aria-label="Ouvrir le menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>Menu</button><nav className={menu?'open':''} aria-label="Navigation principale"><a className="active" href="#accueil" onClick={()=>setMenu(false)}>Accueil</a><a href="#academie" onClick={()=>setMenu(false)}>L’académie</a><a href="#ateliers" onClick={()=>setMenu(false)}>Ateliers & Masterclasses <CaretDown aria-hidden="true" className="chevron" size={10}/></a><a href="#groupes" onClick={()=>setMenu(false)}>Groupes & Entreprises <CaretDown aria-hidden="true" className="chevron" size={10}/></a><button onClick={()=>open('contact')}>Contact</button></nav><button className="pill home-cta header-book" onClick={()=>open('reservation')}><span>Réserver un atelier</span><Arrow/></button></header><div className="hero-copy"><p className="eyebrow">APPRENDRE&nbsp; CRÉER&nbsp; PARTAGER</p><h1>L’art culinaire<br/>{' '}prend vie avec vous</h1><div className="hero-actions"><a className="pill home-cta" href="#ateliers">Découvrir nos ateliers <Arrow/></a><button className="pill home-cta outline" onClick={()=>open('video')}>Voir la vidéo <PlayCircle size={18} weight="light" aria-hidden="true"/></button></div></div><p className="hero-signature"><span>Plus</span>{' '}<span>qu’un atelier,</span>{' '}<span>une expérience</span></p><button className="hero-motion-toggle" onClick={toggleHeroMotion} aria-label={heroPaused ? 'Reprendre l’animation du décor' : 'Mettre l’animation du décor en pause'}>{heroPaused ? <Play size={14} weight="fill" aria-hidden="true"/> : <Pause size={14} weight="fill" aria-hidden="true"/>}<span>{heroPaused ? 'Reprendre' : 'Pause'}</span></button></section>
<section id="ateliers" className="workshops"><div className="section-heading"><div><p className="eyebrow">NOS ATELIERS & MASTERCLASSES</p><p className="workshops-tagline">Des expériences gourmandes pour tous les passionnés</p></div><a href="#workshop-list" className="pill home-cta all-workshops">Voir tous les ateliers <Arrow/></a></div><div className="cards" id="workshop-list">{workshops.map(w=><article className="card" key={w.image}><div className="card-photo"><img src={A+w.image+'.png'} alt={w.name}/><span className="duration">{w.duration}</span></div><div className="card-copy"><h3>{w.title}</h3><p>{w.description}</p><div className="card-bottom"><div><span className="price">{w.price} MAD</span> / personne{w.note&&<small>{w.note}</small>}</div><button className="round" aria-label={'Réserver '+w.name} onClick={()=>open(w.name)}><Arrow/></button></div></div></article>)}</div><div className="benefits">{[[ChefHat,'Chefs pâtissiers','expérimentés'],[UsersThree,'Petits groupes','(12 participants max)'],[Cake,'Matériel et ingrédients','haut de gamme'],[Star,'Vous repartez avec','vos créations']].map(([Icon,a,b])=><div className="benefit" key={a}><Icon aria-hidden="true" size={40} weight="light"/><p><strong>{a}</strong><span>{b}</span></p></div>)}</div></section>
<section className="academy" id="academie"><div className="academy-visual"><img className="academy-photo" src={A+'academy-chocolat-signature.png'} alt="La passion du détail — tablette de chocolat aux facettes géométriques sur ardoise"/></div><div className="academy-copy"><img className="bird" src={A+'bird-transparent.png'} alt=""/><div className="academy-content"><p className="eyebrow">L’ACADÉMIE</p><h2>Un lieu où la passion<br/>{' '}devient savoir-faire</h2><p>DYC Culinary Arts Academy est une académie dédiée aux arts culinaires, spécialisée en pâtisserie et en chocolat. Nous proposons des ateliers et masterclasses dans un cadre premium, avec une approche pratique, conviviale et accessible à tous.</p><button className="pill home-cta dark" onClick={()=>open('academie')}>Découvrir l’académie <Arrow/></button></div></div></section>
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
</section><section className="quote" aria-label="Créer, c’est offrir un peu de bonheur à ceux qui nous entourent. DYC Culinary Arts Academy."></section></main>
<footer className="site-footer" id="footer" aria-label="Pied de page DYC">
  <div className="footer-inner">
    <div className="footer-invitation">
      <div>
        <p className="eyebrow">LE PLAISIR DE FAIRE, LE BONHEUR DE PARTAGER</p>
        <h2>Votre prochaine création<br/><em>commence ici.</em></h2>
      </div>
      <button className="pill home-cta footer-book" onClick={()=>open('reservation')}>Réserver un atelier <Arrow/></button>
    </div>
    <div className="footer-grid">
      <div className="footer-brand">
        <a className="logo footer-logo" href="#accueil" aria-label="DYC — Retour à l’accueil"><img src={A+'logo-dyc-officiel.jpeg'} alt="DYC Culinary Arts Academy" loading="lazy"/></a>
        <p>La pâtisserie, le chocolat<br/>et le plaisir d’apprendre ensemble.</p>
        <span className="footer-motto">Apprendre. Créer. Partager.</span>
      </div>
      <div className="footer-column">
        <h3 id="footer-explore-title">L’univers DYC</h3>
        <nav className="footer-links" aria-labelledby="footer-explore-title">
          <a href="#accueil">Accueil</a>
          <a href="#academie">L’académie</a>
          <a href="#ateliers">Ateliers & Masterclasses</a>
          <a href="#groupes">Groupes & Entreprises</a>
        </nav>
      </div>
      <div className="footer-column">
        <h3 id="footer-workshops-title">À vivre à l’académie</h3>
        <nav className="footer-links" aria-labelledby="footer-workshops-title">
          <button onClick={()=>open('Masterclass Layer Cake')}>Masterclass Layer Cake</button>
          <button onClick={()=>open('Masterclass Cake Design')}>Masterclass Cake Design</button>
          <button onClick={()=>open('Atelier Chocolat — Pralines & Mendiants')}>Atelier Chocolat</button>
          <button onClick={()=>open('evenement')}>Votre événement sur mesure</button>
        </nav>
      </div>
      <div className="footer-column footer-contact">
        <h3>Créons un moment ensemble</h3>
        <p>Une envie, une question, un événement à imaginer ? Parlons-en.</p>
        <button className="pill home-cta footer-contact-link" onClick={()=>open('contact')}>Contacter l’académie <Arrow/></button>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} DYC Culinary Arts Academy. Tous droits réservés.</p>
      <a href="#accueil" className="footer-back-top">Retour en haut <span aria-hidden="true">↑</span></a>
    </div>
  </div>
</footer>
{modal&&<dialog ref={dialogRef} onCancel={close} aria-label="DYC — Informations et réservation" onKeyDown={e=>e.key==='Escape'&&close()} onClick={e=>e.target===e.currentTarget&&close()}><div className="modal"><button className="close" onClick={close} aria-label="Fermer"><X size={22}/></button>{modal==='video'?<><p className="eyebrow">L’EXPÉRIENCE DYC</p><h2>La passion se partage</h2><img className="modal-image" src={A+'academy.png'} alt="L’art de la pâtisserie"/><p>La vidéo de présentation sera disponible prochainement.</p><button className="pill dark" onClick={()=>open('reservation')}>Découvrir nos ateliers <Arrow/></button></>:modal==='academie'?<><p className="eyebrow">DYC CULINARY ARTS ACADEMY</p><h2>Apprendre. Créer. Partager.</h2><p>Des ateliers de pâtisserie et de chocolat en petits groupes, accompagnés par des chefs pâtissiers expérimentés. Le matériel et les ingrédients sont fournis, et vous repartez avec vos créations.</p><button className="pill dark" onClick={()=>open('reservation')}>Choisir un atelier <Arrow/></button></>:modal==='language'?<><h2>Bienvenue chez DYC</h2><p>Les versions arabe et anglaise sont en préparation. Découvrez nos ateliers en français.</p><button className="pill dark" onClick={close}>Continuer en français</button></>:sent?<><p className="eyebrow">VOTRE DEMANDE</p><h2>Récapitulatif préparé</h2><p>Votre sélection est prête. Ce prototype n’envoie pas encore de demande : l’envoi et les disponibilités seront reliés au service de réservation.</p><button className="pill dark" onClick={close}>Revenir à l’accueil</button></>:<><p className="eyebrow">PARTAGEONS UN MOMENT GOURMAND</p><h2>{modal==='evenement'?'Votre événement sur mesure':modal==='contact'?'Contactez l’académie':'Réserver un atelier'}</h2><form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Votre nom<input name="name" autoComplete="name" required placeholder="Prénom et nom"/></label><label>Votre e-mail<input name="email" type="email" autoComplete="email" required placeholder="vous@exemple.com"/></label>{modal!=='contact'&&modal!=='evenement'&&<label>Votre atelier<select defaultValue={workshops.some(w=>w.name===modal)?modal:workshops[0].name}>{workshops.map(w=><option key={w.name}>{w.name}</option>)}</select></label>}<label>{modal==='evenement'?'Parlez-nous de votre événement':'Votre message'}<textarea rows="3" placeholder="Vos envies, le nombre de participants, une date souhaitée…"/></label><p className="form-note">Aperçu de réservation — aucune demande ne sera envoyée.</p><button className="pill dark" type="submit">Préparer ma demande <Arrow/></button></form></>}</div></dialog>}</>}
