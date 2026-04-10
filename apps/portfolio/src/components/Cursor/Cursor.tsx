"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (cursorRef.current && ringRef.current) {
        // Cursor folgt sofort
        cursorRef.current.style.left = mouse.current.x + "px";
        cursorRef.current.style.top = mouse.current.y + "px";

        // Ring folgt mit Lag
        ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
        ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      cursorRef.current?.classList.add("Cursor--hover");
      ringRef.current?.classList.add("CursorRing--hover");
    };

    const handleLeave = () => {
      cursorRef.current?.classList.remove("Cursor--hover");
      ringRef.current?.classList.remove("CursorRing--hover");
    };

    const interactives = document.querySelectorAll("a, button, .SkillCell, .ProjectCard");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", handleMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="Cursor" />
      <div ref={ringRef} className="CursorRing" />
    </>
  );
}
