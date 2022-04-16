import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { NavLinks } from "../navbar/navLinks";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  padding: 0 1.5em;
  align-items: center;
  background-color: rgba(7, 27, 69, 0.9);
  border-bottom: 1px solid #ffdd19;
`;

const NavbarLeft = styled.div`
  display: flex;
`;
const NavbarMiddle = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;
const NavbarRight = styled.div`
  display: flex;
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <Logo />
      </NavbarLeft>
      <NavbarMiddle>
        <NavLinks />
      </NavbarMiddle>
      <NavbarRight></NavbarRight>
    </NavbarContainer>
  );
}
