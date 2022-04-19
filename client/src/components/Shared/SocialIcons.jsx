import styled from "styled-components";
import {
  FaGithub,
  FaCodepen,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";

const MySocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    border-bottom: 2px solid #00c9fc;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    height: 2.4rem;
    width: 2.4rem;
    color: #ffdd19;
    text-decoration: none;

    cursor: pointer;
    &:hover {
      color: #00c9fc;
      border-bottom: 2px solid #ffdd19;
    }
  }
`;
export function SocialIcons() {
  return (
    <MySocialIcons>
      <li>
        <a href="https://github.com/DaveyDavey1901">
          <FaGithub size={20} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/david-davies-762aa192/">
          <FaLinkedin size={20} />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/daveydavey1901">
          <FaCodepen size={20} />
        </a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/16315460/david-davies1901">
          <FaStackOverflow size={20} />
        </a>
      </li>
    </MySocialIcons>
  );
}
