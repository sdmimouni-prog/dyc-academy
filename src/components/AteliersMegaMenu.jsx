import { Arrow } from "./Arrow";
import { workshops, workshopHref } from "../data/workshops";

export function AteliersMegaMenu({ compact = false, menuRef, pointerOffset = 0, onNavigate, onMouseEnter, onMouseLeave }) {
  if (compact) {
    return <div className="atelier-mobile-links" id="atelier-mobile-links" ref={menuRef}>
      {workshops.map(atelier => <a href={workshopHref(atelier)} key={atelier.slug} onClick={onNavigate}>{atelier.menuTitle}</a>)}
    </div>;
  }

  return <div
    className="ateliers-mega-menu"
    id="ateliers-mega-menu"
    ref={menuRef}
    style={{ "--mega-pointer-offset": `${pointerOffset}px` }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="ateliers-mega-marker" aria-hidden="true" />
    <div className="ateliers-mega-grid">
      {workshops.map(atelier => <a className="ateliers-mega-card" href={workshopHref(atelier)} key={atelier.slug} onClick={onNavigate}>
        <img src={`/assets/${atelier.image}.png`} alt="" />
        <h3>{atelier.menuTitle}</h3>
        <p>{atelier.menuDescription}</p>
        <span className="ateliers-mega-action">{atelier.menuAction}<span className="ateliers-mega-arrow"><Arrow /></span></span>
      </a>)}
    </div>
  </div>;
}
