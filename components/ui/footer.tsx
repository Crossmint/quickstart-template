"use client";

import { ExternalLink, Github, PanelsTopLeft } from "lucide-react";
import { SecuredByCrossmint } from "./crossmint/secured-by-crossmint";

export function Footer() {
  return (
    <footer className="flex flex-col gap-6 md:gap-10 p-6 w-full mt-auto items-center justify-center z-20">
      <div className="flex w-full items-center md:justify-center gap-4 md:gap-12 flex-col md:flex-row">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          View code
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PanelsTopLeft />
          See all quickstarts
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink />
          Go to Crossmint.com
        </a>
      </div>
      <SecuredByCrossmint />
    </footer>
  );
}
