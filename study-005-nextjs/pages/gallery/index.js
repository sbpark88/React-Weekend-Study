import React from "react";
import Head from "next/head";
import styles from "./Gallery.module.scss";

function Gallery(props) {
  return (
    <>
      <Head>
        <title>Gallery page</title>
      </Head>
      <main className={styles.main}>
        <h1>Gallery</h1>
      </main>
    </>
  );
}

export default Gallery;
