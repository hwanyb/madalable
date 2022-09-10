import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import SNB from "./SNB";

const Base = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.background};
`;
const ContentWrapper = styled.main`
  position: absolute;
  right: 0;
  top: 110px;
  background-color: ${(props) => props.theme.color.backgroundSecond};
  width: 80vw;
  height: calc(100vh - 110px);
  border-radius: 50px 0 0 0;
  padding: 50px;
  box-sizing: border-box;
`;

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Base>
      <Header />
      <SNB />
      <ContentWrapper>{children}</ContentWrapper>
    </Base>
  );
}
