import styled from "styled-components";
import { PageHeading } from "../components/Shared/PageHeading";
import { Container } from "../components/Shared/Container";
import { Flex } from "../components/Shared/Flex";
import { Button, ButtonCta } from "../components/Shared/Button";
import DDAvatarImg from "../../src/Assets/Img/100kprofile.jpg";
import { useNavigate } from "react-router-dom";

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 10rem;
`;

const BrandStatement = styled.div`
  font-size: 1.6rem;
  text-align: justify;
  text-justify: inter-word;
  margin: 2rem;
`;

const Hlight = styled.span`
  color: #ffdd19;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImgFrame = styled.div`
  display: flex;
  border-radius: 12px;
  border: 2px solid #00c9fc;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 2rem;
  max-height: 30rem;
  max-width: 24rem;
`;

const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ffdd19;
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  height: 25rem;
  text-align: left;
  
`;

const H2 = styled.h2`
  color: #ffdd19;
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom:0;
`;
const P = styled.p`
  font-size: 1.4rem;
  text-align:center;
`;
const Ul = styled.ul`
  font-size: 1.4rem;
`;

const ListWrapper = styled.div`
display:flex;
`
export function AboutMe() {
  const navigate = useNavigate();

  return (
    <HeroDiv>
      <PageHeading
        title={"About Me"}
        pageDetails={
          <Hlight>
            {" "}
            DAVID DAVIES <br /> Full Stack Developer
          </Hlight>
        }
      />
      <Container>
        <Flex>
          <ImgFrame>
            <Img src={DDAvatarImg} alt="David Davies" />
          </ImgFrame>

          <BrandStatement>
            I've always been interested in computers and programming from an
            early age, starting with my trusty VIC20 and game coding books...
            unfortunately due to many reasons I turned away from a programming
            course at college and joined the armed forces as a Gun fitter in the
            REME.
            <br />
            <br />
            This has always been a regret, not joining the army but not pursuing
            a programming career. Now I’m trying again determined to reclaim
            that career direction I lost... nothing is going to stop me from
            pursuing and excelling in a career in web development. I have an
            unquestionable thirst for knowledge and coding is going to go a long
            way in quenching it.
            <BtnGroup>
              <ButtonCta onClick={() => navigate("/contact")}>
                Contact Me
              </ButtonCta>
              <a href="https://docs.google.com/document/d/1kf54GtaBC2gDp3jtTX_yXzQcgtsTBntTN-IeMRnBCM4/edit?usp=sharing">
                <Button>Resume / CV</Button>
              </a>
            </BtnGroup>
          </BrandStatement>
        </Flex>
      </Container>
      <Container>
        <Flex>
      <InfoCard>
        <H2>Developer Skills</H2>
        <ListWrapper>
        <Ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap 4/5</li>
          <li>Tailwind CSS</li>
          <li>MySQL</li>
        </Ul>
        <Ul>
          <li>Figma</li>
          <li>Drupal</li>
          <li>Git</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
        </Ul>
        </ListWrapper>
      </InfoCard>
      <InfoCard>
        <H2>Education Highlights</H2>
        <Ul>
          <li>Full Stack Developer Boot Camp</li>
          <li>Computer Maintenance</li>
          <li>Network Engineer</li>
          <li>Mechanical Engineer - REME</li>
          <li>Personnel Trainer </li>
          <li>GCSE Math (A)</li>
          <li>GCSE English (A)</li>
          <li>GCSE Science(B)</li>
        </Ul>
      </InfoCard>
      <InfoCard>
        <H2>Future Goals</H2>
        <P>
          I initally want to cut my teeth in the developer world first as a
          Frontend Developer, then Backend Developer and then Full Stack
          Developer with the confidence that i fully understand the front and
          back end.
        </P>
      </InfoCard>
      </Flex>
      </Container>
    </HeroDiv>
  );
}
