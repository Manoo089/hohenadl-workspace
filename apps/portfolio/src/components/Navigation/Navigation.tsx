"use client";

import { useState, useEffect } from "react";

import clsx from "clsx";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLInks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { HamburgerIcon } from "./HamburgerIcon";
import { NavigationMobile } from "./NavigationMobile";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleOnScroll = () => {
    setHamburgerIsOpen(false);
  };

  const handleHamburgerOnClick = () => {
    setHamburgerIsOpen(!hamburgerIsOpen);
  };

  const handleOnClickLink = () => {
    setHamburgerIsOpen(false);
  };

  const handleOnClickOutside = () => {
    setHamburgerIsOpen(false);
  };

  return (
    <>
      <div className={clsx("Navigation", { "Navigation--scrolled": scrolled })}>
        <NavLogo />
        {isMobile ? <HamburgerIcon onToggle={handleHamburgerOnClick} isOpen={hamburgerIsOpen} /> : <NavLinks />}
      </div>

      {hamburgerIsOpen && (
        <NavigationMobile onClick={handleOnClickLink} onScroll={handleOnScroll} onClickOutside={handleOnClickOutside} />
      )}
    </>
  );
}
