import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import SNB from "./SNB";

const Base = styled.div``;
const ContentWrapper = styled.main``;

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
