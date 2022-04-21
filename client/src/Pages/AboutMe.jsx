import {PageHeading} from "../components/Shared/PageHeading";
import { Container } from "../components/Shared/Container";


export function AboutMe() {
  return (
    <>
      <Container>
        <PageHeading
          title={"About Me"}
          pageDetails={`David Davies - Full Stack Web Developer`}
        />
      </Container>
    </>
  );
}
