import React from "react";
import styled from "styled-components";

const Base = styled.header``;
const LogoImg = styled.img``;

export default function Header() {
  return (
    <Base>
      <LogoImg src={process.env.PUBLIC_URL + "/logo_header.png"} />
    </Base>
  );
}
