import React, { useEffect, useState } from "react";
import styles from "./Post.module.scss";
import axios from "axios";
import { stringIsEmpty } from "@/utils/StringUtils";

function Post(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (stringIsEmpty(title) || stringIsEmpty(content)) {
      alert("제목과 내용을 입력하세요요");
      return null;
    }

    const postDto = { title, content };
    axios
      .post("/api/post", postDto)
      .then((response) => {
        if (response?.data?.success) {
          alert("저장 성공");
          console.debug(response?.data?.response);
          setTitle("");
          setContent("");
        } else {
          alert("저장 실패");
          console.error(response?.data?.error);
        }
      })
      .catch((error) => {
        alert("저장 실패");
        console.error(error?.data?.error);
      });
  };

  return (
    <>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content">Content: </label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <button>Save</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Post;
