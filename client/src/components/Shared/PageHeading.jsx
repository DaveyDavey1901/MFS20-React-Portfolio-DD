import styled from "styled-components";

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 0 5rem 0;
`;

const PageTitle = styled.div`
  font-size: 48px;
  color: #fff;
`;

const SeperatorContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 180px;
  margin: 10px 0 0 0;
`;
const SeperatorLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: Yellow;
`;
const PageDetails = styled.div`
  letter-spacing: 3px;
  margin: 8px 0 18px 0;
  font-size: 1.6rem;
  color: #fff;
`;

export function PageHeading(props) {
  return (
    <HeadingContainer>
      <PageTitle>
        <span>{props.title}</span>
      </PageTitle>

      <SeperatorContainer>
        <SeperatorLine>
          <div></div>
        </SeperatorLine>
      </SeperatorContainer>

      {props.pageDetails ? (
        <PageDetails>
          <span>{props.pageDetails}</span>
        </PageDetails>
      ) : (
        <div></div>
      )}
    </HeadingContainer>
  );
}
