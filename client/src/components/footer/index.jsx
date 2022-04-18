import styled from "styled-components";



const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  padding-top: 2rem;
  align-items: center;
  background-color: rgba(7, 27, 69, 0.9);
  border-top: 1px solid #ffdd19;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const FooterLeft = styled.div`
  display: flex;
  margin-right: 4rem;
`;
const FooterMiddle = styled.div`
  display: flex;
  flex: 2;
  
`;
const FooterRight = styled.div`
  display: flex;
  margin-right: 4rem;
`;

export function Footer(props) {
  
  return (
    <FooterContainer>
      
      <FooterLeft>
              </FooterLeft>
      <FooterMiddle>

      </FooterMiddle>
      <FooterRight>
        
      </FooterRight>
    </FooterContainer>
  );
}
