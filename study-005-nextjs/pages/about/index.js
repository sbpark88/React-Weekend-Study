import React from "react";
import styles from "./About.module.scss";
import { IconContext } from "react-icons";
import { FaAppStore } from "react-icons/fa6";
import { FcApproval, FcCamera } from "react-icons/fc";
import { HiChat } from "react-icons/hi";

function About(props) {
  return (
    <>
      <main className={styles.main}>
        <h1>About</h1>
        <div>This is not "Dongle" font. </div>
        <p>This is "Dongle" font.</p>
        <br />
      </main>
      <section>
        <FaAppStore size="100" color="blue" />
        <IconContext.Provider
          value={{
            size: 50,
            className: "my-icons",
          }}
        >
          <FcApproval />
          <FcCamera />
          <HiChat />
        </IconContext.Provider>
      </section>
    </>
  );
}

export default About;
