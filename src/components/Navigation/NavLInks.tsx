import clsx from "clsx";
import { Link } from "react-scroll";

export default function NavLinks() {
  return (
    <nav className={clsx("NavLinks")}>
      <ul className="NavLinks__list">
        <li className="NavLinks__item">
          <Link to={"skills"} className="NavLinks__link">
            skills
          </Link>
        </li>
        <li className="NavLinks__link">
          <Link to={"projects"} className="NavLinks__link">
            projekte
          </Link>
        </li>
        <li className="NavLinks__link">
          <Link to={"contact"} className="NavLinks__link">
            kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
