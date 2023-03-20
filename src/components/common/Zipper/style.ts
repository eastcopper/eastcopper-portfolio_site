import styled from "styled-components";

export const MainDiv = styled.div<{
  position?: string;
  top?: number;
  backColor: string;
}>`
  position: ${(props) => props.position || "fixed"};
  z-index: 2;
  top: ${(props) => props.top || 0};
  width: 100%;
  height: 100%;
  background-color: var(--white);
  display: flex;
`;

export const Title = styled.p<{
  position?: string;
  top?: string;
  color: string;
  zindex: number;
  size: number;
}>`
  font-size: ${(props) => props.size}vmax;
  z-index: ${(props) => props.zindex};
  position: ${(props) => props.position || "fixed"};
  left: 50%;
  top: ${(props) => props.top};
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1.3;
  margin: 0;
  font-family: "Bebas Neue", cursive;
  color: ${(props) => props.color};
  white-space: pre-wrap;
  width: 100vw;
`;
