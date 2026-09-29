import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { Arrow } from "./Arrow";

export function Header({ page, onOpen }) {
  const [menu, setMenu] = useState(false);
  const open = onOpen;
  const A = "/assets/";
  const homeHref = page === "home" ? "#accueil" : "/";
  const homeAnchor = id => page === "home" ? `#${id}` : `/#${id}`;
  return <header className="site-header"><a href={homeHref} className="logo" aria-label="DYC — Accueil"><img src={A+'logo-dyc-officiel.jpeg'} alt="DYC Culinary Arts Academy"/></a><button className="menu-toggle" aria-label="Ouvrir le menu" aria-expanded={menu} aria-controls="site-navigation" onClick={()=>setMenu(!menu)}>Menu</button><nav id="site-navigation" className={menu?'open':''} aria-label="Navigation principale"><a className={page === "home" ? "active" : undefined} aria-current={page === "home" ? "page" : undefined} href={homeHref} onClick={()=>setMenu(false)}>Accueil</a><a href="/academie" className={page === "academie" ? "active" : undefined} aria-current={page === "academie" ? "page" : undefined} onClick={()=>setMenu(false)}>L’académie</a><a href={homeAnchor("ateliers")} onClick={()=>setMenu(false)}>Ateliers & Masterclasses <CaretDown aria-hidden="true" className="chevron" size={10}/></a><a href={homeAnchor("groupes")} onClick={()=>setMenu(false)}>Groupes & Entreprises</a><button onClick={()=>open('contact')}>Contact</button></nav><button className="pill home-cta header-book" onClick={()=>open('reservation')}><span>Réserver un atelier</span><Arrow/></button></header>;
}
