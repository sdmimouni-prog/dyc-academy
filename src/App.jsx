import { useState, useEffect, useRef } from "react";
import { X } from "@phosphor-icons/react";
import { Arrow } from "./components/Arrow";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { AcademyPage } from "./pages/AcademyPage";
import { AteliersPage } from "./pages/AteliersPage";
import { WorkshopDetailPage } from "./pages/WorkshopDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { EntreprisesPage } from "./pages/EntreprisesPage";
import { workshops } from "./data/workshops";
import "./academy-page.css";

const A = "/assets/";
const pages = {
  "/": { name: "home", title: "DYC — Culinary Arts Academy", Component: HomePage },
  "/academie": { name: "academie", title: "L’Académie — DYC Culinary Arts Academy", Component: AcademyPage },
  "/ateliers-masterclasses": { name: "ateliers", title: "Ateliers & Masterclasses — DYC Culinary Arts Academy", Component: AteliersPage },
  "/contact": { name: "contact", title: "Contact | DYC Culinary Arts Academy", description: "Contactez DYC Culinary Arts Academy à Témara pour réserver un atelier, une masterclass, organiser un Team Building ou nous parler de votre projet.", Component: ContactPage },
  "/entreprises": { name: "entreprises", title: "Team Building Culinaire & Ateliers Entreprises | DYC Academy", description: "Organisez un Team Building culinaire avec DYC Academy : ateliers chocolat, Cake Challenge, événements d’entreprise et expériences sur mesure.", Component: EntreprisesPage },
};

export function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const workshop = workshops.find(item => path === `/ateliers-masterclasses/${item.slug}`);
  const page = pages[path] || (workshop ? { name: "atelier-detail", title: `${workshop.name} — DYC Culinary Arts Academy`, Component: WorkshopDetailPage, workshop } : pages["/"]);
  const Page = page.Component;
  const [modal, setModal] = useState(null);
  const [sent, setSent] = useState(false);
  const dialogRef = useRef(null);
  useEffect(() => {
    document.title = page.title;
    const description = document.querySelector('meta[name="description"]');
    if (description && page.description) description.setAttribute('content', page.description);
  }, [page.title, page.description]);
  useEffect(() => {
    if (modal) { dialogRef.current?.showModal(); document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [modal]);
  const open = kind => { setSent(false); setModal(kind); };
  const close = () => setModal(null);
  return <><SiteLayout page={page.name} onOpen={open}><Page onOpen={open} workshop={page.workshop}/></SiteLayout>
{modal&&<dialog ref={dialogRef} onCancel={close} aria-label="DYC — Informations et réservation" onKeyDown={e=>e.key==='Escape'&&close()} onClick={e=>e.target===e.currentTarget&&close()}><div className="modal"><button className="close" onClick={close} aria-label="Fermer"><X size={22}/></button>{modal==='video'?<><p className="eyebrow">L’EXPÉRIENCE DYC</p><h2>La passion se partage</h2><img className="modal-image" src={A+'academy.png'} alt="L’art de la pâtisserie"/><p>La vidéo de présentation sera disponible prochainement.</p><button className="pill dark" onClick={()=>open('reservation')}>Découvrir nos ateliers <Arrow/></button></>:modal==='histoire'?<><h2>Notre histoire</h2><p>DYC Culinary Arts Academy est un espace dédié à l’apprentissage des arts culinaires et pâtissiers, pensé pour tous ceux qui souhaitent transformer leur passion en compétences concrètes.</p><p>Nous croyons en une cuisine qui allie créativité, technique et partage. Nos ateliers et masterclasses sont conçus pour offrir une expérience complète, dans un cadre professionnel et inspirant, avec des chefs passionnés et bienveillants.</p><a className="pill dark" href="#notre-philosophie" onClick={close}>Découvrir notre philosophie <Arrow/></a></>:modal==='valeurs'?<><p className="eyebrow">NOTRE PHILOSOPHIE</p><h2>Transmettre, inspirer, faire grandir</h2><p><strong>La transmission.</strong> Partager un savoir-faire d’excellence et accompagner chacun dans son apprentissage.</p><p><strong>La créativité.</strong> Donner la place à l’expérimentation et révéler les talents.</p><p><strong>Le partage.</strong> Apprendre ensemble, avec des chefs passionnés et bienveillants.</p><button className="pill dark" onClick={()=>open('reservation')}>Choisir un atelier <Arrow/></button></>:modal==='academie'?<><p className="eyebrow">DYC CULINARY ARTS ACADEMY</p><h2>Apprendre. Créer. Partager.</h2><p>Des ateliers de pâtisserie et de chocolat en petits groupes, accompagnés par des chefs pâtissiers expérimentés. Le matériel et les ingrédients sont fournis, et vous repartez avec vos créations.</p><button className="pill dark" onClick={()=>open('reservation')}>Choisir un atelier <Arrow/></button></>:modal==='language'?<><h2>Bienvenue chez DYC</h2><p>Les versions arabe et anglaise sont en préparation. Découvrez nos ateliers en français.</p><button className="pill dark" onClick={close}>Continuer en français</button></>:sent?<><p className="eyebrow">VOTRE DEMANDE</p><h2>Récapitulatif préparé</h2><p>Votre sélection est prête. Ce prototype n’envoie pas encore de demande : l’envoi et les disponibilités seront reliés au service de réservation.</p><button className="pill dark" onClick={close}>{page.name === "academie" ? "Revenir à la page" : "Revenir à l’accueil"}</button></>:<><p className="eyebrow">PARTAGEONS UN MOMENT GOURMAND</p><h2>{modal==='evenement'?'Votre événement sur mesure':modal==='contact'?'Contactez l’académie':modal==='visite'?'Visiter l’académie':'Réserver un atelier'}</h2><form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Votre nom<input name="name" autoComplete="name" required placeholder="Prénom et nom"/></label><label>Votre e-mail<input name="email" type="email" autoComplete="email" required placeholder="vous@exemple.com"/></label>{modal!=='contact'&&modal!=='evenement'&&modal!=='visite'&&<label>Votre atelier<select defaultValue={workshops.some(w=>w.name===modal)?modal:workshops[0].name}>{workshops.map(w=><option key={w.name}>{w.name}</option>)}</select></label>}<label>{modal==='evenement'?'Parlez-nous de votre événement':'Votre message'}<textarea rows="3" placeholder="Vos envies, le nombre de participants, une date souhaitée…"/></label><p className="form-note">Aperçu de réservation — aucune demande ne sera envoyée.</p><button className="pill dark" type="submit">Préparer ma demande <Arrow/></button></form></>}</div></dialog>}
</>;
}
