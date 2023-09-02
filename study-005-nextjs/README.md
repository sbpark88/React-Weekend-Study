This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

---

## Next Settings

✔ Would you like to use TypeScript? … No
✔ Would you like to use ESLint? … Yes  
✔ Would you like to use Tailwind CSS? … No  
✔ Would you like to use `src/` directory? … No  
✔ Would you like to use App Router? (recommended) … No  
✔ Would you like to customize the default import alias? … No

---

## Pre Rendering (Next 에서의 데이터 렌더링 흐름)

순수한 CSR 방식은 초기 로딩 속도가 느리고 SEO 에 좋지 못함.  
Next 는 pages 디렉토리를 정적 컨텐츠로 미리 렌더링(SEO 해결).  
Static page 를 로딩 후 Dynamic contents 를 렌더링하는 방식으로 유연성을 키움(Hydration).  
Next는 페이지별로 미리 pre-render된 파일을 가져오고 서브페이지에 해당 하는 파일들을 json형태로만 가지고 있다가 해당 페이지를 호출하는 라우터명의 메뉴에 호버되면 미리 pre-fetching처리해서 페이지별 데이터 로드 속도를 비약적으로 빠르게 처리함과 동시에 로드시켜야 되는 파일의 갯수와 용량을 줄임
 	
 	pre-fetching
 	Next 전용의 Link컴포넌트로 페이지 이동시 해당 메뉴에 호버시 라우터명을 인지해서 출력해야 되는 데이터를 미리 로드처리
 	---Next 전용의 Pre Rendering 방식
 	SSG (Static Site Generation)
 	-Next 프로젝트 빌드시 pre-render
 	-장점 : 빌드시에 페이지가 완성되기 때문에 초기 로딩속도가 빠름
 	-단점 : 요청전에 미리 프리랜더되기 때문에 정적인 페이지만 적용 가능
 	SSR (Server Side Rendering)
 	-서버에서 요청이 들어오면 서버단에서 data-fetching후 pre-render
 	-장점 : CSR방식에 비해서는 초기 로딩속도가 빠르고 요청시마다 새로운 데이터를 백단에서 갱신가능
 	-단점 : 서버 호출시에 pre-render페이지를 만들기 때문에 SSG방식보다는 느림
 	ISR (Incremental Static Revalidation)
 	- Next 프로젝트 빌드시 pre-render되는 점은 SSG방식과 동일하나 일정주기로 서버단에서 새로운 데이터를 fetching해서 갱신가능
 	- 장점 : SSG와 마찬가지로 초기 로딩속도가 빠름
 	- 장점 : 일정 시간마다 새롭게 데이터를 정기적으로 revalidation처리 가능
 	- 단점 : 동적 데이터가 빈번하게 바뀌는 페이지에는 적용 불가 (CSR처리)
