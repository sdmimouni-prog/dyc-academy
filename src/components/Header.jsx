import { useEffect, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { Arrow } from "./Arrow";
import { AteliersMegaMenu } from "./AteliersMegaMenu";
import "../ateliers-mega-menu.css";

export function Header({ page, onOpen }) {
  const [menu, setMenu] = useState(false);
  const [compact, setCompact] = useState(() => typeof window !== "undefined" && window.matchMedia("(max-width: 1050px)").matches);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileWorkshopsOpen, setMobileWorkshopsOpen] = useState(false);
  const [pointerOffset, setPointerOffset] = useState(0);
  const headerRef = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const closeTimer = useRef(null);
  const open = onOpen;
  const A = "/assets/";
  const homeHref = page === "home" ? "#accueil" : "/";

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1050px)");
    const update = () => {
      setCompact(media.matches);
      setMegaOpen(false);
      setMobileWorkshopsOpen(false);
    };
    media.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!megaOpen && !mobileWorkshopsOpen) return;
    const onPointerDown = event => {
      if (!triggerRef.current?.contains(event.target) && !panelRef.current?.contains(event.target)) {
        setMegaOpen(false);
        setMobileWorkshopsOpen(false);
      }
    };
    const onKeyDown = event => {
      if (event.key === "Escape") {
        setMegaOpen(false);
        setMobileWorkshopsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [megaOpen, mobileWorkshopsOpen]);

  const clearCloseTimer = () => window.clearTimeout(closeTimer.current);
  const showMegaMenu = () => {
    if (compact) return;
    clearCloseTimer();
    const header = headerRef.current?.getBoundingClientRect();
    const trigger = triggerRef.current?.getBoundingClientRect();
    if (header && trigger) setPointerOffset(trigger.left + trigger.width / 2 - header.left - header.width / 2);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    if (!compact) closeTimer.current = window.setTimeout(() => setMegaOpen(false), 180);
  };
  const closeNavigation = () => {
    clearCloseTimer();
    setMegaOpen(false);
    setMobileWorkshopsOpen(false);
    setMenu(false);
  };

  return <header className="site-header" ref={headerRef}>
    <a href={homeHref} className="logo" aria-label="DYC — Accueil"><img src={A + "logo-dyc-officiel.jpeg"} alt="DYC Culinary Arts Academy" /></a>
    <button className="menu-toggle" aria-label="Ouvrir le menu" aria-expanded={menu} aria-controls="site-navigation" onClick={() => { setMenu(!menu); setMegaOpen(false); setMobileWorkshopsOpen(false); }}>Menu</button>
    <nav id="site-navigation" className={menu ? "open" : ""} aria-label="Navigation principale">
      <a className={page === "home" ? "active" : undefined} aria-current={page === "home" ? "page" : undefined} href={homeHref} onClick={closeNavigation}>Accueil</a>
      <a href="/academie" className={page === "academie" ? "active" : undefined} aria-current={page === "academie" ? "page" : undefined} onClick={closeNavigation}>L’académie</a>
      <button
        className="ateliers-trigger"
        ref={triggerRef}
        aria-haspopup="true"
        aria-expanded={compact ? mobileWorkshopsOpen : megaOpen}
        aria-controls={compact ? "atelier-mobile-links" : "ateliers-mega-menu"}
        onMouseEnter={showMegaMenu}
        onMouseLeave={scheduleClose}
        onClick={() => compact ? setMobileWorkshopsOpen(value => !value) : showMegaMenu()}
      >Ateliers &amp; Masterclasses <CaretDown aria-hidden="true" className="chevron" size={10} /></button>
      {compact && mobileWorkshopsOpen && <AteliersMegaMenu compact menuRef={panelRef} onNavigate={closeNavigation} />}
      <a href="/entreprises" className={page === "entreprises" ? "active" : undefined} aria-current={page === "entreprises" ? "page" : undefined} onClick={closeNavigation}>Entreprises</a>
      <a href="/contact" className={page === "contact" ? "active" : undefined} aria-current={page === "contact" ? "page" : undefined} onClick={closeNavigation}>Contact</a>
    </nav>
    <button className="pill home-cta header-book" onClick={() => { closeNavigation(); open("reservation"); }}><span>Réserver un atelier</span><Arrow /></button>
    {!compact && megaOpen && <AteliersMegaMenu
      menuRef={panelRef}
      pointerOffset={pointerOffset}
      onNavigate={closeNavigation}
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    />}
  </header>;
}
