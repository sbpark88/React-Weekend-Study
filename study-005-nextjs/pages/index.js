import styles from "@/pages/Home.module.scss";
import pic1 from "@/public/images/pic1.jpg";
import pic2 from "@/public/images/pic2.jpg";
import pic3 from "@/public/images/pic3.jpg";
import pic4 from "@/public/images/pic4.jpg";
import pic5 from "@/public/images/pic5.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/*
          Intersection Observers 를 사용하지 않아도 이미지가 보이기 전
          다음에 보여질 위치의 이미지를 미리 로드한다.
        */}
        <div>
          <Image src={pic1} alt="pic1" />
        </div>
        <div>
          <Image src={pic2} alt="pic2" />
        </div>
        <div>
          <Image src={pic3} alt="pic3" />
        </div>
        <div>
          <Image src={pic4} alt="pic4" />
        </div>
        <div>
          <Image src={pic5} alt="pic5" />
        </div>
      </main>
    </>
  );
}
