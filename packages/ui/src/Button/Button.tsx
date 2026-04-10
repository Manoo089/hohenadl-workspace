"use client";

import clsx from "clsx";
import Link from "next/link";
import { useRef } from "react";

type Radius = "full" | "large" | "medium" | "small" | "none";
type Colors = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type Type = "button" | "reset" | "submit";
type Variants = "solid" | "outline" | "ghost" | "plain";

export interface Props {
  ariaLabel?: string;
  colors?: Colors;
  disabled?: boolean;
  href?: string;
  fullWidth?: boolean;
  arrow?: boolean;
  isLoading?: boolean;
  label: string;
  radius?: Radius;
  type?: Type;
  variants?: Variants;
  onClick?: () => void;
}

export default function Button({
  ariaLabel,
  colors = "default",
  disabled = false,
  href,
  arrow = false,
  isLoading = false,
  label,
  fullWidth = false,
  radius = "none",
  type = "button",
  variants = "solid",
  onClick,
}: Props) {
  const magnetRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = magnetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.35;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.35;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = () => {
    if (magnetRef.current) {
      magnetRef.current.style.transform = "translate(0px, 0px)";
    }
  };

  const classes = clsx(
    "Button",
    {
      "Button--fullWidth": fullWidth,
      "Button--loading": isLoading,
      "Button--disabled": disabled,
    },
    radius && `radius-${radius}`,
    colors && `colors-${colors}`,
    variants && `variants-${variants}`,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        ref={magnetRef as React.RefObject<HTMLAnchorElement>}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {label}
        {arrow && <span className="Button__arrow">→</span>}
      </Link>
    );
  }
  


  return (
    <button
      className={classes}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-busy={isLoading}
      aria-label={ariaLabel}
      ref={magnetRef as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading ? "Lade..." : label}
      {arrow && <span className="Button__icon">→</span>}
    </button>
  );
}
