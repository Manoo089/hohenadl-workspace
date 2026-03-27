type SKILLS_TYPE = {
  id: number;
  icon: string;
  name: string;
  tags: string[];
}[];

export const SKILLS: SKILLS_TYPE = [
  { id: 1, icon: "⚛️", name: "React / Next.js", tags: ["Typescript", "App Router", "SSR"] },
  { id: 2, icon: "🎨", name: "CSS / SCSS", tags: ["Tailwind", "Animations", "Responsive"] },
  { id: 3, icon: "📦", name: "Wordpress", tags: ["Elementor", "ACF", "Gutenberg"] },
  { id: 4, icon: "🔗", name: "Backend / DB", tags: ["PostgreSQL", "Prisma", "NextAuth", "MySQL"] },
  { id: 5, icon: "🔍", name: "Accessibility / SEO", tags: ["WCAG 2.1", "ARIA", "Semantic HTML", "Lighthouse"] },
  { id: 6, icon: "🖥️", name: "Linux / DevOps", tags: ["Git/Github", "Docker", "Caddy", "Linux Server"] },
  { id: 7, icon: "🏠", name: "Smart Home", tags: ["Home Assistant", "WLED", "Zigbee"] },
  { id: 8, icon: "🔌", name: "Embedded / IoT", tags: ["ESP32", "MIDI", "EasyEDA"] },
] as const;

type PROJECTS_TYPE = {
  id: number;
  href: string;
  label: string;
  title: string;
  description: string;
  tech: string[];
}[];

export const PROJECTS: PROJECTS_TYPE = [
  {
    id: 1,
    href: "https://github.com/Manoo089/Markdown-CMS",
    label: "Featured Project",
    title: "MDCMS",
    description:
      "Ein maßgeschneidertes Content Management System entwickelt mit Next.js, TypeScript, Prisma und NextAuth. Unterstützt Multi-Client-Architektur, Benutzer­verwaltung mit Zod-Validierung, automatisierte Client-Generierung via Shell-Skripte und eine mobile Navigation mit Custom Hooks.",
    tech: ["Next.js 16", "TypeScript", "Prisma", "NextAuth", "SCSS"],
  },
  {
    id: 2,
    href: "https://expedition-xplore.com",
    label: "Wordpress",
    title: "expedition-xplore.com",
    description:
      "Reise-Plattform mit Taxonomie-Filter­system, ACF-Datumsfeldern, Loop Grid und chronologischer Sortierung.",
    tech: ["Wordpress", "Elementor Pro", "ACF"],
  },
  {
    id: 3,
    href: "https://kastanienhof-pfettrach.de",
    label: "Wordpress",
    title: "kastanienhof-pfettrach.de",
    description:
      "Reise-Plattform mit Taxonomie-Filter­system, ACF-Datumsfeldern, Loop Grid und chronologischer Sortierung.",
    tech: ["Wordpress", "Elementor Pro", "ACF"],
  },
  {
    id: 4,
    href: "https://mmssoft.de",
    label: "Next.js",
    title: "mmssoft.de",
    description:
      "Zielgerichtete One-Pager Landingpage für einen DMS-Dienstleister — konzipiert und umgesetzt als Grundlage für die Partnerschaft mit ELO Digital Office.",
    tech: ["Next.js", "TypeScript", "Github Actions"],
  },
];

export const CONTACT = [
  { id: 1, label: "E-Mail", value: "manuel@hohenadl.dev", href: "mailto:manuel@hohenadl.dev" },
  { id: 2, label: "Webseite", value: "hohenadl.dev", href: "https://hohenadl.dev" },
  { id: 3, label: "Github", value: "github.com/Manoo089", href: "https://github.com/Manoo089" },
  { id: 4, label: "LinkedIn", value: "linkedin.com", href: "https://www.linkedin.com/in/manuel-hohenadl-b68977131" },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manuel Hohenadl",
  jobTitle: "Web Developer",
  url: process.env.SITE_URL,
  sameAs: ["https://github.com/Manoo089", "https://www.linkedin.com/in/manuel-hohenadl-b68977131"],
};
