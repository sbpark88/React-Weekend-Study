import React, { useEffect } from "react";
import axios from "axios";

function Post(props) {
  useEffect(() => {
    axios.get("/api/post").then((data) => console.log(data));
  }, []);

  return (
    <>
      <main>
        <p>게시글 목록 페이지</p>
        <button>서버 데이터 변경</button>
      </main>
    </>
  );
}

export default Post;
