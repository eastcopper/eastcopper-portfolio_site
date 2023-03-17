import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  height: 380vh;
  padding: 46px 75px;
  box-sizing: border-box;
  font-family: "Bebas Neue", cursive;
  color: var(--white);

  > span {
    width: 100vw;
    height: 100vh;
    position: sticky;
    top: 46px;
  }

  > span > span {
    width: 100%;
    height: 50vh;
  }

  h1 {
    font-weight: 400;
    font-size: 110px;
    margin: 0;
    margin-bottom: 90px;
    top: 20px;
    /* position: sticky; */
  }
`;

export const TextBox = styled.h2<{
  flex: "end" | "start";
  top: number;
  transX?: number;
  opacity?: boolean;
  pos: boolean;
}>`
  margin: 0;
  font-weight: 400;
  opacity: ${(props) => (props.opacity ? 0.5 : 1)};
  font-size: 130px;
  display: flex;
  transition: 0.05s;
  justify-content: ${(props) =>
    props.flex === "start" ? "flex-start" : "flex-end"};

  transform: translateX(
    ${(props) =>
      props.flex === "start" ? `-${props.transX}px` : `${props.transX}px`}
  );

  > div {
    width: 80%;
    display: inline-flex;
    div {
      margin: 0 30px;
      transform: rotateZ(
          ${(props) => (props.pos ? 0 : props.flex === "start" ? 90 : -90)}deg
        )
        translateX(
          ${(props) => (!props.pos ? 0 : props.flex === "start" ? -30 : 30)}px
        );
      color: var(--pink);
      transition: 0.5s;
    }
    > span {
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
    }
  }
`;
