import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { GoogleAnalytics } from "@/components/google-analytics";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider timeZone="Asia/Almaty" messages={pageProps.messages}>
      <Component {...pageProps} />
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID!} />
    </NextIntlProvider>
  );
}
