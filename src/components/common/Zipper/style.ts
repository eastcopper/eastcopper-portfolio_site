import styled, { keyframes } from "styled-components";

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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
  animation: ${FadeIn} 1s ease;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
`;
