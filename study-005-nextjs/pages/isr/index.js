import React from "react";

function isr({ now }) {
  return (
    <>
      <main>
        <p>ISR Test</p>
        <h2>{now}</h2>
      </main>
    </>
  );
}

export default isr;

export async function getStaticProps() {
  console.log("isr"); // browser 에 출력되지 않는다. node 에서 실행되므로 서버의 터미널에 출력된다.
  return {
    props: { now: performance.now() },
    revalidate: 5, // 5초마다 생성
  };
}
