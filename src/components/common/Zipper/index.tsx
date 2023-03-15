import { useEffect, useState } from "react";
import { zipperScroll } from "../../../lib/func/zipperAnimation";
import * as S from "./style";

export default function Zipper(): JSX.Element {
  const divAmount: number = 10; // div 개수
  const divs: number[] = Array.from({ length: divAmount }, (t, i) => {
    return i;
  }); // map함수용 div 배열 생성
  const style: string = `${document.body.clientWidth / divAmount}px`; // div 가로 크기 조정
  const [divTransfrom, setDivTransfrom] = useState<string>("scale(1.5, 0)");
  const [position, setPosition] = useState("fixed");
  const [top, setTop] = useState(0);
  const [color, setColor] = useState("#121212");

  document.addEventListener("scroll", () => {
    const scroll: number = document.documentElement.scrollTop; // 스크롤 감지

    if (scroll >= 2020) {
      setPosition("absolute");
      setTop(2020);
    } else {
      setPosition("fixed");
      setTop(0);
    }
    // 애니메이션이 끝나면 -> fixed에서 absolute

    divs.forEach(() => {
      setDivTransfrom(`scale(1.5, ${zipperScroll(scroll)})`); // 스크롤 시 div 세로 크기 조정
    });
  });

  useEffect(() => {
    setTimeout(() => {
      setColor("#f0f0f0");
    }, 500);
  }, []);

  return (
    <S.MainDiv position={position} backColor={color}>
      <S.Title
        backColor="#121212"
        zindex={2}
        size={160}
        position={position}
        top={"50%"}
      >
        <span>PORTFOLIO</span>
      </S.Title>
      {divs.map((item: number) => (
        <span
          style={{
            transform: divTransfrom,
            transition: `all ${item * 0.02}s linear`,
            width: style,
            height: "100%",
            backgroundColor: "#121212",
            display: "inline-flex",
          }}
        /> // height를 동적으로 변화시켜 애니메이션 만들기
      ))}
      <S.Title
        backColor={color}
        zindex={1}
        size={200}
        position={position}
        top={top === 0 ? "50%" : "2477px"}
      >
        <span>{`Lee\ndong hyeon`}</span>
      </S.Title>
    </S.MainDiv>
  );
}
