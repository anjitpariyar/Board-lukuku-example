import styled from "styled-components";

export const Reveal = styled.span`
  transform-style: "preserve-3d";
  transform: ${({ bottom }) => "translate3d(0," + bottom + "px,0)"};
  transition: 0.3s linear;
  display: inline-block;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
`;
