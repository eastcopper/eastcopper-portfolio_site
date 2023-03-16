import { useState } from "react";
import * as S from "./styles";

const Tech = () => {
  const [pos, setPos] = useState(0);

  document.addEventListener("scroll", () => {
    const scroll: number = document.documentElement.scrollTop;
    // 섹션 시작 위치 7654
    // 섹션 끝 위치 9528
    // 1874 / 3 = 624
    // 624 / 1416 = 0.4406779661016949
    if (scroll >= 9528) {
      setPos(4248);
    } else if (scroll >= 7654) {
      setPos((scroll - 7654) / 0.4406779661016949);
    } else {
      setPos(0);
    }
  });

  return (
    <>
      <S.MainDiv>
        <span>
          <h1>Tech • Stack</h1>
          <span>
            <S.TextBox
              flex={"end"}
              top={27}
              transX={pos <= 1416 ? 1416 - pos : 0}
              opacity={!(pos <= 1416)}
              pos={pos >= 4248}
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
              pos={pos >= 4248}
              flex={"start"}
              top={45}
              transX={pos <= 1416 ? 1416 : 2832 - pos}
              opacity={!(pos <= 2832)}
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
              pos={pos >= 4248}
              flex={"end"}
              top={63}
              transX={pos <= 2832 ? 1416 : 4248 - pos}
              opacity={!(pos <= 4248)}
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
