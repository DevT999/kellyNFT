import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/main.css";
import "../styles/layout.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WalletBalanceProvider } from "../hooks/useWalletBalance";

require("@solana/wallet-adapter-react-ui/styles.css");

import "../styles/mystyle.css"

const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <WalletBalanceProvider>
        <Component {...pageProps} />
      </WalletBalanceProvider>
    </WalletConnectionProvider>
  );
}
export default MyApp;
