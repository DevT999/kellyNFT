import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/main.css";
import "../styles/layout.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WalletBalanceProvider } from "../hooks/useWalletBalance";

require("@solana/wallet-adapter-react-ui/styles.css");
import 'bootstrap-icons/font/bootstrap-icons.json';
import "../styles/mystyle.css"
import { Provider } from 'react-redux'
import Store from './redux/store'

const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <WalletConnectionProvider>
        <WalletBalanceProvider>
          <Component {...pageProps} />
        </WalletBalanceProvider>
      </WalletConnectionProvider>
    </Provider>
  );
}
export default MyApp;
