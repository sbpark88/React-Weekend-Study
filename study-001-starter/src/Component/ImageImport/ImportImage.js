import React from "react";
import pic1 from "../../img/pic1.jpg";
import pic2 from "../../img/pic2.jpg";
import pic3 from "../../img/pic3.jpg";

function ImportImage(props) {
  return (
    <>
      <div>
        <h1>public 이미지</h1>
        <img src={process.env.PUBLIC_URL + "/img/pic1.jpg"} alt="pic1" />
        <img src={process.env.PUBLIC_URL + "/img/pic2.jpg"} alt="pic2" />
        <img src="/img/pic3.jpg" alt="pic3" />{" "}
        {/* PUBLIC 경로가 기본 경로가 아닐 경우 에러 발생 */}
      </div>
      <hr />
      <div>
        <h1>src 이미지(컴파일 시 에러 검출 가능)</h1>
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2" />
        <img src={pic3} alt="pic3" />
      </div>
    </>
  );
}

export default ImportImage;
