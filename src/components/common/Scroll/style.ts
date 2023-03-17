import styled, { keyframes } from "styled-components";

const ArrowAnimation = keyframes`
  0%{
    opacity: 0;
  } 
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.7;
  }
`;

const WheelAnimation = keyframes`
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(100%);
    }
`;

export const MainDiv = styled.div<{ show: number }>`
  position: fixed;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  opacity: ${(props) => props.show};
  transition: 0.2s;

  > div {
    width: 45px;
    height: 70px;
    border: 3px solid var(--black);
    border-radius: 25px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    div {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--black);
      animation: ${WheelAnimation} 1s ease-in-out infinite alternate;
    }
  }
`;

export const Arrow = styled.div<{ delay: number }>`
  font-family: "Nanum Gothic", sans-serif;
  transform: rotateZ(90deg) rotateY(40deg) translateY(-1px);
  font-size: 35px;
  line-height: 16px;
  animation: ${ArrowAnimation} 1s infinite;
  animation-direction: alternate;
  animation-delay: ${(props) => props.delay}s;
`;
