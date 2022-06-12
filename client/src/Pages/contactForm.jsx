import styled from "styled-components";
import contactmeImg from "../Assets/Img/contactme.jpeg";
import { ButtonCta } from "../components/Shared/Button";

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

const Hlight = styled.span`
  color: #ffdd19;
  text-decoration: none;
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
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 36rem;
  }
`;

export function ContactForm(props) {
  return (
    <ContactContainer>
      <FormWrapper>
        <TextInfo>
          <img src={contactmeImg} alt="mail background" />
          <p>
            Please feel free to get in touch with me if you have any
            questions.
          </p>

          <p>
            <Hlight>Address:</Hlight> Wigan, Greater Manchester, UK
          </p>
          <p>
            <Hlight>My Email:</Hlight> David_Davies@mail.com
          </p>

          <img src={contactmeImg} alt="mail background" />
        </TextInfo>
        <Form action="https://submit-form.com/VYOGDzCJ">
          <Label for="name">Name</Label>
          <Input type="text" id="name" name="name" required="" />
          <Label for="email">Email</Label>
          <Input type="email" id="email" name="email" required="" />
          <Label for="message">Message</Label>
          <Textarea id="message" name="message" required=""></Textarea>
          <ButtonCta type="submit">Send</ButtonCta>
        </Form>
      </FormWrapper>
    </ContactContainer>
  );
}
