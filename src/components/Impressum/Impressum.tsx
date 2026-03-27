import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ImpressumComponent() {
  return (
    <div className="Impressum">
      <aside className="Impressum__back">
        <Link href="/" className="Impressum__link" aria-label="Zurück zur Startseite">
          <ArrowLeft />
        </Link>
      </aside>
      <h1 className="Impressum__heading">Impressum</h1>

      <p className="Impressum__paragraph">
        Manuel Hohenadl <br />
        Webentwickler <br />
        Pfeffenhausener Straße 33
        <br />
        84032 Altdorf
      </p>

      <h2 className="Impressum__heading">Kontakt</h2>
      <p className="Impressum__paragraph">
        Telefon: 08704 20 44 99 1<br />
        E-Mail: manuel@hohenadl.dev
      </p>

      <h2 className="Impressum__heading">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
      <p className="Impressum__paragraph">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        <br /> Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle:
        <br />
        <Link
          href="https://www.e-recht24.de"
          className="Impressum__link"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          e-recht24.de
        </Link>
      </p>
    </div>
  );
}
