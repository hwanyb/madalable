import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import SNB from "./SNB";

const Base = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.backgroundSecond};
`;
const ContentWrapper = styled.main`
  position: absolute;
  top: 110px;
  left: 250px;
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
