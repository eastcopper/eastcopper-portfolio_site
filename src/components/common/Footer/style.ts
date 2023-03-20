import styled, { keyframes } from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: var(--white);
  display: inline-flex;
  justify-content: space-between;
  padding: 60px 5.2vmax 0px 20.83vmax;
  box-sizing: border-box;
  font-family: "Black Han Sans", sans-serif;
`;

export const Contact = styled.div`
  width: 26.04vmax;
  font-size: 1.25vmax;
  > div:nth-child(1) {
    margin-bottom: 3.2vmin;
  }
  > span {
    font-size: 0.93vmax;
    width: 500px;
    display: inline-flex;
    gap: 10px;
    div {
      width: 4.68vmax;
    }
  }
`;

const IntroduceHrAnimation = keyframes`
  0% {
    left: 50%;
    width: 0;
  }
  100% {
    left: 0%;
    width: 17.03vmax;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Introduce = styled.div`
  font-size: 1.5vmax;
  text-align: center;
  margin-top: 10px;
  position: relative;
  div {
    animation: ${FadeIn} 1s ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  span {
    animation: ${FadeIn} 1s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0.7s;
    opacity: 0;
    display: inline-flex;
    gap: 15px;
    margin-top: 4.26vmin;
  }
  span img {
    width: 2.6vmax;
    height: 5.33vmin;
    cursor: pointer;
  }
  hr {
    border: none;
    background-color: var(--black);
    height: 2px;
    left: 50%;
    position: absolute;
    animation: ${IntroduceHrAnimation} 1s ease-in-out;
    animation-fill-mode: forwards;
    margin-top: 1.6vmin;
    animation-delay: 0.35s;
  }
`;
