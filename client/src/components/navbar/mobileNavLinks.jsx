import { useState } from "react";
import styled from "styled-components";
import { Login } from "./login";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: rgba(7, 27, 69, 0.9);
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: #fdf2f2;
  font-weight: 500;
  font-size: 2.4rem;
  display: flex;
  margin-bottom: 1rem;

  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-bottom: 2px solid #ffdd19;
    color: #00c9fc;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function MobileLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="#">About us</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">How it works</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Explore</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Impact</Link>
          </LinkItem>
          <Login />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
