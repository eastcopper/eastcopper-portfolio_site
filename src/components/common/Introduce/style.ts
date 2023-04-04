import styled, { keyframes } from "styled-components";

export const ScrollDiv = styled.div`
  width: 100vw;
  height: calc(300vh - 20px);
`;

export const MainDIv = styled.div`
  width: 100vw;
  height: 100vh;
  display: inline-flex;
  align-items: center;
  padding: 0 0px 0 98px;
  justify-content: space-between;
  color: var(--white);
  overflow: hidden;
  position: sticky;
  top: 0;
`;

export const Shadow = styled.div`
  /* width: 100vw;
  height: calc(300vh - 20px);
  position: absolute;
  box-shadow: inset 0 0 20px 20px #121212;
  z-index: 99; */
  /* background-color: red; */
`;

export const CardContainer = styled.div<{ posY: number }>`
  display: flex;
  margin-right: 10.4vw;
  gap: 35px;
  transform: translateY(${(props) => props.posY}px);
  transition: 0.05s;

  > div {
    display: flex;
    flex-direction: column;
    row-gap: 27px;
  }
  > div:nth-child(2) {
    transform: translateY(5%);
  }
  > div > div {
    /* transition: transform 200ms; */

    /* &:hover {
      transform: scale3d(1.05, 1.05, 1.05);
    } */
  }
`;

export const Card = styled.div<{ image?: string }>`
  width: 14.8vw;
  height: 25.7vw;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  border-radius: 20px;

  > div {
    width: 14.8vw;
    height: 25.7vw;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    transition: 1s;
    border-radius: 20px;
    &:hover {
      transform: scale(1.1);
    }
  }

  > span {
    position: absolute;
    bottom: 5px;
    left: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    /* background-color: var(--white); */
    color: var(--black);
    border-radius: 0 0 20px 20px;
    font-size: 1.4vw;
    font-family: "Black Han Sans", sans-serif;
    /* text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5); */
    /* box-shadow: 0 0 10px 10px var(--white); */
    color: #fff;
    text-shadow: 0px 0px 10px #000;
    span {
      width: 50%;
      white-space: pre-wrap;
    }
  }
`;

export const Title = styled.div`
  div:nth-child(1) {
    font-family: "Bebas Neue", cursive;
    font-size: 7.8vw;
    color: var(--white);
    span {
      color: var(--pink);
    }
  }
  div:nth-child(2) {
    white-space: pre-wrap;
    font-size: 1.8vw;
    font-family: "Do Hyeon", sans-serif;
  }
`;

const KeyWordAnimation = keyframes`
0% {
transform: translateX(0%);
}
100% {
  transform: translateX(-5%);
}
`;

export const Keyword = styled.div`
  position: absolute;
  top: 100px;
  left: 45%;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-size: 1.1vw;
  animation: ${KeyWordAnimation} 1s ease-in-out alternate infinite;
  span {
    color: var(--pink);
  }
`;
