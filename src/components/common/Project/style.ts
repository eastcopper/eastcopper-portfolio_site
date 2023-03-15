import styled, { keyframes } from "styled-components";

const HandAnimation = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    transform: translateX(315px);
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
    transform: translateX(315px);
  }
`;

const BrokenLine = keyframes`
  0% {
    width: 325px;
  }
  60% {
    width: 0px;
    opacity: 1;
  }
  61% {
    width: 0px;
    opacity: 0;
  }
  62% {
    width: 325px;
    opacity: 0;
  }
  80%,100% {
    width: 325px;
    opacity: 1;
  } 
`;

export const Drag = styled.span<{ guideLine: "show" | "hidden" }>`
  opacity: ${(props) => (props.guideLine === "show" ? 1 : 0)};
  transition: 1s;
  color: var(--pink);
  position: absolute;
  top: 80px;
  left: 25%;
  font-size: 50px;
  width: 335px;
  font-family: "Quicksand", sans-serif;

  > div {
    width: 335px;
    display: flex;
    > div {
      position: absolute;
      top: 0;
      right: 0;
      width: 335px;
      height: 70px;
      background-color: var(--black);
      animation: ${BrokenLine} 4s ease-in-out infinite;
    }
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    z-index: 2;

    animation: ${HandAnimation} 4s ease-in-out infinite;
  }
`;

export const MainDIv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 202px 0px 256px 256px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  > div {
    width: 800px;
    height: 502px;
    display: flex;
  }
`;

export const Content = styled.span`
  width: 801px;
  color: var(--white);
  font-family: "Do Hyeon", sans-serif;
  font-weight: 400;
  height: 560px;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;

  > span {
    width: 85%;
  }

  h1 {
    margin: 0;
    font-size: 100px;
    font-family: "Bebas Neue", cursive;
  }
  h2 {
    margin: 0;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 15px;
    span {
      font-size: 24px;
    }
  }
  span > div {
    font-size: 22px;
    margin-bottom: 5px;
  }

  > span > div {
    margin-bottom: 30px;
  }
  > div {
    display: flex;
    gap: 30px;
    a {
      margin-top: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Black Han Sans", sans-serif;
      width: 200px;
      height: 60px;
      background-color: var(--white);
      transition: 1s;
      border: none;
      border-radius: 10px;
      color: var(--black);
      text-align: center;
      font-size: 24px;
      cursor: pointer;
      position: relative;
      z-index: 1;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      &::before {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background-color: var(--pink);
        transition: all 0.3s ease-in-out;
      }
      &:hover::before {
        left: 0;
        width: 100%;
      }

      &:hover {
        color: var(--white);
      }
    }
  }
`;

export const Card = styled.div<{
  scale: number;
  translateX: number;
  move: boolean;
}>`
  width: 800px;
  height: 552px;
  overflow: hidden;
  display: inline-flex;
  white-space: nowrap;
  text-align: center;
  overflow-y: hidden;

  > div {
    transition: 1s;
    transform: translateX(-${(props) => (props.move ? props.translateX : 0)}px);
  }

  img {
    width: 800px;
    height: 552px;
    object-fit: cover;
    border-radius: 20px;

    + div {
      position: absolute;
      bottom: 0;
      background-image: linear-gradient(
        to bottom,
        rgba(18, 18, 18, 1) 65%,
        rgba(18, 18, 18, 0.9) 85%,
        rgba(18, 18, 18, 0.7) 100%
      );
      width: 100%;
      height: 100%;
    }
  }

  button {
    z-index: 10;
    height: 700px;
    width: 950px;
    position: absolute;
    opacity: 0;
  }
`;

export const Arrow = styled.span<{ scale: number }>`
  position: absolute;
  top: 50%;
  cursor: pointer;
  width: 60px;
  height: 60px;
  left: ${(props) => (props.scale === 1 ? 3 : 90)}%;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  transform: translateY(0%);
  z-index: 11;

  &:active {
    transform: translateY(20%);
  }
  &:hover {
    div {
      color: var(--pink);
    }
  }

  div {
    font-family: "Corben", cursive;
    transition: all 0.2s ease;
    color: var(--white);
    font-size: 25px;
    margin-bottom: 5px;
  }
`;

export const CardContainer = styled.div<{
  scale: number;
  transform: number;
  zIndex: number;
  flip: boolean;
  opacity: boolean;
}>`
  transition: 0.5s;
  > div {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transform: rotateY(${(props) => (props.flip ? 0 : 37)}deg) scale(1, 1);
    object-fit: cover;
    transition: 0.5s;
    transition-delay: 0.25s;
    opacity: ${(props) => (props.opacity ? 1 : 0)};
  }
  > div:nth-child(2) {
    position: absolute;
    left: 0;
    top: 100%;
    transform: rotateY(${(props) => (props.flip ? 0 : 37)}deg) scale(1, -1);
  }

  perspective: 2000px;
  position: absolute;
  width: 800px;
  height: 552px;
  z-index: ${(props) => props.zIndex};
  transform: scale(${(props) => `${props.scale},${props.scale}`})
    translateX(-${(props) => props.transform}px);
`;
