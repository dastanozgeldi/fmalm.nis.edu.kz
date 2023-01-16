import { Inter } from "@next/font/google";
import Head from "next/head";
import type { FC, PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

const inter = Inter({ subsets: ["latin"] });

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NIS PhM Almaty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
