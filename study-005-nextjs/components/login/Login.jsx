import React, { useCallback, useState } from "react";
import styles from "./Login.module.scss";
import { stringIsEmpty } from "@/utils/StringUtils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onButtonClick = useCallback(
    async (event) => {
      if (stringIsEmpty(email) || stringIsEmpty(password))
        return alert("이메일, 비밀번호를 모두 입력하세요.");

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
      } catch (error) {
        const [errorCode, errorMessage] = [error.code, error.message];
        console.log("errorCode", errorCode);
        console.log("errorMessage", errorMessage);
      }
    },
    [email, password],
  );

  return (
    <div className={styles.login}>
      <input
        type="email"
        placeholder="이메일주소"
        value={email}
        onChange={handleChange(setEmail)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={handleChange(setPassword)}
      />
      <button onClick={onButtonClick}>로그인</button>
    </div>
  );
}

export default Login;

const handleChange = (setter) => (event) => setter(event.target.value);
