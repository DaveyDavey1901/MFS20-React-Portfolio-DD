import styled from "styled-components";
import {LoginButton} from '../Shared/Button'

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Login(props) {
  return (
    <LoginContainer>
       <LoginButton>Login</LoginButton>
    </LoginContainer>
  );
}
