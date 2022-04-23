import styled from "styled-components";
import { ButtonCta } from "../components/Shared/Button";

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 70vh;
  margin:auto;

  h2{
    text-align:center;
     }
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
  width: 30rem;

  input{
  border: 1px solid #000;
  outline: none;
  background-color: #fff;
  padding: 1rem;
  font-size: 1.2rem;
  transition: 0.3s;
  border-radius: 8px;
    }
`

const Label = styled.label`
  color: #ffdd19;
  margin-top: 1rem;
`;

export function Login() {
  return (
    <ContactContainer>
      <Form autocomplete="on">
        <h2>
          Welcome Back <br /> Time to get to work!
        </h2>
        <Label htmlFor="email">Email</Label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required=""
        />
        <Label htmlFor="password">Password</Label>
        <input
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
