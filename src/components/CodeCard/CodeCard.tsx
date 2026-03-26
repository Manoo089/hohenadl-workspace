import clsx from "clsx";
import { codeToHtml } from "shiki";
import { CodeCardTypewriter } from "./CodeCardTypewriter";

const CODE_LINES = [
  `const dev = {`,
  `  name: "Manuel Hohenadl",`,
  `  location: "Landshut, DE",`,
  `  stack: [`,
  `    "Next.js", "TypeScript",`,
  `    "WordPress", "Linux"`,
  `  ],`,
  `  available: true,`,
  `  build: () => {`,
  `    // Great things ahead`,
  `    return "🚀";`,
  `  }`,
  `};`,
];

export async function CodeCard() {
  const renderedLines = await Promise.all(
    CODE_LINES.map((line) =>
      codeToHtml(line, {
        lang: "typescript",
        theme: "tokyo-night",
      }).then((html) => {
        // Shiki wrапpt alles in <pre><code> — wir wollen nur den Inhalt
        const match = html.match(/<code[^>]*>([\s\S]*?)<\/code>/);
        return match ? match[1] : html;
      }),
    ),
  );

  return (
    <div className={clsx("CodeCard")}>
      <div className="CodeCard__bar">
        <div className="CodeCard__bar-dots">
          <div className="CodeCard__bar-dot dot-r"></div>
          <div className="CodeCard__bar-dot dot-y"></div>
          <div className="CodeCard__bar-dot dot-g"></div>
        </div>
        <span className="CodeCard__bar-file">portfolio.tsx</span>
      </div>
      <div className="CodeCard__body">
        <CodeCardTypewriter renderedLines={renderedLines} />
      </div>
    </div>
  );
}
