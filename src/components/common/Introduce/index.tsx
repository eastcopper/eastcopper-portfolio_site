import { useState } from "react";
import * as S from "./style";
import { imageList } from "../../../lib/export/data";

const Introduce = () => {
  const [posY, setPosY] = useState(-480);

  window.addEventListener("scroll", () => {
    const scroll: number = document.documentElement.scrollTop;
    // 섹션 시작
    if (scroll >= 5780 + 1000) {
      setPosY(417);
    } else if (scroll >= 3526 - 500) {
      setPosY(parseInt(String((scroll - 3926) / 2.06)) - 480);
      // 섹션 최대 길이 - 섹션 시작 / 900(카드 콘테이너 길이) = 2.06
    }
  });

  return (
    <S.ScrollDiv>
      <S.Shadow />
      <S.MainDIv>
        <S.Keyword>
          My KeyWord <span>{">"}</span>
        </S.Keyword>

        <S.Title>
          <div>
            INTRODUCE<span>__</span>
          </div>
          <div>
            {`• 새로운 시도를 추구하는 사람입니다.\n• 문제해결이 빠르며 효율성을 개선하기 위해 끊임없이 노력합니다.\n• 의사소통과 협업을 중요시하며 적극적으로 나서는 사람입니다.\n`}
          </div>
        </S.Title>
        <S.CardContainer posY={posY}>
          <div>
            {imageList.slice(0, 4).map((t) => (
              <S.Card image={t.url}>
                <span>
                  <span>{t.content}</span>
                </span>
              </S.Card>
            ))}
          </div>
          <div>
            {imageList.slice(4, 8).map((t) => (
              <S.Card image={t.url}>
                <span>
                  <span>{t.content}</span>
                </span>
              </S.Card>
            ))}
          </div>
        </S.CardContainer>
      </S.MainDIv>
    </S.ScrollDiv>
  );
};
export default Introduce;
