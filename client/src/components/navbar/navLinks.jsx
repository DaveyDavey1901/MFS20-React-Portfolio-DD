import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  display: flex;
  flex: center;
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
  text-align: center;
  
  border-top: 2px solid transparent;
  transition: all 240ms ease-in-out;
  &:hover {
    border-top: 2px solid #ffdd19;
   
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    color: #00c9fc;
  }
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <StyledLink to="/">Home</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/about">About Me</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/projects">Projects</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/blog">Blog</StyledLink>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
