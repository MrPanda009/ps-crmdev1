import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JanSamadhan Documentation | Citizen Resolution Platform",
  description:
    "Comprehensive technical documentation for JanSamadhan, including architecture, lifecycle guarantees, API surface, operations, and roadmap.",
  alternates: {
    canonical: "https://jansamadhan.perkkk.dev/documentation",
  },
  openGraph: {
    title: "JanSamadhan Documentation",
    description:
      "Detailed JanSamadhan platform documentation for judges, engineers, and civic stakeholders.",
    url: "https://jansamadhan.perkkk.dev/documentation",
    siteName: "JanSamadhan",
    locale: "en_IN",
    type: "website",
  },
};

function loadDocumentationSource(): { styleMarkup: string; bodyMarkup: string } {
  const sourcePath = path.join(process.cwd(), "public", "documentation-source.html");
  const source = fs.readFileSync(sourcePath, "utf8");
  const styleMarkup = source.match(/<style[^>]*>([\s\S]*?)<\/style>/i)?.[1] ?? "";

  const bodyMatch = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch?.[1]) {
    return { styleMarkup, bodyMarkup: source };
  }

  // Keep the source body as-is so all print and TOC behaviors from the authored HTML are preserved.
  return { styleMarkup, bodyMarkup: bodyMatch[1] };
}

export default function DocumentationPage() {
  const { styleMarkup, bodyMarkup } = loadDocumentationSource();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: styleMarkup }} />
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: bodyMarkup }}
      />
    </>
  );
}
