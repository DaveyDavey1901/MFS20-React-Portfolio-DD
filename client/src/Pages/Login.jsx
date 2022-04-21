import styled from "styled-components";
import { ButtonCta } from "../components/Shared/Button";

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  background-color: rgba(7, 27, 69, 0.9);
  border: 1px solid #ffdd19;
  border-radius: 12px;
  height: 30vh;
  width: 25vw;
`;

const Input = styled.input`
  border: 2px solid #fff;
  outline: none;
  background-color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  transition: 0.3s;
  border-radius: 8px;
  margin-bottom: -1rem;
`;

const Label = styled.label`
  color: #ffdd19;
  margin-top: 1rem;
`;

const P = styled.p`
  margin: 1rem;
  text-align: center;
`;
export function Login() {
  return (
    <ContactContainer>
      
      <Form>
        <P>Welcome Back <br /> Time to get to work!</P>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required=""
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required=""
        />

        <br />
        <ButtonCta type="submit">Submit</ButtonCta>
      </Form>
    </ContactContainer>
  );
}
