import Image from "next/image";
import { Button } from "./button";

export function Header() {
  return (
    <header>
      <div className="flex justify-center items-center p-2 bg-card text-sm">
        The quickstart of this demo is{" "}
        <a
          href="https://github.com/crossmint/solana-smart-wallets-demo"
          className="underline text-accent px-1.5"
        >
          available on GitHub
        </a>
      </div>
      <div className="border-b border-gray-200 py-5 relative z-20 bg-background">
        <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 px-8 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="text-green-500">
              <Image
                src="/crossmint.png"
                alt="Crossmint logo"
                width={32}
                height={32}
              />
            </div>
            <div>
              <h1 className="text-xl font-medium">Solana Smart Wallets Demo</h1>
              <p className="text-sm text-gray-500">
                Basic description of the demo
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hover:bg-transparent hover:text-inherit"
            >
              Read documentation
            </Button>
            <Button className="bg-accent hover:bg-accent/90">
              Developer console
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
