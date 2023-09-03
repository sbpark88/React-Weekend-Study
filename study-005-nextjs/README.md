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

You can start editing the page by modifying `pages/404.js`. The page auto-updates as you edit the file.

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

- 순수한 CSR 방식은 초기 로딩 속도가 느리고 SEO 에 좋지 못함.

### Next 는 이것을 어떻게 해결할까?

1. pages 디렉토리를 정적 컨텐츠로 미리 렌더링(SEO 해결).
2. Static pages 를 로딩 후 Dynamic contents 를 렌더링하는 방식으로 유연성을 키움(Hydration 적용).  
   1) Pre-rendering 된 Static pages 를 가져온다.  
   2) 라우터가 `hover` 되면 `JSON` 을 **Pre-fetching** 해서 페이지를 완성한다.

---

## Rendering 방식 정리

### CSR(Client-side Rendering)

- React 의 기본 rendering 방식.
- 모든 rendering 을 client 에서 처리한다.
- 기본적으로 초기 로딩 속도가 매우 느리기 때문에 이 문제를 해결하기 위해 dynamic import 를 적용한다.
- 빈 document 하나를 받고 끝난다. 모든 것은 javascript 가 그리므로 SEO 에 최악.

### SSR(Server-side Rendering)

- CSR 이 나오기 이전 Server-side frameworks 들이 사용하던 방식.
- 요청이 들어오면 그때그때 서버가 rendering.
- 초기 로딩 속도가 빠르고 CEO 에 강하지만 서버 부담이 큼.
- CSR 보다는 빠르지만 SSG 보다는 느림.

### SSG(Static Site Generation)

- 프로젝트 빌드시 Pre-rendering 을 해 Static pages 를 생성.
- CSR 방식은 물론 SSR 방식보다도 초기 로딩 속도가 빠름.
- Pre-rendering 이 필요하기 때문에 정적인 페이지만 제공함. 페이지 갱신이 어려움.

### ISR(Incremental Static Revalidation)

- SSG 방식을 사용하면서 주기적으로 새 pages 를 Pre-rendering 해 페이지 갱신에도 대응(Revalidation).
- 갱신 주기보다 빠르게 변경되는 페이지에는 적용 불가하기 때문에 CSR 처리를 병행해야 함.
