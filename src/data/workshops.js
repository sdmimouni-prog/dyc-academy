export const workshops = [
  {
    slug: 'layer-cake', category: 'layer-cake',
    title: 'Masterclass Layer Cake', name: 'Masterclass Layer Cake',
    menuTitle: 'Layer Cake', menuDescription: 'Maîtrisez les techniques et réalisez votre propre gâteau.', menuAction: 'Voir l’atelier',
    image: 'layer-cake-framboises', duration: '1 JOUR · 6H',
    description: 'Maîtrisez les techniques du Layer Cake et réalisez votre propre gâteau de 12 parts.',
    capacity: 'Jusqu’à 12 participants', level: 'Débutant à intermédiaire', takeaway: 'Chaque participant repart avec son gâteau',
    price: '790',
  },
  {
    slug: 'cake-design', category: 'cake-design',
    title: 'Masterclass Cake Design', name: 'Masterclass Cake Design',
    menuTitle: 'Cake Design', menuDescription: 'Donnez vie à un gâteau d’exception et développez votre créativité.', menuAction: 'Voir la masterclass',
    image: 'cake-design-fleurs', duration: '2 JOURS · 12H',
    description: 'Donnez vie à un gâteau d’exception et développez votre créativité.',
    capacity: 'Jusqu’à 12 participants', level: 'Débutant à intermédiaire', takeaway: 'Chaque participant repart avec son gâteau',
    price: '1 490',
  },
  {
    slug: 'chocolat-pralines-mendiants', category: 'chocolat',
    title: 'Atelier Chocolat — Pralines & Mendiants', cardTitle: ['Atelier Chocolat', 'Pralines & Mendiants'], name: 'Atelier Chocolat — Pralines & Mendiants',
    menuTitle: 'Chocolat', menuDescription: 'Plongez dans l’univers du chocolat artisanal.', menuAction: 'Voir l’atelier',
    image: 'chocolat-pralines-mendiants', duration: '2H30',
    description: 'Plongez dans l’univers du chocolat artisanal et réalisez vos propres créations.',
    capacity: 'Jusqu’à 12 participants', level: 'Accessible à tous', takeaway: 'Chaque participant repart avec ses créations',
    price: '450', note: '(groupe de 10 à 12 personnes)',
  },
];

export const workshopHref = workshop => `/ateliers-masterclasses/${workshop.slug}`;
