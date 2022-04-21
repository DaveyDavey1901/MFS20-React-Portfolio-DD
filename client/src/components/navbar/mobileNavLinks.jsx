import { useState } from "react";
import styled from "styled-components";
import { Login } from "./login";
import { MenuToggle } from "./menuToggle";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 99;
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
  font-weight: 500;
  font-size: 2.4rem;
  display: flex;
  margin-bottom: 1rem;

  border-bottom: 2px solid transparent;
  transition: all 240ms ease-in-out;
  &:hover {
    border-bottom: 2px solid #00c9fc;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    color: #ffdd19;
  }
`;

export function MobileLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
     
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
             <LinkItem>
            <StyledLink to="/" >
              Home
            </StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/about">
              About Me
            </StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/projects">
              Projects
            </StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/contact">
              Contact
            </StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/blog">
              Blog
            </StyledLink>
          </LinkItem>
          <Login />
        </LinksWrapper>
      )}
    
    </NavLinksContainer>
  );
}
