import styled from "styled-components";
import { PageHeading } from "../components/Shared/PageHeading";

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`;

export function Blog() {
  return (
    <BlogContainer>
      <PageHeading
        title={"Blog"}
        pageDetails={
          <p>WORK IN PROGRESS <br /> This page will be where my tech blog will be rendered when complete.</p>
        }
      />
    </BlogContainer>
  );
}
