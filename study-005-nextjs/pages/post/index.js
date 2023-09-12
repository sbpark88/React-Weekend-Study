import React, { useCallback, useEffect, useState } from "react";
import styles from "./Post.module.scss";
import axios from "axios";
import { stringIsEmpty } from "@/utils/StringUtils";

const POST_URI = "/api/post";

function Post(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const getPost = useCallback(async () => {
    try {
      const response = await axios.get(POST_URI);
      if (response?.data?.success) {
        setPosts(response?.data?.response);
      } else {
        alert("서버로부터 데이터를 가져오지 못했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const handleCreatePost = async (event) => {
    event.preventDefault();
    if (stringIsEmpty(title) || stringIsEmpty(content)) {
      alert("제목과 내용을 입력하세요요");
      return null;
    }

    const postDto = { title, content };
    axios
      .post(POST_URI, postDto)
      .then((response) => {
        if (response?.data?.success) {
          alert("저장 성공");
          console.debug(response?.data?.response);
          setTitle("");
          setContent("");
          getPost();
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
        <form onSubmit={handleCreatePost}>
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
        <section>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Post;

function PostCard({ post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
}
