import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0.6rem 3rem;
  color: #fdf2f2;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 12px;
  margin-left: 2rem;
 

  background-color: transparent;
  border: 2px solid #00c9fc;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
        background-color: #00c9fc;
  }
  
`;

export function Login(props) {
  return (
    <LoginContainer>
       <LoginButton>Login</LoginButton>
    </LoginContainer>
  );
}
