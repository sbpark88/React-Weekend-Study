import React from "react";
import styles from "./Layout.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/header/Header";
import { Dongle } from "next/font/google";
import clsx from "clsx";

const dongle = Dongle({
  style: "normal",
  subsets: "latin",
  weight: ["400", "700"],
  preload: false, // 한글은 preload false 를 해야하는 것 같다.
});

function Layout({ children }) {
  const router = useRouter();
  // 'route', 'asPath', 'pathname' 이 모두 경로를 나타내지만,
  // 'asPath', 'pathname' 은 query string 을 포함한다.
  const pathString = router.route.split("/")[1];

  const title =
    pathString.charAt(0).toUpperCase() + pathString.slice(1) || "Home";
  return (
    <>
      <Head>
        <title>{title + " Page"}</title>
      </Head>
      <Header />
      <main className={clsx(styles.layout, dongle.className)}>{children}</main>
    </>
  );
}

export default Layout;
