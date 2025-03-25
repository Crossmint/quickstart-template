"use client";

import { ExternalLink, Mail, Moon, PanelsTopLeft, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { SecuredByCrossmint } from "./crossmint/secured-by-crossmint";

export function Footer() {
  const { setTheme, theme } = useTheme();

  return (
    <footer className="row-start-3 flex-col md:flex-row gap-10 py-10 w-full mt-auto border-t flex items-center justify-center bg-accents-1 z-20">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PanelsTopLeft />
        Quickstarts
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink />
        Go to Crossmint.com
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail />
        Contact sales
      </a>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
          {theme === "dark" ? "Light" : "Dark"}
        </Button>
      </div>

      <SecuredByCrossmint />
    </footer>
  );
}
