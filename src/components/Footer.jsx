import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[700px] px-14 pt-24 pb-12 border-t-[1.5px] border-black">
      <section className="flex relative">
        <div className="flex-1">
          <div className="pt-14 relative">
            <p className="text-3xl font-bold absolute top-0 left-0">
              오늘의 카카오
            </p>
            <p>카카오톡 공식 다운로드</p>
            <p className="mt-3">#카카오톡백업</p>
            <p className="mt-3">#카카오 이모티콘 샵</p>
            <p className="mt-3">#추모프로필</p>
            <p className="mt-3">#인증서발급</p>
            <p className="mt-3">#지속가능성</p>
            <p className="mt-3">#개발자도구</p>
          </div>
        </div>

        <div className="flex-1">
          <div className="pt-24 relative ml-1">
            <p className="text-lg font-bold absolute top-14">
              공동체 기업의 서비스
            </p>
            <p className="mt-3 text-gray-500">커뮤니케이션</p>
            <p className="mt-3 text-gray-500">일상편의</p>
            <p className="mt-3 text-gray-500">비즈니스</p>
            <p className="mt-3 text-gray-500">쇼핑</p>
            <p className="mt-3 text-gray-500">엔터테인먼트</p>
            <p className="mt-3 text-gray-500">임팩트</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="pt-24 relative ml-1">
            <p className="text-lg font-bold absolute top-14">카카오 공동체</p>
            <p className="mt-3 text-gray-500">카카오</p>
            <p className="mt-3 text-gray-500">카카오페이</p>
            <p className="mt-3 text-gray-500">카카오뱅크</p>
            <p className="mt-3 text-gray-500">카카오모빌리티</p>
            <p className="mt-3 text-gray-500">카카오스타일</p>
            <p className="mt-3 text-gray-500">카카오엔터테인먼트</p>
            <p className="mt-3 text-gray-500">카카오게임즈</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="pt-24 relative ml-1">
            <p className="mt-3 text-gray-500">카카오픽코마</p>
            <p className="mt-3 text-gray-500">카카오브레인</p>
            <p className="mt-3 text-gray-500">카카오엔터프라이즈</p>
            <p className="mt-3 text-gray-500">카카오헬스케어</p>
            <p className="mt-3 text-gray-500">카카오벤쳐스</p>
            <p className="mt-3 text-gray-500">카카오인베스트먼트</p>
            <p className="mt-3 text-gray-500">링키지랩</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="pt-24 relative ml-1">
            <p className="text-lg font-bold absolute top-14">IR</p>
            <p className="mt-3 text-gray-500">기업지배구조</p>
            <p className="mt-3 text-gray-500">추가정보</p>
            <p className="mt-3 text-gray-500">재무정보</p>
            <p className="mt-3 text-gray-500">IR행사</p>
            <p className="mt-3 text-gray-500">공시정보</p>
            <p className="mt-3 text-gray-500">공고</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="pt-24 relative ml-1">
            <p className="text-lg font-bold absolute top-14">계정 및 지원</p>
            <p className="mt-3 text-gray-500">카카오계정</p>
            <p className="mt-3 text-gray-500">카카오 프라이버시</p>
            <p className="mt-3 text-gray-500">카카오 고객센터</p>
            <p className="mt-3 text-gray-500">다음 고객센터</p>
            <p className="mt-3 text-gray-500">커머스 고객센터</p>
            <p className="mt-3 text-gray-500">인재영입</p>
          </div>
        </div>
      </section>
      <section className="w-full h-8 mt-32">
        <div className="flex float-left">
          <div>
            <p className="text-sm  text-gray-400">이용약관</p>
          </div>
          <div className="ml-9">
            <p className="text-sm font-semibold">위치정보 이용약관</p>
          </div>
          <div className="ml-9">
            <p className="text-sm font-semibold">개인정보처리방침</p>
          </div>
          <div className="ml-9">
            <p className="text-sm text-gray-400">운영정책</p>
          </div>
          <div className="ml-9">
            <p className="text-sm text-gray-400">청소년보호정책</p>
          </div>
          <div className="ml-9">
            <p className="text-sm text-gray-400">브랜드보호정책</p>
          </div>
          <div className="ml-9">
            <p className="text-sm text-gray-400">권리침해신고안내</p>
          </div>
          <div className="ml-9">
            <p className="text-sm text-gray-400">공지사항</p>
          </div>
          <div className="ml-9">
            <p className="text-sm text-gray-400">사이버윤리실</p>
          </div>
          <div className="ml-9">
            <p className="text-sm text-gray-400">Contact Us</p>
          </div>
        </div>
        <div className="w-[280px] h-11 bg-gray-200 float-right rounded-full flex justify-between p-[10px_20px_12px]">
          <p>관련사이트</p>
          <p>+</p>
        </div>
        <div className="clear-both text-gray-400">
          @ JuiceHan Corp. All rights reserved.
        </div>
      </section>
    </div>
  );
}
