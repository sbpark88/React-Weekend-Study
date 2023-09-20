import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import { useGlobalData } from "@/hooks/useGlobalContext";
import Login from "@/components/login/Login";
import Logout from "@/components/login/Logout";
import { stringIsEmpty } from "@/utils/StringUtils";

function Header(props) {
  const firstLoaded = useRef(true);
  const { loginInfo } = useGlobalData();
  const url = useRouter().route;

  useEffect(() => {
    firstLoaded.current = false;
  }, [loginInfo]);

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Hogwarts</Link>
      </h1>

      <ul className={styles.gnb}>
        <li>
          <Link href="/about" className={url === "/about" ? styles.on : ""}>
            About
          </Link>
        </li>
        <li>
          <Link href="/gallery" className={url === "/gallery" ? styles.on : ""}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/csr" className={url === "/csr" ? styles.on : ""}>
            CSR
          </Link>
        </li>
        <li>
          <Link href="/ssg" className={url === "/ssg" ? styles.on : ""}>
            SSG
          </Link>
        </li>
        <li>
          <Link href="/ssr" className={url === "/ssr" ? styles.on : ""}>
            SSR
          </Link>
        </li>
        <li>
          <Link href="/isr" className={url === "/isr" ? styles.on : ""}>
            ISR
          </Link>
        </li>
        <li>
          <Link href="/post" className={url === "/post" ? styles.on : ""}>
            POST
          </Link>
        </li>
        <li>
          <Link href="/404" className={url === "/404" ? styles.on : ""}>
            404
          </Link>
        </li>
        <li>
          <Link href="/sign-up" className={url === "/sign-up" ? styles.on : ""}>
            회원가입
          </Link>
        </li>
      </ul>

      {!firstLoaded.current && stringIsEmpty(loginInfo?.uid) ? <Login /> : null}
      {!firstLoaded.current && !stringIsEmpty(loginInfo?.uid) ? (
        <Logout />
      ) : null}
    </header>
  );
}

export default Header;
