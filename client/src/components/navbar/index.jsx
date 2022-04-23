import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../Shared/Logo";
import { NavLinks } from "./navLinks";
import { Login } from "./login";
import { ThemeSize } from "../Responsive";
import { MobileLinks } from "./mobileNavLinks";

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
  margin: 0;
`;
const NavbarMiddle = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;

 `;
const NavbarRight = styled.div`
  display: flex;
  margin: 4rem;
`;

export function Navbar(props) {
  const isTablet = useMediaQuery({ maxWidth: ThemeSize.tablet });

  return (
    <NavbarContainer>
      <NavbarLeft>
        <Logo />
      </NavbarLeft>
      <NavbarMiddle>{!isTablet && <NavLinks />}</NavbarMiddle>
      <NavbarRight>
        {!isTablet && <Login />}
        {isTablet && <MobileLinks />}
      </NavbarRight>
    </NavbarContainer>
  );
}
