import React from "react";

export default function Header() {
  return (
    <div className=" h-24 w-100 border-b flex items-center justify-between px-14">
      <div className=" w-44">
        <p className="text-3xl">kakao</p>
      </div>
      <div className=" flex gap-12 text-lg">
        <span>소개</span>
        <span>이야기</span>
        <span>기술과 서비스</span>
        <span>약속과 책임</span>
        <span>뉴스</span>
        <span>투자정보</span>
      </div>
      <div className="w-44 flex justify-evenly">
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
      </div>
    </div>
  );
}
