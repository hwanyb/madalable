import React from "react";
import styled from "styled-components";

const Base = styled.header`
  position: fixed;
  width: 90vw;
  top: 0;
  padding: 30px;
  display: flex;
  z-index: 999999;
  @media ${(props) => props.theme.windowSize.mobile} {
    padding: 15px;
  }
`;

const LogoImg = styled.img`
  height: 50px;
  margin-right: 10px;
  @media ${(props) => props.theme.windowSize.mobile} {
    height: 30px;
  }
`;
const LogoText = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.color.primary};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export default function Header() {
  return (
    <Base>
      <LogoImg src={process.env.PUBLIC_URL + "/logo192.png"} />
      <LogoText>mandalable</LogoText>
    </Base>
  );
}
