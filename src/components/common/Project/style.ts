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
    transform: translateX(16.4vmax);
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
    transform: translateX(16.4vmax);
  }
`;

const BrokenLine = keyframes`
  0% {
    width: 16.9vmax;
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
    width: 16.9vmax;
    opacity: 0;
  }
  80%,100% {
    width: 16.9vmax;
    opacity: 1;
  } 
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 30px 30px var(--black) inset;

  > div {
    position: absolute;
    top: 0;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    div {
      z-index: 1;
      cursor: pointer;
      position: absolute;
      font-size: 50px;
      right: 30px;
      top: 10px;
      font-family: "Quicksand", sans-serif;
    }
  }

  video {
    border: 2px solid var(--white);
    border-radius: 20px;
    width: 70vw;
    height: auto;
  }
`;

export const Help = styled.div`
  position: absolute;
  left: 55.2vmax;
  top: 16vmin;
  width: 30px;
  height: 30px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Drag = styled.span<{ guideLine: "show" | "hidden" }>`
  opacity: ${(props) => (props.guideLine === "show" ? 1 : 0)};
  transition: 1s;
  color: var(--pink);
  position: absolute;
  top: 4vmax;
  left: 24vmax;
  font-size: 2.6vmax;
  width: 17.4vmax;
  font-family: "Quicksand", sans-serif;

  > span {
    position: absolute;
    color: var(--white);
    left: 20%;
    width: 100%;
    font-size: 1.25vmax;
    font-family: "Do Hyeon", sans-serif;
    opacity: 0.8;
    animation: ${FadeIn} 1s ease-in-out alternate-reverse infinite;

    animation-delay: 0.3s;
  }

  > div {
    width: 17.4vmax;
    display: flex;
    > div {
      position: absolute;
      top: 0;
      right: 0;
      width: 17.4vmax;
      height: 70px;
      background-color: var(--black);
      animation: ${BrokenLine} 4s ease-in-out infinite;
    }
  }

  img {
    width: 3.6vmax;
    height: 3.6vmax;
    object-fit: contain;
    z-index: 2;

    animation: ${HandAnimation} 4s ease-in-out infinite;
  }
`;

export const Select = styled.div`
  position: absolute;
  bottom: 4.1vmax;
  width: 41.6vmax;
  z-index: 11;
  display: inline-flex;
  justify-content: space-around;
  padding: 0px 100px;
  font-size: 4vmax;
  color: var(--white);
  div {
    opacity: 0.5;
    transition: 0.3s;
    cursor: pointer;
  }
  div:hover {
    opacity: 1;
  }
`;

export const MainDIv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 10.5vmax 0px 13.3vmax 13.3vmax;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  > div:nth-child(1),
  > div:nth-child(2) {
    width: 41.6vmax;
    height: 26.1vmax;
    display: flex;
  }
`;

export const Content = styled.span`
  width: 41.7vmax;
  color: var(--white);
  font-family: "Do Hyeon", sans-serif;
  font-weight: 400;
  height: 29.1vmax;
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
    font-size: 5.2vmax;
    font-family: "Bebas Neue", cursive;
  }
  h2 {
    margin: 0;
    font-size: 2vmax;
    font-weight: 400;
    margin-bottom: 0.7vmax;
    span {
      font-size: 1.2vmax;
    }
  }
  span > div {
    font-size: 1.1vmax;
    margin-bottom: 0.02vmax;
  }

  > span > div {
    margin-bottom: 1.5vmax;
  }
  > div {
    display: flex;
    gap: 1.5vmax;
    a {
      margin-top: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Black Han Sans", sans-serif;
      width: 10.4vmax;
      height: 3.1vmax;
      background-color: var(--white);
      transition: 1s;
      border: none;
      border-radius: 10px;
      color: var(--black);
      text-align: center;
      font-size: 1.2vmax;
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
  width: 41.6vmax;
  height: 28.75vmax;
  overflow: hidden;
  display: inline-flex;
  white-space: nowrap;
  text-align: center;
  overflow-y: hidden;

  > div {
    transition: 1s;
    transform: translateX(
      -${(props) => (props.move ? props.translateX : 0)}vmax
    );
  }

  img {
    width: 41.6vmax;
    height: 28.75vmax;
    object-fit: cover;
    border-radius: 20px;

    + div {
      position: absolute;
      bottom: 0;
      background-image: linear-gradient(
        to bottom,
        rgba(18, 18, 18, 1) 65%,
        rgba(18, 18, 18, 0.95) 75%,
        rgba(18, 18, 18, 0.85) 85%,
        rgba(18, 18, 18, 0.63) 100%
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
    cursor: grab;
  }
`;

export const Arrow = styled.span<{ scale: number }>`
  position: absolute;
  top: 50%;
  cursor: pointer;
  width: 3.1vmax;
  height: 3.1vmax;
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
    font-size: 1.3vmax;
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
    transform-style: preserve-3d;
  }
  > div:nth-child(2) {
    position: absolute;
    left: 0;
    top: 100%;
    transform: rotateY(${(props) => (props.flip ? 0 : 37)}deg) scale(1, -1);
  }

  transform-style: preserve-3d;
  perspective: 104.1vmax;
  position: absolute;
  width: 41.6vmax;
  height: 28.75vmax;
  z-index: ${(props) => props.zIndex};
  transform: scale(${(props) => `${props.scale},${props.scale}`})
    translateX(${(props) => props.transform}vmax);
`;
