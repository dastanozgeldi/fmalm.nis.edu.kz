import { useTranslations } from "next-intl";
import Head from "next/head";
import { type FC } from "react";

type PageProps = {
  children: React.ReactNode;
  title: string;
};

export const Page: FC<PageProps> = ({ children, title }) => {
  const t = useTranslations("Layout");
  const fullTitle = `${title} | ${t("school_name")}`;
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      {children}
    </>
  );
};
