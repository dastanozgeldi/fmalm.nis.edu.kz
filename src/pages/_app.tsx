import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { IntlErrorCode, NextIntlProvider } from "next-intl";

function onError(error: any) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Missing translations are expected and should only log an error
    console.error(error);
  } else {
    // Other errors indicate a bug in the app and should be reported
    return;
  }
}

function getMessageFallback({ namespace, key, error }: any) {
  const path = [namespace, key].filter((part) => part != null).join(".");

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  } else {
    return `Dear developer, please fix this message: ${path}`;
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextIntlProvider
      timeZone="Asia/Almaty"
      messages={pageProps.messages}
      onError={onError}
      getMessageFallback={getMessageFallback}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  );
};

export default App;
