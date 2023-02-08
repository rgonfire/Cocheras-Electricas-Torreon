import "../styles/index.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.REACT_APP_GTM_ID });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
