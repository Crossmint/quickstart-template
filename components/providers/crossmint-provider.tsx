"use client";

import {
  CrossmintProvider,
  CrossmintAuthProvider,
} from "@crossmint/client-sdk-react-ui";

if (!process.env.NEXT_PUBLIC_CROSSMINT_AUTH_SMART_WALLET_API_KEY) {
  throw new Error("NEXT_PUBLIC_CROSSMINT_AUTH_SMART_WALLET_API_KEY is not set");
}

export function CrossmintProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CrossmintProvider
      apiKey={process.env.NEXT_PUBLIC_CROSSMINT_AUTH_SMART_WALLET_API_KEY || ""}
    >
      <CrossmintAuthProvider
        authModalTitle="Solana Smart Wallet Demo"
        embeddedWallets={{
          createOnLogin: "all-users",
          type: "evm-smart-wallet",
          showPasskeyHelpers: true,
          defaultChain: "polygon-amoy",
        }}
      >
        {children}
      </CrossmintAuthProvider>
    </CrossmintProvider>
  );
}
