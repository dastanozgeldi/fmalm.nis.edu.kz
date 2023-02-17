import { Montserrat } from "@next/font/google";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

const montserrat = Montserrat({ subsets: ["latin"] });

type PageProps = PropsWithChildren & {
  title: string;
};

export const Page = ({ children, title }: PageProps) => {
  const t = useTranslations("Hero");
  const fullTitle = `${title} | ${t("title")}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dastan Özgeldi" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content={t("title")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@dastanozgeldi" />
        <meta
          name="twitter:image"
          content="https://fmalmnis.vercel.app/card.png"
        />
        <meta property="og:site_name" content={t("title")} />
        <meta name="og:title" content={t("title")} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://fmalmnis.vercel.app/card.png"
        />
        <title>{fullTitle}</title>
      </Head>
      {/* Put inside container */}
      <Nav />
      <main className={montserrat.className}>{children}</main>
      <Footer />
    </>
  );
};

Page.messages = ["Hero", Nav.messages, Footer.messages];
