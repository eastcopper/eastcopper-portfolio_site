import styled from "styled-components";

export const ScrollDiv = styled.div`
  width: 100vw;
  height: calc(300vh - 20px);
`;

export const MainDIv = styled.div<{ pos: string; top: number }>`
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  display: inline-flex;
  align-items: center;
  padding: 0 0px 0 98px;
  justify-content: space-between;
  color: var(--white);
  overflow: hidden;
  position: ${(props) => props.pos};
  top: 0;
  margin-top: ${(props) => props.top}px;
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
  padding: 10px 17px;

  span {
    color: var(--white);
    font-size: 30px;
    font-family: "Black Han Sans", sans-serif;
    text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
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
