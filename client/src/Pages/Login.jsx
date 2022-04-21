import {PageHeading} from "../components/Shared/PageHeading";
import { Container } from "../components/Shared/Container";

export function Login() {
  return (
    <>
      <Container>
        <PageHeading
          title={"Login"}
          pageDetails={
            "I'll be able to log into my dashboard here where i will be able to set preferences for my portfolio as well as update any blogs"
          }
        />
      </Container>
    </>
  );
}
