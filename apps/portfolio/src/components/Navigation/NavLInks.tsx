"use client";

import { usePathname } from "next/navigation";

const HIDDEN_PATHS = ["/impressum", "/datenschutz"];

export default function NavLinks() {
  const pathname = usePathname();

  if (HIDDEN_PATHS.includes(pathname)) return null;

  return (
    <nav className="NavLinks">
      <ul className="NavLinks__list">
        <li className="NavLinks__item">
          <a href="#skills" className="NavLinks__link">
            skills
          </a>
        </li>
        <li className="NavLinks__item">
          <a href="#projects" className="NavLinks__link">
            projekte
          </a>
        </li>
        <li className="NavLinks__item">
          <a href="#contact" className="NavLinks__link">
            kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
