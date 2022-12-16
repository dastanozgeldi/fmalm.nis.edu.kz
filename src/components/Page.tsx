import Head from "next/head";
import { type FC } from "react";

type PageProps = {
  children: React.ReactNode;
  title: string;
};

const Page: FC<PageProps> = ({ children, title }) => {
  const t = `${title} | NIS PhM Almaty`;
  return (
    <>
      <Head>
        <title>{t}</title>
      </Head>
      {children}
    </>
  );
};

export default Page;
