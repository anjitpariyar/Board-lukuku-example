import styled from "styled-components";

export const Section = styled.section`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 3;
  mix-blend-mode: exclusion;
`;

export const Level1 = styled.span`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`;

export const Empty = styled.span`
  display: block;
  width: 220px;
  height: 125px;
  /* background-color: #444; */
`;
