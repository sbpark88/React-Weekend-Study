import React from "react";
import Head from "next/head";
import styles from "./About.module.scss";

function About(props) {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <main className={styles.main}>
        <h1>About</h1>
      </main>
    </>
  );
}

export default About;
