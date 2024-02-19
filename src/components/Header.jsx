import React from "react";
import worldIcon from "../assets/icons/world.png";
import searchIcon from "../assets/icons/search.png";
import moonIcon from "../assets/icons/moon.png";

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
      <div className=" w-36 flex justify-between">
        <div>
          <img className="w-6" src={searchIcon}></img>
        </div>
        <div>
          <img className="w-6" src={worldIcon}></img>
        </div>
        <div>
          <img className="w-6" src={moonIcon}></img>
        </div>
      </div>
    </div>
  );
}
