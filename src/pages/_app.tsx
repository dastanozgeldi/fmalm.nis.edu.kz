import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider timeZone="Asia/Almaty" messages={pageProps.messages}>
      <Component {...pageProps} />
      <Analytics />
    </NextIntlProvider>
  );
}
