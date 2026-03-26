"use client";

import { useReveal } from "@/hooks/useReveal";
import clsx from "clsx";

export function StatsBar() {
  const ref = useReveal<HTMLDListElement>();
  return (
    <dl ref={ref} className={clsx("StatsBar reveal")}>
      <div className="StatsBar__stat">
        <dt className="StatsBar__stat-num">
          2<span>+</span>
        </dt>
        <dd className="StatsBar__stat-label">Jahre Erfahrung</dd>
      </div>
      <div className="StatsBar__stat">
        <dt className="StatsBar__stat-num">
          4<span>+</span>
        </dt>
        <dd className="StatsBar__stat-label">Projekte umgesetzt</dd>
      </div>
      <div className="StatsBar__stat">
        <dt className="StatsBar__stat-num">2</dt>
        <dd className="StatsBar__stat-label">Unternehmen</dd>
      </div>
      <div className="StatsBar__stat">
        <dt className="StatsBar__stat-num">∞</dt>
        <dd className="StatsBar__stat-label">Kaffee getrunken</dd>
      </div>
    </dl>
  );
}
