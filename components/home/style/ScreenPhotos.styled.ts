import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  z-index: 1;
`;

export const Empty = styled.span`
  display: block;
  width: 220px;
  height: 125px;
  background-color: #444;
`;

export const Hide = styled.span`
  visibility: hidden;
  pointer-events: none;
`;
export const Icon = styled.span`
  svg {
    height: 5.8rem;
    width: auto;
  }
`;
