import styled from "styled-components";
import { ButtonCta, Button } from "./Button";


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(7, 27, 69, 0.9);
  border: 1px solid #ffdd19;
  border-radius: 12px;
  margin: 1rem;
  padding: 1rem;
 
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
    
  }
`;

const ProjectInfo = styled.div`
  background-color: rgba(7, 27, 69);
  border: 1px solid #ffdd19;
  border-radius: 12px;
  padding: 1rem;
  height:20rem;
  margin: 1rem;
  
  h2{
   text-align: center;
   color: #00c9fc;
 }
`;

const ImgFrame = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid #ffdd19;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 1rem;
  width: auto;
`;

const Hlight = styled.span`
  text-align: center;
  color: #ffdd19;
  margin-left: 1rem;
 `;


export function Card({ item: { id, title, body, image, liveLink, githubLink,figma,tech} }) {
  return (
    <StyledCard>
      <ProjectInfo>
        <h2>{title}</h2>
        <p>Tech:<Hlight>{tech}</Hlight></p>
        <p>{body}</p>
        
      </ProjectInfo>
      <ImgFrame>
        <img src={require(`../../Assets/Img/${image}`)} alt="" />
      </ImgFrame>
      <div>
        <a href={liveLink}>
          <ButtonCta>Live</ButtonCta>
        </a>
        <a href={githubLink}>
          <Button>GitHub</Button>
        </a>
        <a href={figma}>
          <Button>Figma</Button>
        </a>
      </div>
    </StyledCard>
  );
}
