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
  width: 100vw;
  height: calc(300vh - 20px);
  position: absolute;
  box-shadow: inset 0 0 20px 20px #1e1f1e;
  z-index: 99;
`;

export const CardContainer = styled.div<{ posY: number }>`
  display: flex;
  margin-right: 200px;
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
    transition: transform 200ms;

    &:hover {
      transform: scale3d(1.05, 1.05, 1.05);
    }
  }
`;

export const Card = styled.div<{ image?: string }>`
  width: 285px;
  height: 494px;
  border-radius: 20px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  > span {
    display: flex;
    align-items: center;
    padding-left: 15px;
    width: 100%;
    height: 15%;
    background-color: var(--white);
    color: var(--black);
    border-radius: 0 0 20px 20px;
    font-size: 28px;
    font-family: "Black Han Sans", sans-serif;
    /* text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5); */
    box-shadow: 0 0 10px 10px var(--white);
    span {
      width: 50%;
      white-space: pre-wrap;
    }
  }
`;

export const Title = styled.div`
  div:nth-child(1) {
    font-family: "Bebas Neue", cursive;
    font-size: 150px;
    color: var(--white);
    span {
      color: var(--pink);
    }
  }
  div:nth-child(2) {
    white-space: pre-wrap;
    font-size: 35px;
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
  font-size: 22px;
  animation: ${KeyWordAnimation} 1s ease-in-out alternate infinite;
  span {
    color: var(--pink);
  }
`;
