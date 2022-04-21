import styled from "styled-components";

export const ButtonCta = styled.button`
  border-radius: 12px;
  border: none;
  margin: 1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1rem ;
  background-color: #ffdd19;
  color: #071b45;
  border: 0.1rem solid #071b45;

  &:hover {
    background-color: #fdf2f2;
    box-shadow: inset 0 0 0 0.2rem #ffdd19;
  }
`;

export const Button = styled.button`
  border-radius: 12px;
  border: none;
  margin: 1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1rem ;
  background-color: #fdf2f2;
  color: #071b45;
  border: 0.1rem solid #071b45;

  &:hover {
    background-color: #fdf2f2;
    box-shadow: inset 0 0 0 0.2rem #ffdd19;
  }
`;

export const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0.6rem 1rem;
  color: #fdf2f2;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 12px;
  margin-left: 2rem;

  background-color: transparent;
  border: 2px solid #00c9fc;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ffdd19;
  }
`;

