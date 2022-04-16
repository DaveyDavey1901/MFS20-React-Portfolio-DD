import React from "react";
import styled from "styled-components";
import DDLogoImg from "../../assets/images/55_Hitech_Sphere.jpg";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 1.6rem;
  margin: 0;
  margin-left: 4px;
  font-weight: 500;
  color: #fdf2f2;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={DDLogoImg} alt="Davids Logo" />
      </LogoImg>
      <LogoText>David Davies Portfolio</LogoText>
    </LogoWrapper>
  );
}
