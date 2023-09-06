import React, { useEffect } from "react";

function Post(props) {
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = () => {
    fetch("/api/hello", {
      method: "Post",
      body: "abc",
      // next 가 application/json 은 기본으로 설정해줌
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <main>
        <p>게시글 목록 페이지</p>
        <button onClick={handleClick}>서버 데이터 변경</button>
      </main>
    </>
  );
}

export default Post;
