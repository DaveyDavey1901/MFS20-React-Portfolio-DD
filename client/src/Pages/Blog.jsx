import {PageHeading} from "../components/Shared/PageHeading";
import { Container } from "../components/Shared/Container";

export function Blog() {
  return (
    <>
      <Container>
        <PageHeading
          title={"Blog"}
          pageDetails={
            "This page will be where my tech blog will be rendered when complete."
          }
        />
      </Container>
    </>
  );
}
