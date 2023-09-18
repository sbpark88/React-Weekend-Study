import React, { useCallback, useState } from "react";
import styles from "./SignUp.module.scss";
import { stringIsEmpty } from "@/utils/StringUtils";
import {getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebase from "@/firebase";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onFormSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (
        stringIsEmpty(email) ||
        stringIsEmpty(password) ||
        stringIsEmpty(name)
      )
        return alert("이메일, 비밀번호, 이름을 모두 입력하세요.");

      try {
        const auth = getAuth(firebase);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        const user = userCredential.user;
        await updateProfile(user, { displayName: name });
        setEmail("");
        setPassword("");
        setName("");
      } catch (error) {
        const [errorCode, errorMessage] = [error.code, error.message];
        alert(`사용자 등록을 실패하였습니다.`);
        console.error("code", errorCode, "message", errorMessage);
      }

    },
    [email, password, name],
  );

  return (
    <>
      <main className={styles.main}>
        <h2>Join Member</h2>

        <form onSubmit={onFormSubmit}>
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
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={handleChange(setName)}
          />

          <button type="submit">회원가입</button>
        </form>
      </main>
    </>
  );
}

export default SignUp;

const handleChange = (setter) => (event) => setter(event.target.value);
