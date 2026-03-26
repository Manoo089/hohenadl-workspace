import clsx from "clsx";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={clsx("Footer")}>
      <span>© {year} Manuel Hohenadl.dev</span>
      <span>
        Built with <span className="Footer__heart">♥</span> & viel Kaffee
      </span>
    </footer>
  );
}
