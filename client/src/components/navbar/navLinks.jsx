import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkItem = styled.li`
  display: flex;
  height: 95%;
  padding: 0 1.1em;

  font-weight: 500;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  text-align:center;

  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #ffdd19;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  fontSize: "inherit",
}

export function NavLinks(props) {
  return (
     
    <NavLinksContainer>
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
        </LinksWrapper>
    </NavLinksContainer>
      
  );
}
