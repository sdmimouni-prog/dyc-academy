import { ChefHat, UsersThree, Cake, Star } from "@phosphor-icons/react";

const homeBenefits = [[ChefHat, "Chefs pâtissiers", "expérimentés"], [UsersThree, "Petits groupes", "(12 participants max)"], [Cake, "Matériel et ingrédients", "haut de gamme"], [Star, "Vous repartez avec", "vos créations"]];

export function Benefits({ items = homeBenefits }) {
  return <div className="benefits">{items.map(([Icon,a,b])=><div className="benefit" key={a}><Icon aria-hidden="true" size={40} weight="light"/><p><strong>{a}</strong><span>{b}</span></p></div>)}</div>;
}
