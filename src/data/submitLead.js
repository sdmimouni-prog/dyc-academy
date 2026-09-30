import { siteConfig } from './siteConfig.js';

export function buildLeadEmailHref(data, recipient) {
  const subject = data.source === 'entreprises' ? 'Demande entreprise — DYC Academy' : 'Demande de contact — DYC Academy';
  const fields = [
    ['Entreprise', data.company],
    ['Nom et prénom', data.name],
    ['Email', data.email],
    ['Téléphone', data.phone],
    ['Nombre de participants', data.participants],
    ['Date souhaitée', data.date],
    ['Type d’expérience', data.experience],
    ['Atelier souhaité', data.interest],
    ['Message', data.message],
  ];
  const body = fields.filter(([, value]) => value).map(([label, value]) => `${label} : ${value}`).join('\n\n');
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitLead(data) {
  const endpoint = siteConfig.contact.formEndpoint;
  if (!endpoint) {
    const recipient = siteConfig.contact.email;
    if (!recipient) throw new Error('unconfigured');
    return { delivery: 'email-draft', href: buildLeadEmailHref(data, recipient) };
  }
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('request-failed');
  return { delivery: 'direct' };
}
