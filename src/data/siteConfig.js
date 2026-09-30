const academyAddress = 'Les Orangeries Offices, Immeuble A N°142, 451 Bd Laymoun, Casablanca 20230';

export const siteConfig = {
  contact: {
    name: 'DYC Culinary Arts Academy',
    address: academyAddress,
    city: 'Casablanca',
    phone: '00212 6 68 81 49 32',
    email: 'contact@dycacademy.ma',
    openingHours: 'Découvrez nos prochaines expériences, dates et horaires ou réservez selon vos disponibilités',
    instagram: null,
    facebook: null,
    googleMapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(academyAddress)}`,
    mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(academyAddress)}&z=16&output=embed`,
    latitude: null,
    longitude: null,
    formEndpoint: null,
  },
};
