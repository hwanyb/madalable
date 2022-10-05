import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import GNB from "./GNB";

const Base = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  justify-content: center;
  align-items: end;
  @media ${props => props.theme.windowSize.mobile} {
    /* mobile viewport bug fix */
    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      min-height: -webkit-fill-available;
    }
  }
`;
const ContentWrapper = styled.main`
  position: relative;
  background-color: ${(props) => props.theme.color.backgroundSecond};
  width: 90vw;
  height: calc(100vh - 130px);
  padding: 50px 100px;
  box-sizing: border-box;
  border-radius: 3rem 3rem 0 0;
  @media ${props => props.theme.windowSize.laptop}{
  padding: 30px 50px;
  }
  @media ${props => props.theme.windowSize.tablet}{
  padding: 20px 30px;
  }
  @media ${props => props.theme.windowSize.mobile}{
    height: calc(100vh - 160px);
    bottom: 80px;
    border-radius: 3rem;
    padding: 10px;
    @supports (-webkit-touch-callout: none) {
      height: calc(100vh - 250px);
    }
  }
`;

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Base>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <GNB />
    </Base>
  );
}
