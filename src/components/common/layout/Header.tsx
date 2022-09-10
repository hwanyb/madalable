import React from "react";
import styled from "styled-components";

const Base = styled.header`
  height: 50px;
  padding: 30px;
  display: flex;
`;
const LogoImg = styled.img`
  height: 50px;
  margin-right: 10px;
`;
const LogoText = styled.h1`
  align-self: flex-end;
  font-family: ${(props) => props.theme.fontFamily.aggro};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.color.primary};
  font-weight: 500;
`;

export default function Header() {
  return (
    <Base>
      <LogoImg src={process.env.PUBLIC_URL + "/logo192.png"} />
      <LogoText>mandalable</LogoText>
    </Base>
  );
}
