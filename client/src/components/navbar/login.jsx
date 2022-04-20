import styled from "styled-components";
import {LoginButton} from '../Shared/Button'
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Login(props) {
  const navigate = useNavigate();
  return (
    <LoginContainer>
       <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
    </LoginContainer>
  );
}
