import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transition: opacity 2s ease-in-out;
  @media ${props => props.theme.windowSize.mobile} {
    /* mobile viewport bug fix */
    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      min-height: -webkit-fill-available;
    }
  }
`;
const Logo = styled.img`
  width: 192px;
  opacity: 0;
  transition: opacity 2s ease-in-out, transform 1.5s ease-in-out;
  @media ${(props) => props.theme.windowSize.tablet} {
    width: 150px;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    width: 130px;
  }
`;
const LogoText = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 700;
  color: ${(props) => props.theme.color.primary};
  margin-top: 50px;
  opacity: 0;
  position: relative;
  bottom: -50px;
  transition: opacity 1.5s 1.2s ease-in-out, bottom 0.8s 0.7s ease-in-out;
  @media ${(props) => props.theme.windowSize.tablet} {
    margin-top: 40px;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    margin-top: 30px;
  }
`;

export default function Loading() {
  const baseRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      logoRef.current.style.opacity = 1;
    }, 600);
    setTimeout(() => {
      logoRef.current.style.transform = "rotate(450deg)";
      textRef.current.style.opacity = 1;
      textRef.current.style.bottom = 0;
    }, 1000);
    return () => {
      if (baseRef.current !== null) {
        setTimeout(() => {
          baseRef.current.style.opacity = 0;
        }, 4000);
      }
    };
  }, []);
  return (
    <Base ref={baseRef}>
      <Logo src={process.env.PUBLIC_URL + "/logo192.png"} ref={logoRef} />
      <LogoText ref={textRef}>mandalable</LogoText>
    </Base>
  );
}
