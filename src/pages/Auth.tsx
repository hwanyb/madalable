import React from "react";
import styled from "styled-components";
import AuthMain from "../components/AuthMain";
import Header from "../components/common/layout/Header";

const Base = styled.main`
  width: 100vw;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
`;
const MainImgWrapper = styled.div`
  position: fixed;
  width: 50%;
  overflow: hidden;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 999999;
`;
const MockupImg = styled.img`
  height: 100vh;
`;

export default function Auth() {
  return (
    <>
      <Header />
      <Base>
        <AuthMain />
        <MainImgWrapper>
          <MockupImg src={process.env.PUBLIC_URL + "/mac_mockup.jpg"} />
        </MainImgWrapper>
      </Base>
    </>
  );
}
