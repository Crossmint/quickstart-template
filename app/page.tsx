import { CrossmintProviderWrapper } from "@/components/providers/crossmint-provider";
import { CreateWallet } from "@/components/wallet/create-wallet";

export default function Home() {
  return (
    <CrossmintProviderWrapper>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <CreateWallet />
      </div>
    </CrossmintProviderWrapper>
  );
}
