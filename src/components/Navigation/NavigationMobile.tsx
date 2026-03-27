"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { Link } from "react-scroll";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Props {
  onClick: () => void;
  onScroll: () => void;
  onClickOutside: () => void;
}

export function NavigationMobile({ onClick, onScroll, onClickOutside }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClickOutside);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <nav ref={ref} className={clsx("NavigationMobile")}>
      <ul className="NavigationMobile__list">
        <li>
          <Link to="skills" className="NavigationMobile__link" onClick={onClick}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="projects" className="NavigationMobile__link" onClick={onClick}>
            Projekte
          </Link>
        </li>

        <li>
          <Link to="contact" className="NavigationMobile__link" onClick={onClick}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
