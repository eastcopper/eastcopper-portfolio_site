import { useState } from "react";
import * as S from "./style";

const ScrollIcon = () => {
  const arrowArr = Array.from({ length: 3 }, () => {
    return undefined;
  });
  const [wheel, setWheel] = useState(0.7);

  document.addEventListener("scroll", () => setWheel(0));

  return (
    <>
      <S.MainDiv show={wheel}>
        <div>
          <div />
        </div>
        <span>
          {arrowArr.map((_, i) => (
            <S.Arrow delay={(i + 1) * 0.1}>{">"}</S.Arrow>
          ))}
        </span>
      </S.MainDiv>
    </>
  );
};

export default ScrollIcon;
