import React from "react";
import styles from "./About.module.scss";

function About(props) {
  return (
    <>
      <main className={styles.main}>
        <h1>About</h1>
        <div>This is not "Dongle" font. </div>
        <p>This is "Dongle" font.</p>
      </main>
    </>
  );
}

export default About;
