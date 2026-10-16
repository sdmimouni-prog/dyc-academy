export function whatsappHref(context = '') {
  const message = context ? `Bonjour DYC Academy, je souhaite avoir des informations sur : ${context}.` : 'Bonjour DYC Academy, je souhaite réserver un atelier.';
  return `https://wa.me/212668814932?text=${encodeURIComponent(message)}`;
}
export function openWhatsApp(context) {
  window.location.assign(whatsappHref(context));
}
