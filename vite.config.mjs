import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { siteConfig } from "./src/data/siteConfig.js";

const { contact } = siteConfig;
const academySchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://dycacademy.com/#academy',
  name: contact.name,
  url: 'https://dycacademy.com/',
  logo: 'https://dycacademy.com/assets/logo-dyc-officiel.jpeg',
  telephone: contact.phone,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.streetAddress,
    addressLocality: contact.city,
    postalCode: contact.postalCode,
    addressCountry: contact.country,
  },
};

export default defineConfig({
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react(), {
    name: 'academy-structured-data',
    transformIndexHtml() {
      return [{ tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(academySchema).replace(/</g, '\\u003c'), injectTo: 'head' }];
    },
  }],
});
