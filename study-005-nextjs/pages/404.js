import React from "react";
import styles from "./404.module.scss";
function NotFound(props) {
  return (
    <>
      <main className={styles.error}>
        <p>요청하는 URL의 페이지가 없습니다.</p>
      </main>
    </>
  );
}

export default NotFound;
