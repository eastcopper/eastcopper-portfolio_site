import * as S from "./style";
import { useRef } from "react";
import { ActivityContent, ActivityImageList } from "../../../lib/export/data";
import ArrowIcon from "../../../asset/img/arrow";

const Activity = () => {
  const ref: any = useRef(null);

  const handleOnDown = (e: MouseEvent) => {
    // 마우스 디폴트위치 기억
    ref.current.dataset.mouseDownAt = e.clientY;
  };
  const handleOnUp = () => {
    // 마우스 위치 삭제
    if (document.documentElement.scrollTop >= 10761 - 500) {
      ref.current.dataset.mouseDownAt = "0";
      ref.current.dataset.prevPercentage = ref.current.dataset.percentage;
    }
  };
  const handleOnMove = (e: any) => {
    // 마우스를 드래그할 때만 함수 실행
    if (ref.current.dataset.mouseDownAt === "0") return;

    if (document.documentElement.scrollTop >= 10761 - 500) {
      // 디폴트 마우스 위치 - 현재 마우스 위치
      const mouseDelta = -(
        parseFloat(ref.current.dataset.mouseDownAt) - e.clientY
      );

      // 포지셔닝
      const speed = (mouseDelta / 500) * 100;
      const per = parseFloat(ref.current.dataset.prevPercentage) + speed;

      const nextPercentage = per < 0 ? 0 : per > 215 ? 215 : per;

      console.log(ref.current.dataset.prevPercentage);

      ref.current.dataset.percentage = nextPercentage;

      Array.from(ref.current.getElementsByClassName("image")).map(
        (t: any, i: number, a) => {
          const condition =
            a.findIndex((e) => e === t) === i &&
            nextPercentage < 275 - i * 110 &&
            nextPercentage > 165 - i * 110;

          const scale = condition ? 1 : 0.8;
          const translate = condition ? 0 : 50;

          t.animate(
            {
              transform: `translate(${translate}%, ${nextPercentage}%) scale(${scale}, ${scale})`,
            },
            { duration: 1200, fill: "forwards" }
          );
        }
      );
    }
  };

  document.addEventListener("mousedown", (e) => handleOnDown(e));
  document.addEventListener("mouseup", () => handleOnUp());
  document.addEventListener("mousemove", (e) => handleOnMove(e));

  document.addEventListener("scroll", (e) => {
    const scroll = document.documentElement.scrollTop;
  });

  return (
    <>
      <S.MainDiv>
        <S.Drag>
          <ArrowIcon />
          Drag
        </S.Drag>
        <S.Title>
          <div>Activities</div>
          <span>
            {ActivityContent.map((t) => (
              <div>• {t}</div>
            ))}
          </span>
        </S.Title>
        <div
          ref={ref}
          id="image-track"
          data-mouse-down-at="0"
          data-prev-percentage="0"
        >
          {ActivityImageList.map((t) => (
            <img
              className="image"
              draggable="false"
              src={t}
              alt="활동 이력 사진"
            />
          ))}
        </div>
      </S.MainDiv>
    </>
  );
};

export default Activity;