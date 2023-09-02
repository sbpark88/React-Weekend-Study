import React from "react";
import styles from "./Layout.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";

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
      <main className={styles.layout}>{children}</main>
    </>
  );
}

export default Layout;
