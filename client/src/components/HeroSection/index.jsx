import styled from "styled-components";
import { Container } from "../Shared/Container";
import { Flex } from "../Shared/Flex";
import { Button, ButtonCta } from "../Shared/Button";
import DDAvatarImg from "../../Assets/Img/100kprofile.jpg";
import { useNavigate, } from "react-router-dom";

const HeroDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`;

const HeroText = styled.div`
  margin: 0 4rem;
`;

const Hlight = styled.span`
  color: #00c9fc;
`;

const ImgFrame = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 2px solid #00c9fc;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 1rem;
  max-height: 30rem;
  max-width: 25rem;
`;

export function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <HeroDiv>
      <Container>
        <Flex>
          <HeroText>
            <h1>
              Hello I'm <Hlight>DAVID DAVIES</Hlight>
            </h1>

            <p>
              I'm a <Hlight>Front End Developer</Hlight> with drive and passion
              to deliver apps and products to the client that truly highlights
              and promotes the core of their businesses. Being ex-military, I am
              focused, work well under pressure, excel in a team and driven to
              deliver on time whatever is asked of me.
              <br></br>
              <br></br>
              Trained as a <Hlight>Full Stack Developer</Hlight> at Manchester
              University Boot Camp where I earned a certificate.
            </p>

            <ButtonCta onClick={() => navigate('/contact')}>Contact Me</ButtonCta>
            <a href="https://docs.google.com/document/d/1kf54GtaBC2gDp3jtTX_yXzQcgtsTBntTN-IeMRnBCM4/edit?usp=sharing">
              <Button>Resume / CV</Button>
            </a>
          </HeroText>
        <ImgFrame>
          <img src={DDAvatarImg} alt="David Davies" />
        </ImgFrame>
        </Flex>
      </Container>
    </HeroDiv>
  );
}
