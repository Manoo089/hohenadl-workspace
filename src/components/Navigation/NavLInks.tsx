"use client";

import { Link } from "react-scroll";
import { usePathname } from "next/navigation";

const HIDDEN_PATHS = ["/impressum", "/datenschutz"];

export default function NavLinks() {
  const pathname = usePathname();

  if (HIDDEN_PATHS.includes(pathname)) return null;

  return (
    <nav className="NavLinks">
      <ul className="NavLinks__list">
        <li className="NavLinks__item">
          <Link to={"skills"} className="NavLinks__link">
            skills
          </Link>
        </li>
        <li className="NavLinks__item">
          <Link to={"projects"} className="NavLinks__link">
            projekte
          </Link>
        </li>
        <li className="NavLinks__item">
          <Link to={"contact"} className="NavLinks__link">
            kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
