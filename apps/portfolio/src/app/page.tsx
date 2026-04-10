import { ContactLinks } from "@/components/ContactLinks/ContactLinks";
import { Footer } from "@/components/Footer/Footer";
import { CodeCard } from "@/components/CodeCard/CodeCard";
import { Hero } from "@/components/Hero/Hero";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Section } from "@/components/Section/Section";
import { Skills } from "@/components/Skills/Skills";
import { StatsBar } from "@/components/StatsBar/StatsBar";
import { jsonLd } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div>
        <main id="main-content">
          <Hero>
            <CodeCard />
          </Hero>
          <StatsBar />
          <Section
            id="skills"
            tag="// Tech Stack"
            title="Womit ich arbeite"
            sub="Mein Toolkit für moderne, performante und barrierefreie Web-Lösungen — von der Konzeption bis zur Auslieferung."
            paddingTop
          >
            <Skills />
          </Section>

          <Section
            id="projects"
            tag="// Ausgewählte Projekte"
            title="Was ich gebaut habe"
            sub="Eine Auswahl meiner Projekte — von Custom CMS bis zur WordPress-Expedition-Plattform."
            paddingTop
            paddingBottom
          >
            <ProjectCard />
          </Section>

          <Section
            id="contact"
            tag="// Kontakt"
            title={`Lass uns<br>was <span class="accent">bauen</span>.`}
            sub="Offen für Freelance-Projekte oder Teilzeit­stellen oder spannende Kooperationen — besonders im Raum Bayern oder remote."
            variant="contact"
            paddingTop
            paddingBottom
          >
            <ContactLinks />
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
}
