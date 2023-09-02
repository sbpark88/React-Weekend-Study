import React from "react";

function Ssr({ now }) {
  return (
    <>
      <main>
        <p>SSR Test</p>
        <h2>{now}</h2>
      </main>
    </>
  );
}

export default Ssr;

export async function getServerSideProps() {
  console.log("ssr"); // browser 에 출력되지 않는다. node 에서 실행되므로 서버의 터미널에 출력된다.
  return {
    props: { now: performance.now() },
  };
}
