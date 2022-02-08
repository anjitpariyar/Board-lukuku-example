import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
  position: relative;
  z-index: 3;
  color: ${({ theme }) => theme.colors.white};
  padding: 5em 0;
`;

export const Level1 = styled.span`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`;
