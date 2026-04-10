"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  renderedLines: string[];
}

export function CodeCardTypewriter({ renderedLines }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= renderedLines.length) return;
    const timeout = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 80);
    return () => clearTimeout(timeout);
  }, [visibleCount, renderedLines.length]);

  return (
    <div className="CodeCard__lines">
      {renderedLines.map((html, i) => (
        <div
          key={i}
          className={clsx("CodeCard__line", {
            "CodeCard__line--visible": i < visibleCount,
          })}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ))}
    </div>
  );
}
