import clsx from "clsx";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

export function HamburgerIcon({ isOpen, onToggle }: Props) {
  return (
    <button
      className={clsx("HamburgerIcon", { "HamburgerIcon--open": isOpen })}
      onClick={onToggle}
      aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
      aria-expanded={isOpen}
    >
      <span className="HamburgerIcon__bar" />
      <span className="HamburgerIcon__bar" />
    </button>
  );
}
