import styled from "styled-components";

import { colour } from "../../utils/Styles";

export const NavContainer = styled.div`
`;

export const Circle = styled.div<{ navOpen: boolean }>`
  width: ${(props) => (props.navOpen ? "180%" : "80px")};
  height: ${(props) => (props.navOpen ? "180%" : "80px")};
  position: fixed;
  right: ${(props) => (props.navOpen ? "-400px" : "0")};
  top: ${(props) => (props.navOpen ? "-400px" : "0")};
  margin: 10px;
  border-radius: 50%;
  background-color: ${colour.secondary};
  transition: 0.4s;
`;

export const Hamburger = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  right: 0;
  margin: 25px;
  cursor: pointer;
`;

export const HamburgerSpan = styled.div`
  width: 80%;
  height: 5px;
  right: 0;
  border-radius: 10%;
  background-color: ${colour.primary};
`;