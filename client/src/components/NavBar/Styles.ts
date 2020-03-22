import styled, {keyframes} from "styled-components";

import { colour } from "../../utils/Styles";

export const NavContainer = styled.div`

`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 200000002;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const keyframes1 = keyframes`
0% { -webkit-transform: scale(0.0); }
30% { -webkit-transform: scale(0.0); }
100% { -webkit-transform: scale(1); }
`;

export const NavLink = styled.div<{ navOpen: boolean }>`
  color: #597F7C;
  font-size: 30px;
  font-weight: 900;
  z-index: 200000000;
  animation: ${keyframes1} 0.5s;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
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
  z-index: 200000001;
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
  z-index: 200000002;
`;

export const HamburgerSpan = styled.div`
  width: 80%;
  height: 4px;
  right: 0;
  border-radius: 20%;
  background-color: #597F7C;
`;