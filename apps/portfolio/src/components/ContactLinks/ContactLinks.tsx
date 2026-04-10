import { CONTACT } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";

import { MoveRight } from "lucide-react";

export function ContactLinks() {
  return (
    <div className={clsx("ContactLinks")}>
      {CONTACT.map((item) => (
        <Link key={item.id} href={item.href} className="ContactLinks__item" target="_blank" rel="noopener noreferrer">
          <div>
            <div className="ContactLinks__item-label">{item.label}</div>
            <div className="ContactLinks__item-value">{item.value}</div>
          </div>
          <div className="ContactLinks__item-icon"><MoveRight /></div>
        </Link>
      ))}
    </div>
  );
}
