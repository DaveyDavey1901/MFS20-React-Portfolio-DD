import styled from "styled-components";
import DDLogoImg from "../../assets/images/sphere.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 6rem;
  height: 5rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-left: 1rem;
  font-weight: 500;
  color: #fdf2f2;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={DDLogoImg} alt="Davids Logo" />
      </LogoImg>
      <LogoText>David Davies</LogoText>
    </LogoWrapper>
  );
}
