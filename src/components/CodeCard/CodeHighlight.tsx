import { codeToHtml } from "shiki";

interface Props {
  code: string;
  lang?: string;
  theme?: string;
}

export async function CodeHighlight({ code, lang = "typescript", theme = "tokyo-night" }: Props) {
  const html = await codeToHtml(code, { lang, theme });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
