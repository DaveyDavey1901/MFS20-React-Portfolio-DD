import styled from "styled-components";

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100rem;
  margin: 2rem 0 1rem 0;
  padding: 2rem;
  background-color: rgba(7, 27, 69, 0.4);
  border-radius: 8px;
`;

const PageTitle = styled.div`
  font-size: 2.8rem;
  margin-top: 1rem;
`;

const SeperatorLine = styled.div`
  display: flex;
  align-items: center;
  width: 18rem;
  margin: 1rem;
  width: 80%;
  height: 2px;
  background-color: #00c9fc;
`;

const PageDetails = styled.div`
  letter-spacing: 3px;
  margin: 8px 0 18px 0;
  font-size: 2rem;
  `;

export function PageHeading(props) {
  return (
    <HeadingContainer>
      <PageTitle>
        <span>{props.title}</span>
      </PageTitle>

      <SeperatorLine></SeperatorLine>

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
