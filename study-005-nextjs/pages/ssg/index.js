import React from "react";

function Ssg({ now }) {
  return (
    <>
      <main>
        <p>SSG Test</p>
        <h2>{now}</h2>
      </main>
    </>
  );
}

export default Ssg;

export async function getStaticProps() {
  console.log("ssg"); // browser 에 출력되지 않는다. node 에서 실행되므로 서버의 터미널에 출력된다.
  return {
    props: { now: performance.now() },
  };
}
