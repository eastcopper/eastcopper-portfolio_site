import { useState } from "react";
import * as S from "./styles";

const Tech = () => {
  const [pos, setPos] = useState(0);

  document.addEventListener("scroll", () => {
    const scroll: number = document.documentElement.scrollTop;
    const startPos: number = document.getElementById("tech")
      ?.offsetTop as number;
    const sectionHeight: number = document.getElementById("tech")
      ?.offsetHeight as number;

    // (startPos - sectionHeight) / 3 = 624
    // 624 / 1416 = 0.4406779661016949
    if (scroll >= startPos + sectionHeight - 0) {
      setPos(221.25);
    } else if (scroll >= startPos) {
      setPos((scroll - startPos) / 0.4406779661016949 / 19.2);
    } else {
      setPos(0);
    }
  });

  return (
    <>
      <S.MainDiv id="tech">
        <span>
          <h1>Tech • Stack</h1>
          <span>
            <S.TextBox
              flex={"end"}
              top={27}
              transX={pos <= 73.75 ? 73.75 - pos : 0}
              opacity={!(pos <= 73.75)}
              pos={pos >= 221.25}
            >
              <div>
                <div>t</div>
                <span>
                  <span>ypeScript</span> <span>JavaScript</span>{" "}
                  <span>Python</span>
                </span>
              </div>
            </S.TextBox>
            <S.TextBox
              pos={pos >= 221.25}
              flex={"start"}
              top={45}
              transX={pos <= 73.75 ? 73.75 : 147.5 - pos}
              opacity={!(pos <= 147.5)}
            >
              <div>
                <span>
                  <span>Node.js</span>
                  <span>Electron</span> <span>Next.js</span> <span>Reac</span>
                </span>
                <div>t</div>
              </div>
            </S.TextBox>
            <S.TextBox
              pos={pos >= 221.25}
              flex={"end"}
              top={63}
              transX={
                pos <= 147.5 ? 73.75 : pos >= 221.25 ? 0 : 221.25 - pos
              }
              opacity={!(pos <= 221.25)}
            >
              <div>
                <div>t</div>
                <span>
                  <span>hree.js</span> <span>Redux-Toolkit</span>{" "}
                  <span>Recoil</span>
                </span>
              </div>
            </S.TextBox>
          </span>
        </span>
      </S.MainDiv>
    </>
  );
};

export default Tech;
