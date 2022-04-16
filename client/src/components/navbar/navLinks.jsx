import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  backgroundcolor: #666;
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
  color: #fdf2f2;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #ffdd19;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">About Me</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Projects</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Contact</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Blog</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
