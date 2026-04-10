import clsx from "clsx";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href={"/"} className={clsx("NavLogo")} aria-label="Manuel Hohenadl – Startseite">
      MH<span>.</span>
    </Link>
  );
}
