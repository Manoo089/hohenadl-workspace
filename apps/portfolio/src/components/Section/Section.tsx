"use client";

import { useReveal } from "@/hooks/useReveal";
import clsx from "clsx";

type Variants = "default" | "contact";

interface Props {
  id: string;
  children: React.ReactNode;
  tag: string;
  title: string;
  sub: string;
  variant?: Variants;
  paddingTop?: boolean;
  paddingBottom?: boolean;
}

export function Section({
  id,
  children,
  tag,
  title,
  sub,
  variant = "default",
  paddingBottom = false,
  paddingTop = false,
}: Props) {
  const ref = useReveal();

  if (variant === "contact") {
    return (
      <section
        ref={ref}
        id={id}
        className={clsx(
          "Section reveal",
          variant && `Section--${variant}`,
          paddingTop ? "Section--paddingTop" : null,
          paddingBottom ? "Section--paddingBottom" : null,
        )}
      >
        <div className="Section__inner">
          <div className="Section__inner-text">
            <div className="Section__tag">{tag}</div>
            <h2 className="Section__title" dangerouslySetInnerHTML={{ __html: title }} />
            <p className="Section__sub">{sub}</p>
          </div>
          {children}
        </div>
      </section>
    );
  }
  return (
    <section
      ref={ref}
      id={id}
      className={clsx(
        "Section reveal",
        variant && `Section--${variant}`,
        paddingTop ? "Section--paddingTop" : null,
        paddingBottom ? "Section--paddingBottom" : null,
      )}
    >
      <div className="Section__tag">{tag}</div>
      <h2 className="Section__title">{title}</h2>
      <p className="Section__sub">{sub}</p>

      {children}
    </section>
  );
}
