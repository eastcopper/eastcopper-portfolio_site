import styled, { keyframes } from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 271px 390px;
  > div:nth-last-child(1) {
    display: flex;
    gap: 4vmin;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(80%, -85%);
    user-select: none;
    flex-direction: column;
    img:nth-last-child(1) {
      transform: scale(1, 1) translateX(0%);
    }
    img {
      width: 45vmin;
      height: 65vmin;
      object-fit: cover;
      object-position: 100% start;
      transform: scale(0.8, 0.8) translateX(50%);
      border-radius: 20px;
    }
  }
`;

export const Title = styled.div`
  font-size: 150px;
  color: var(--white);
  font-family: "Bebas Neue", cursive;
  span > div {
    white-space: pre-wrap;
    font-family: "Black Han Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

const DragAnimation = keyframes`
  0% {
    transform : translateY(0%) rotateZ(-90deg);
  }
  100% {
    transform : translateY(20%) rotateZ(-90deg);
  }
`;

export const Drag = styled.div`
  position: absolute;
  color: var(--white);
  left: 60%;
  display: inline-flex;
  align-items: center;
  font-size: 35px;
  font-family: "Bebas Neue", cursive;
  animation: ${DragAnimation} 1s ease-in-out alternate infinite;
  svg {
    margin-right: -15px;
  }
`;
