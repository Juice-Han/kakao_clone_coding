import React from "react";
import worldIcon from "../assets/icons/world.png";
import searchIcon from "../assets/icons/search.png";
import moonIcon from "../assets/icons/moon.png";

export default function Header(props) {
  return (
    <div className={`bg-white w-full h-24 px-14 fixed z-50 ${props.headerBorderB && 'border-b'} transition ${props.headerDisappear && '-translate-y-24'} duration-200`}>
      <div className="text-center">
        <div className="w-fit pt-[30px] float-left">
          <p className="text-3xl">kakao</p>
        </div>

        <div className="inline-block leading-[96px]">
          <a className="inline-block w-fit px-[30px] text-xl">소개</a>
          <a className="inline-block w-fit px-[30px] text-xl">이야기</a>
          <a className="inline-block w-fit px-[30px] text-xl">기술과 서비스</a>
          <a className="inline-block w-fit px-[30px] text-xl">약속과 책임</a>
          <a className="inline-block w-fit px-[30px] text-xl">뉴스</a>
          <a className="inline-block w-fit px-[30px] text-xl">투자정보</a>
        </div>
      </div>

      <div className="block w-fit float-right mt-[-60px]">
        <div className="inline-block">
          <img className="w-6 h-6" src={searchIcon}></img>
        </div>
        <div className="inline-block ml-8">
          <img className="w-6 h-6" src={worldIcon}></img>
        </div>
        <div className="inline-block ml-8">
          <img className="w-6 h-6" src={moonIcon}></img>
        </div>
      </div>
    </div>
  );
}
