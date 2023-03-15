import { useState } from "react";
import * as S from "./style";
import { projects } from "../../../lib/export/data";
import pointImg from "../../../asset/img/hand-pointer.png";

const Project = () => {
  const [current, setCurrent] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(2);
  const [guide, setGuide] = useState<"show" | "hidden">("hidden");

  document.addEventListener("scroll", () => {
    const scroll: number = document.documentElement.scrollTop;

    // 섹션 시작 = 6695
    if (scroll <= 6695 - 300) {
      setRotate(2);
      setGuide("hidden");
    } else if (6695 - 300 < scroll) {
      setRotate(0);
      setGuide("show");
    }
  });

  const [defaultValue, setDefaultValue] = useState<number>(0);

  return (
    <>
      <S.MainDIv>
        {/* 가이드 선  */}
        <S.Drag guideLine={guide}>
          <div>
            <img src={pointImg} alt="마우스 포인터 이미지" />
            <a>- - - - - - - -</a>
            <div />
          </div>
          <span>드래그하여 프로젝트 전환</span>
        </S.Drag>
        <div>
          {/* perspective와 rotate로 3D 구현 */}
          {projects.map((t, i, a) => (
            <S.CardContainer
              scale={1 - (i + rotate) * 0.2}
              transform={i + rotate < 0 ? 2000 : (i + rotate) * 300}
              zIndex={a.length - i}
              flip={i + rotate <= 0}
              opacity={i + rotate < 4}
            >
              <S.Card
                scale={1}
                translateX={current * 800}
                move={i + rotate === 0}
              >
                {i + rotate === 0 && t.imageList.length > 1 ? (
                  <S.Arrow
                    scale={1}
                    onClick={() => {
                      // currunt가 0이면 가장 맨 뒤로
                      if (current === 0) setCurrent(t.imageList.length - 1);
                      else setCurrent(current - 1);
                    }}
                  >
                    <div>{"<"}</div>
                  </S.Arrow>
                ) : (
                  <></>
                )}
                {t.imageList.map((t1) => (
                  <div>
                    <img src={t1} alt="프로젝트 이미지" draggable="false" />
                  </div>
                ))}
                {i + rotate === 0 && t.imageList.length > 1 ? (
                  <S.Arrow
                    scale={-1}
                    onClick={() => {
                      // currunt가 이미지길이이면 가장 처음으로
                      if (current < t.imageList.length - 1)
                        setCurrent(current + 1);
                      else setCurrent(0);
                    }}
                  >
                    <div>{">"}</div>
                  </S.Arrow>
                ) : (
                  <></>
                )}

                {/* 드래그 감지 */}
                <button
                  draggable
                  onDragStart={(e) => {
                    setDefaultValue(e.clientX);
                  }}
                  onDragEnd={(e) => {
                    setCurrent(0);
                    if (e.clientX > defaultValue) {
                      setRotate(
                        rotate - 1 > -projects.length ? rotate - 1 : rotate
                      );
                    } else {
                      setRotate(rotate + 1 > 0 ? rotate : rotate + 1);
                    }
                    if (rotate - 1 === -2) setGuide("hidden");
                  }}
                />
              </S.Card>
              <S.Card
                scale={-1}
                translateX={current * 800}
                move={i + rotate === 0}
              >
                {/* 아래 비친 모습 */}
                {t.imageList.map((t1) => (
                  <>
                    <div>
                      <img src={t1} alt="프로젝트 이미지" />
                      <div />
                    </div>
                  </>
                ))}
              </S.Card>
            </S.CardContainer>
          ))}
        </div>

        {rotate !== 2 ? (
          <>
            <S.Content>
              {/* 프로젝트 내용 */}
              <span>
                <h1>Project</h1>
                <h2>
                  {projects[rotate * -1].title}{" "}
                  <span>{projects[rotate * -1].subTitle}</span>
                </h2>
                <div>{projects[rotate * -1].content}</div>
                <span>
                  <div>맡은 분야 : {projects[rotate * -1].field}</div>
                  <div>개발 파트 : {projects[rotate * -1].develop}</div>
                  <div>기술 스택 : {projects[rotate * -1].tech}</div>
                </span>
              </span>
              <div>
                <a href={projects[rotate * -1].githubLink} target="_blank">
                  {"Github >"}
                </a>
                {projects[rotate * -1].siteLink !== "" ? (
                  <a href={projects[rotate * -1].siteLink} target="_blank">
                    {"Site >"}
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </S.Content>
          </>
        ) : (
          <></>
        )}
      </S.MainDIv>
    </>
  );
};

export default Project;
