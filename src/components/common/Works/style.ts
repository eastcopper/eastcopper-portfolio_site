import styled from "styled-components";

export const RotateDiv = styled.div`
  position: absolute;
  font-size: 200px;
  font-family: "Bebas Neue", cursive;
  transform: rotateZ(270deg);
  color: var(--pink);
  bottom: 124%;
  left: -1%;
`;

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: calc(2520px + 50vh);
  box-sizing: border-box;
  padding-top: 235px;
  color: var(--white);
  position: relative;

  > div {
    position: absolute;
    display: inline-flex;
    right: 47px;

    > div {
      position: absolute;
      bottom: -110px;
      left: -440px;
      font-size: 70px;
      font-family: "Black Han Sans", sans-serif;
      white-space: pre-wrap;
    }
  }

  video {
    filter: grayscale(1);
    width: 940px;
    height: 521px;
  }
`;

export const DesignHr = styled.hr<{
  rotate: number;
  translateX?: number;
  top: string;
  width: number;
}>`
  transform: rotateZ(${(props) => props.rotate}deg)
    translateX(${(props) => props.translateX}%);
  background-color: var(--pink);
  position: absolute;
  top: ${(props) => props.top};
  width: ${(props) => props.width}px;
  height: 30px;
  border: none;
`;
