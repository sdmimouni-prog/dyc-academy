import { Arrow } from "./Arrow";

export function Footer({ page, onOpen }) {
  const open = onOpen;
  const A = "/assets/";
  const homeHref = page === "home" ? "#accueil" : "/";
  return <footer className="site-footer" id="footer" aria-label="Pied de page DYC">
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
        <a className="logo footer-logo" href={homeHref} aria-label="DYC — Retour à l’accueil"><img src={A+'logo-dyc-officiel.jpeg'} alt="DYC Culinary Arts Academy" loading="lazy"/></a>
        <p>La pâtisserie, le chocolat<br/>et le plaisir d’apprendre ensemble.</p>
        <span className="footer-motto">Apprendre. Créer. Partager.</span>
      </div>
      <div className="footer-column">
        <h3 id="footer-explore-title">L’univers DYC</h3>
        <nav className="footer-links" aria-labelledby="footer-explore-title">
          <a href={homeHref}>Accueil</a>
          <a href="/academie">L’académie</a>
          <a href="/ateliers-masterclasses">Ateliers & Masterclasses</a>
          <a href="/entreprises">Groupes & Entreprises</a>
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
        <a className="pill home-cta footer-contact-link" href="/contact">Contacter l’académie <Arrow/></a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} DYC Culinary Arts Academy. Tous droits réservés.</p>
      <a href={page === "home" ? "#accueil" : page === "academie" ? "#academie-top" : "#page-top"} className="footer-back-top">Retour en haut <span aria-hidden="true">↑</span></a>
    </div>
  </div>
</footer>;
}
