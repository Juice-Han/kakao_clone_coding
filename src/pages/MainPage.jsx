import React, { useEffect, useState } from "react";
import shipImg from "../assets/kakao_ship.png";
import arrowUpImg from "../assets/icons/arrow-up-solid.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainPage() {
  const [headerBorderB, setHeaderBorderB] = useState(false);
  const [headerDisappear, setHeaderDisappear] = useState(false);
  const [throttle, setThrottle] = useState(false);

  //페이지 첫 렌더링 시 window에 스크롤 이벤트로 등록될 함수
  const scrollHeaderEvent = () => {
    if (throttle) return;
    setThrottle(true);
    setTimeout(() => {
      headerBorderBFunction(window.scrollY);
      headerDisappearFunction(window.scrollY);
      setThrottle(false);
    }, 100);
  };

  //스크롤 상태에 따라 헤더 border-bottom 상태 조작 함수
  const headerBorderBFunction = (scY) => {
    if (scY === 0) {
      setHeaderBorderB(false);
    } else {
      setHeaderBorderB(true);
    }
  };

  //스크롤 상태에 따라 헤더 보이는 상태 조작 함수
  const headerDisappearFunction = (scY) => {
    if (scY <= 210) {
      setHeaderDisappear(false);
    } else {
      setHeaderDisappear(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeaderEvent);
    return () => {
      window.removeEventListener("scroll", scrollHeaderEvent);
    };
  }, []);

  return (
    <>
      <Header
        headerBorderB={headerBorderB}
        headerDisappear={headerDisappear}
      ></Header>
      <div className="w-100 px-14 pt-24">
        <div className="w-100 relative">
          <div className="mt-32">
            <div className="flex items-center ml-2">
              <img className=" w-20" src={shipImg}></img>
              <span className="text-5xl font-bold ml-2">문화</span>
            </div>
            <div className="mt-4">
              <p className="text-4xl ml-2">더 나은 세상을 만드는 카카오</p>
            </div>
          </div>

          <div className=" w-100 h-screen mt-28 relative">
            <div className="w-full h-full rounded-lg bg-[url('./assets/kakao_city.jpg')] bg-center bg-cover brightness-50"></div>
            <div className=" absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center text-white">
              <p className=" text-2xl font-bold">존재이유</p>
              <p className=" text-5xl font-bold mt-5">기술과 사람이 만드는</p>
              <p className=" text-5xl font-bold mt-4">더 나은 세상</p>
            </div>
          </div>

          <div className="text-center h-[500px]">
            <p className=" mt-60 text-5xl font-semibold">카카오스럽나요?</p>
            <p className=" mt-16 text-xl leading-[1.7]">
              카카오 크루는 종종 이렇게 묻곤 합니다.
              <br />
              우리의 관점, 행동하는 방법, 지향하는 목표까지 카카오스러움은 이미
              우리 안에 스며들어 있습니다. 우리가 더
              <br />
              나은 세상을 만들기 위해 고민하면서 자연스럽게 체득한 태도이자
              본질이기 때문입니다. 앞으로도 우리는
              <br />
              카카오스러움에서 고민을 시작하고, 답을 찾을 것입니다.
            </p>
          </div>

          <div className="w-full h-fit flex flex-col items-center gap-20 pb-52">
            <div className=" w-4/5 h-auto border rounded-xl shadow-[2px_5px_40px_0_rgba(0,0,0,.09)] flex">
              <div className="w-1/2 h-full flex flex-col items-start p-20">
                <p className="text-[40px] font-bold leading-snug">
                  가보지 않은 길을
                  <br />
                  두려워 하지 않습니다.
                </p>
                <p className="mt-5 text-2xl text-neutral-500">
                  Willing to Venture
                </p>
                <p className=" mt-24 text-lg leading-[1.8] font-normal">
                  "가보지 않은 길은 위험하잖아?"
                  <br />
                  배는 정박해 있을 때 가장 안전하지만 그것은 배의 존재 이유가
                  아닙니다. 가보지 않은 길은 실패의 위험이 따르지만 우리는
                  개선보다 혁신의 길을 가는 사람들입니다. 문제 자체를 다시
                  정의하고 새로운 해답을 찾는 것에 집중합니다. 도전이 두렵기만
                  하다면 카카오를 떠날 때입니다.
                </p>
                <p className="text-lg text-neutral-400 mt-5">
                  #개선아닌혁신 #도전은 거침없이
                </p>
              </div>
              <div className="w-1/2 h-auto bg-[url('./assets/kakao_pic1.png')] bg-center bg-cover rounded-r-xl"></div>
            </div>

            <div className=" w-4/5 h-auto border rounded-xl shadow-[2px_5px_40px_0_rgba(0,0,0,.09)] flex">
              <div className="w-1/2 h-auto bg-[url('./assets/kakao_pic2.png')] bg-center bg-cover rounded-l-xl"></div>
              <div className="w-1/2 h-full flex flex-col items-start p-20">
                <p className="text-[40px] font-bold leading-snug">
                  무슨 일이든 본질만
                  <br />
                  남기고 처음부터
                  <br />
                  다시 생각해 봅니다.
                </p>
                <p className="mt-5 text-2xl text-neutral-500">Basic to Basic</p>
                <p className=" mt-24 text-lg leading-[1.8] font-normal">
                  "원래 그게 당연한거 아냐?"
                  <br />
                  불편하고 복잡한 게 당연할 리 없습니다. 그래서 우리는 본질에서
                  출발합니다. 시작부터 다르게 질문합니다. 끊임없이 ‘왜?’라는
                  물음을 던집니다. 그렇게 익숙한 것을 새롭게, 가치 있게
                  만듭니다.
                </p>
                <p className="text-lg text-neutral-400 mt-5">
                  #본질에서출발 #생각에당연함없이
                </p>
              </div>
            </div>

            <div className=" w-4/5 h-auto border rounded-xl shadow-[2px_5px_40px_0_rgba(0,0,0,.09)] flex">
              <div className="w-1/2 h-auto flex flex-col items-start p-20">
                <p className="text-[40px] font-bold leading-snug">
                  나보다 동료의 생각이
                  <br />
                  더 옳을 수 있다는
                  <br />
                  믿음을 가집니다.
                </p>
                <p className="mt-5 text-2xl text-neutral-500">Trust to Trust</p>
                <p className=" mt-24 text-lg leading-[1.8] font-normal">
                  "내가 항상 정답일까?"
                  <br />
                  개인의 완벽함에 기대기 보다 동료와 함께 완성해 나갑니다.
                  격렬한 토론과 논쟁 속에서도 서로에 대한 신뢰가 있다면 반드시
                  더 나은 답을 찾을 수 있습니다. 신뢰를 받기 위해서 상대방을
                  먼저 존중하세요. 혼자 가면 빨리 갈 수 있지만, 함께 가면 멀리
                  갈 수 있습니다.
                </p>
                <p className="text-lg text-neutral-400 mt-5">
                  #신뢰충돌헌신 #존중은편견없이
                </p>
              </div>
              <div className="w-1/2 h-auto bg-[url('./assets/kakao_pic3.png')] bg-center bg-cover rounded-r-xl"></div>
            </div>

            <div className=" w-4/5 h-auto border rounded-xl shadow-[2px_5px_40px_0_rgba(0,0,0,.09)] flex">
              <div className="w-1/2 h-auto bg-[url('./assets/kakao_pic4.png')] bg-center bg-cover rounded-l-xl"></div>
              <div className="w-1/2 h-full flex flex-col items-start p-20">
                <p className="text-[40px] font-bold leading-snug">
                  스스로 몰입하고
                  <br />
                  주도적으로 일합니다.
                </p>
                <p className="mt-5 text-2xl text-neutral-500">
                  Act for Yourself
                </p>
                <p className=" mt-24 text-lg leading-[1.8] font-normal">
                  "왜 이 일을 할까?"
                  <br />
                  카카오 크루라면 가장 먼저 해야 하는 질문입니다. 우리는 일의
                  원동력을 스스로 만들어냅니다. 내가 시켜서 하는 나의 일인거죠.
                  일에 끌려다니지 않고 끌고 가기 위해서 언제나 내가 먼저
                  생각하고, 질문하고, 움직입니다.
                </p>
                <p className="text-lg text-neutral-400 mt-5">
                  #내가시킨내일 #할일은스스럼없이
                </p>
              </div>
            </div>

            <div className=" w-4/5 h-fit border rounded-xl shadow-[2px_5px_40px_0_rgba(0,0,0,.09)] flex">
              <div className="w-1/2 h-auto flex flex-col items-start p-20">
                <p className="text-[40px] font-bold leading-snug">
                  세상을 선하게
                  <br />
                  바꾸려고 노력합니다.
                </p>
                <p className="mt-5 text-2xl text-neutral-500">Tech for Good</p>
                <p className=" mt-24 text-lg leading-[1.8] font-normal">
                  "너무 거창한 이야기 아냐?"
                  <br />
                  사회를 지속적으로 변화시킬 수 있는 가장 효율적인 조직은
                  기업입니다. 기업은 건강한 생태계를 만들어야하는 책임이
                  있습니다. 카카오 또한 사회에 의미있는 변화를 만들기 위해
                  최선을 다합니다. 서비스 하나에도 그런 생각과 노력들이
                  담겨있습니다. 그렇게 우리는 오늘보다 더 나은 세상을 만듭니다.
                </p>
                <p className="text-lg text-neutral-400 mt-5">
                  #사회적인책임 #놀라움은끊임없이
                </p>
              </div>
              <div className="w-1/2 h-auto bg-[url('./assets/kakao_pic5.png')] bg-center bg-cover rounded-r-xl"></div>
            </div>
          </div>
          <div className="w-14 h-14 absolute bottom-8 right-0 rounded-full bg-black flex justify-center items-center">
            <img className="w-8 h-8" src={arrowUpImg}></img>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
