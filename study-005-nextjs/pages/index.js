import styles from "@/pages/Home.module.scss";
import pic1 from "@/public/images/pic1.jpg";
import pic2 from "@/public/images/pic2.jpg";
import pic3 from "@/public/images/pic3.jpg";
import pic4 from "@/public/images/pic4.jpg";
import pic5 from "@/public/images/pic5.jpg";
import Image from "next/image";
import { FadeLoader } from "react-spinners";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/*
          Intersection Observers 를 사용하지 않아도 이미지가 보이기 전
          다음에 보여질 위치의 이미지를 미리 로드한다.
        */}
        <div>
          <Image
            src={pic1}
            alt="pic1"
            quality={30} // 1 ~ 100, default 75
            priority={true} // lazy-loading 을 적용하지 않는다.
          />
        </div>
        <div>
          {/* placeholder 를 주지 않으면 기본값으로 이미지가 로딩됨에 계단 처럼 그려진다. */}
          <Image src={pic2} alt="pic2" quality={30} />
        </div>
        <div>
          {/* 우리가 생각하는 'blur' 와는 좀 다르다. 거의 단세포 수준의 blur 처리 */}
          <Image src={pic3} alt="pic3" quality={30} placeholder="blur" />
        </div>
        <div>
          {/* placeholder 'empty' 는 없다가 로딩 완료 후 한 번에 쨘 하고 나타난다. */}
          <Image src={pic4} alt="pic4" quality={30} placeholder="empty" />
        </div>
        <div>
          <Image src={pic5} alt="pic5" quality={30} />
        </div>
        {/*
          이미지는 반드시 width, height 를 정해줘야한다.
          로컬 이미지는 next.js 가 이미지 크기를 알 수 있으니 추론이 가능하다.
          그런데 만약 외부 이미지이고 이 width, height 를 모를 경우(unknown), `fill` 을 옵션으로 준다.
        */}
        <div>
          <Image
            src="https://images.unsplash.com/photo-1692545052205-a3b9ac3f50d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3868&q=80"
            alt="pic6"
            quality={30}
            width="500"
            height="300"
          />
        </div>
        <div>
          <Image src={externalImages.pic7} alt="pic7" fill quality={30} />
        </div>
        <div>
          <Image src={externalImages.pic8} alt="pic8" fill quality={30} />
        </div>
        <LoadingImage srcUrl={externalImages.pic9} alt="pic9" />
        <LoadingImage srcUrl={externalImages.pic10} alt="pic10" />
      </main>
    </>
  );
}

const externalImages = {
  pic6: "https://images.unsplash.com/photo-1692545052205-a3b9ac3f50d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3868&q=80",
  pic7: "https://images.unsplash.com/photo-1568146542454-5b53aef7554f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
  pic8: "https://images.unsplash.com/photo-1693421385607-8f034601ad6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3732&q=80",
  pic9: "https://images.unsplash.com/photo-1693253024090-1fc1e1821a5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3731&q=80",
  pic10:
    "https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
};

function LoadingImage({ srcUrl, alt }) {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <FadeLoader
        color="#36d7b7"
        loading={loading}
        cssOverride={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: 10,
        }}
      />
      <Image
        src={srcUrl}
        alt={alt}
        fill
        quality={30}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
