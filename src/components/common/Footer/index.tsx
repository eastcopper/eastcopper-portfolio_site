import * as S from "./style";
import NotionImg from "../../../asset/img/notion.png";
import GithubImg from "../../../asset/img/github.png";
import { useState } from "react";

const Footer = () => {
  const [show, setShow] = useState<boolean>(false);
  document.addEventListener("scroll", () => {
    if (
      document.documentElement.offsetHeight - window.innerHeight - 100 <=
      window.scrollY
    ) {
      setShow(true);
    }
  });
  return (
    <>
      <S.MainDiv id="footer">
        {show ? (
          <S.Introduce>
            <div>FrontEnd Developer</div>
            <hr />
            <span>
              <a href="https://github.com/eastcopper" target={"_blank"}>
                <img src={GithubImg} alt="깃허브" />
              </a>
              <a
                href="https://carnation-pea-029.notion.site/LeeDongHyeon-b1f939647caa4afe8cd72086fa5f4e27"
                target={"_blank"}
              >
                <img src={NotionImg} alt="노션" />
              </a>
            </span>
          </S.Introduce>
        ) : (
          <div> </div>
        )}
        <S.Contact>
          <div>Contact</div>
          <span>
            <div>Mail : </div>
            <span>ldh7228@gmail.com</span>
          </span>
          <br />
          <span>
            <div>Number : </div>
            <span>010-5742-7228</span>
          </span>
          <br />
          <span>
            <div>Github : </div>
            <span>https://github.com/eastcopper</span>
          </span>
        </S.Contact>
      </S.MainDiv>
    </>
  );
};

export default Footer;
