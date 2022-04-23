import styled from "styled-components";
import { PageHeading } from "../components/Shared/PageHeading";

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;

  p{
    text-align: center;
  }
`;

const Hlight = styled.span`
  color: #ffdd19;
  font-size: 1.8rem;
  font-weight:500;
`;

export function Blog() {
  return (
    <BlogContainer>
      <PageHeading
        title={"Blog"}
        pageDetails={
          <p><Hlight>WORK IN PROGRESS</Hlight> <br /> This page will be where my tech blog will be rendered when complete.</p>
        }
      />
    </BlogContainer>
  );
}
