import {PageHeading} from "../components/Shared/PageHeading";
import styled from "styled-components";
import {Card} from "../components/Shared/Card";
import content from "../../src/content";

const CardContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`
const ProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
`;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 10rem;
`;

const Hlight = styled.span`
  color: #ffdd19;
`;
export function Portfolio() {
  return (
    <HeroDiv >
      <PageHeading
        title={"Projects"}
        pageDetails={
          <Hlight>Browse all currently completed projects as well as those that are in development. Not all are Live and some do not have a figma design</Hlight>
        }
      />
     
        <CardContainer>
          <ProjectCardWrapper>
            
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
          
          </ProjectCardWrapper>
       </CardContainer>
    
    </HeroDiv>
  );
}



