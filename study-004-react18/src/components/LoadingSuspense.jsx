import React, { Suspense } from "react";
import { useGetData } from "../hooks/useGetData";

function LoadingSuspense() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Posts />
      </Suspense>
    </>
  );
}

export default LoadingSuspense;

/*
 * Suspense
 * React 17 : CSR 방식에서만 작동.
 * React 18 : SSR 에서도 작동. CSR 과 SSR 의 장점을 합친 Universal Rendering 방식으로 진화.
 *            rehydration 기술을 사용.
 *
 * Suspense 를 사용하기 위한 조건
 * - Promise 상태 (pending, fulfilled, rejected) 를 추적할 수 있어야 한다.
 *
 * Suspense 를 사용해 특정 컴포넌트가 렌더링 완료되기 전 다른 컴포넌트의 렌더링을 막는다(컴포넌트 렌더링의 비동기 처리).
 * - i.e. 서버로부터 데이터 fetching 이 완료될때까지 자동으로 로딩바 출력.
 * */

function Posts() {
  const data = useGetData("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {data &&
        data.map((post) => (
          <div key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}
