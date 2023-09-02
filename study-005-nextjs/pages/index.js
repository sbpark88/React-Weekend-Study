import Head from "next/head";
import styles from "@/pages/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <h1>Hello</h1>
      </main>
    </>
  );
}
