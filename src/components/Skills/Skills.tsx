"use client";

import { SKILLS } from "@/lib/constants";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Cell } from "./Cell";

const COLUMNS = 4;

export function Skills() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const focusCell = (index: number) => {
    const cells = containerRef.current?.querySelectorAll<HTMLElement>(".Cell");
    cells?.[index]?.focus();
    setFocusedIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const last = SKILLS.length - 1;
    const moves: Record<string, number> = {
      ArrowRight: focusedIndex < last ? focusedIndex + 1 : focusedIndex,
      ArrowLeft: focusedIndex > 0 ? focusedIndex - 1 : focusedIndex,
      ArrowDown: focusedIndex + COLUMNS <= last ? focusedIndex + COLUMNS : focusedIndex,
      ArrowUp: focusedIndex - COLUMNS >= 0 ? focusedIndex - COLUMNS : focusedIndex,
    };
    if (e.key in moves) {
      e.preventDefault();
      focusCell(moves[e.key]);
    }
  };

  return (
    <div
      ref={containerRef}
      className={clsx("Skills")}
      role="list"
      aria-label="Tech Stack"
      onKeyDown={handleKeyDown}
    >
      {SKILLS.map((skill, i) => (
        <Cell
          key={skill.id}
          icon={skill.icon}
          name={skill.name}
          tags={skill.tags}
          tabIndex={i === focusedIndex ? 0 : -1}
          onFocus={() => setFocusedIndex(i)}
        />
      ))}
    </div>
  );
}
