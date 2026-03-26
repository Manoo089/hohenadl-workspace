"use client";

import clsx from "clsx";
import { Orb } from "./Orb";
import Button from "../Button/Button";
import { useReveal } from "@/hooks/useReveal";
import { ReactNode } from "react";

export function Hero({ children }: { children?: ReactNode }) {
  const ref = useReveal();

  return (
    <section className={clsx("Hero")}>
      <Orb color="rgba(0, 153, 255, 0.1)" size="400px" bottom="0" left="100px" duration="6s" />
      <Orb color="rgba(62, 240, 164, 0.15)" size="600px" top="0%" right="0" duration="8s" reverse />

      <div ref={ref} className="Hero__content reveal">
        <div className="Hero__content-tag"></div>
        <div>
          <h1 className="Hero__content-name">
            Manuel <br />
            <span>Hohenadl</span>
          </h1>
          <p className="Hero__content-sub">
            Web-Entwickler & IT-Dienstleister aus Landshut. <br />Spezialisiert auf moderne, barrierefreie Web-Applikationen mit Next.js,
            TypeScript und WordPress.
          </p>
          <div className="Hero__content-cta">
            <Button href="/#projects" ariaLabel="Projekte" label="Projekte" variants="solid" colors="primary" radius="small" arrow />
            <Button
              href="/#contact"
              ariaLabel="Kontakt aufnehmen"
              label="Kontakt aufnehmen"
              variants="outline"
              colors="primary"
              radius="small"
            />
          </div>
        </div>
      </div>
      <div className="Hero__code">
        {children}
      </div>
    </section>
  );
}
