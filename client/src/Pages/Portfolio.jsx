import {PageHeading} from "../components/Shared/PageHeading";
import { Container } from "../components/Shared/Container";

export function Portfolio() {
  return (
    <>
        <PageHeading
          title={"Projects"}
          pageDetails={
            "All completed projects as well as projects 9in development will be displayed here"
          }
        />
      <Container>
      </Container>
    </>
  );
}