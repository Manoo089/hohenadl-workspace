import clsx from "clsx";
import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className={clsx("NavLinks")}>
      <ul className="NavLinks__list">
        <li className="NavLinks__item">
          <Link href={"/#skills"} className="NavLinks__link">
            skills
          </Link>
        </li>
        <li className="NavLinks__link">
          <Link href={"/#projects"} className="NavLinks__link">
            projekte
          </Link>
        </li>
        <li className="NavLinks__link">
          <Link href={"/#contact"} className="NavLinks__link">
            kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
