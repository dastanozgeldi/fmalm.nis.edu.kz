import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../layouts/Layout";
import { NextIntlProvider } from "next-intl";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  );
};

export default App;
