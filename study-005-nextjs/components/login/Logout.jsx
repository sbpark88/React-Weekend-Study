import React, { useCallback } from "react";
import styles from "./Logout.module.scss";
import { useGlobalData } from "@/hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

function Logout(props) {
  const { loginInfo } = useGlobalData();
  const onButtonClick = useCallback(async (event) => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <span>
        <strong>{loginInfo?.displayName}</strong>님 반갑습니다.
      </span>
      <button onClick={onButtonClick}>로그아웃</button>
    </div>
  );
}

export default Logout;
