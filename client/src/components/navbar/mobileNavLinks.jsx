import { useState } from "react";
import styled from "styled-components";
import { Login } from "./login";
import { MenuToggle } from "./menuToggle";
import { Link } from "react-router-dom";

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
  font-weight: 500;
  font-size: 2.4rem;
  display: flex;
  margin-bottom: 1rem;

  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-bottom: 1px solid #ffdd19;
       
    color: #00c9fc;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  fontSize: "inherit",
};

export function MobileLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
     
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/about" style={linkStyle}>
              About Me
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/projects" style={linkStyle}>
              Projects
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/blog" style={linkStyle}>
              Blog
            </Link>
          </LinkItem>
          <Login />
        </LinksWrapper>
      )}
    
    </NavLinksContainer>
  );
}
