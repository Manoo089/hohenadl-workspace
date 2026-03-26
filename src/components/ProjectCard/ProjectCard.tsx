import { PROJECTS } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";

export function ProjectCard() {
  return (
    <div className={clsx("ProjectCard")}>
      {PROJECTS.map((project) => (
        <Link key={project.id} href={project.href} className="ProjectCard__wrapper" target="_blank" rel="noopener noreferrer">
          <div className="ProjectCard__arrow">→</div>
          <div className="ProjectCard__label">{project.label}</div>
          <h3 className="ProjectCard__title">{project.title}</h3>
          <p className="ProjectCard__desc">{project.description}</p>
          <div className="ProjectCard__tech">
            {project.tech.map((t, idx) => (
              <div key={idx} className="ProjectCard__tech-item" style={{ "--i": idx } as React.CSSProperties}>
                {t}
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
