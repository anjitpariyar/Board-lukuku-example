import styled from "styled-components";

export const HeaderStyle = styled.header`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2.1rem;
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 9;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  font-size: 1em;

  height: 40px;
  overflow: hidden;
`;

export const Li = styled.li`
  display: bLock;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
    display: flex;
    flex-direction: column;
    & > span {
      height: 40px;
      overflow: hidden;
    }
  }
`;
