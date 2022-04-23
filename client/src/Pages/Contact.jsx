import styled from "styled-components";
import { ButtonCta } from "../components/Shared/Button";
import contactmeImg from "../Assets/Img/contactme.jpeg";
import { useState } from "react";
import { validateEmail } from "../components/Utils/helpers";

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;

  p {
    margin: 1rem;
    text-align: center;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(7, 27, 69, 0.9);
  border: 1px solid #ffdd19;
  border-radius: 12px;
  max-width: 70rem;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    margin: 4rem;
    padding: 1rem;
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
  border-left: 1px solid #ffdd19;

  img {
    width: 100%;
    height: 100%;
  }

  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-top: 1px solid #ffdd19;
    border-left: none;
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  text-align: center;
  max-width: 70rem;
`;

const Textarea = styled.textarea`
  border: 2px solid #fff;
  outline: none;
  background-color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  transition: 0.3s;
  border-radius: 8px;
  resize: none;
  height: 50%;
  width: 25rem;
  margin-bottom: -2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 36rem;
  }
`;

const Input = styled.input`
  border: 2px solid #fff;
  outline: none;
  background-color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  transition: 0.3s;
  border-radius: 8px;
`;

const Label = styled.label`
  color: #ffdd19;
  margin-top: 1rem;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 1.4rem;
`;

const Hlight = styled.span`
  color: #ffdd19;
  text-decoration:none;
  
`;

export function Contact() {
  // state variables for the fields in the form and setting them to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [myMsg, setMyMsg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input from any changes
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMyMsg(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // First we check to see if the email is not valid or if the
    if (!validateEmail(email)) {
      setErrorMessage("Please Enter Valid Email");
      return;
    }

    alert(`${userName} Your message has been sent.`);

    // clear out the input after message is sent successfully.
    setEmail("");
    setUserName("");
    setMyMsg("");
    setErrorMessage("");
  };

  return (
    <ContactContainer>
      <FormWrapper>
        <TextInfo>
          <img src={contactmeImg} alt="mail background" />
          <p>Hello {userName}</p>
          <p>
            Please feel free to get in touch with me if you have any questions.
          </p>
          
            <p>
              <Hlight>Address:</Hlight> Wigan, Greater Manchester, UK
            </p>
            <p>
              <Hlight>My Email:</Hlight> David_Davies@mail.com
            </p>
         
          <img src={contactmeImg} alt="mail background" />
        </TextInfo>

        <Form action="https://submit-form.com/VYOGDzCJ" autocomplete="on">
          <Label htmlFor="userName">Name</Label>
          <Input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="First / Last Name"
          />
          <Label htmlFor="email">Email:</Label>
          <Input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          {errorMessage && (
            <div>
              <ErrorMsg>{errorMessage}</ErrorMsg>
            </div>
          )}
          <Label htmlFor="myMsg">Message</Label>
          <Textarea
            id="myMsg"
            value={myMsg}
            name="myMsg"
            onChange={handleInputChange}
            placeholder="Message"
          ></Textarea>
          <br />
          <ButtonCta type="submit" onClick={handleFormSubmit}>
            Send
          </ButtonCta>
        </Form>
      </FormWrapper>
    </ContactContainer>
  );
}
