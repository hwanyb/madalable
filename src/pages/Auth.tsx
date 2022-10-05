import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../components/common/layout/Header";
import AuthMain from "../components/Auth/AuthMain";
import AuthContainer from "../components/Auth/AuthContainer";
import { Icon } from "../styles/Common";
import { useDispatch } from "react-redux";
import { setSignupMode } from "../modules/authReducer";

const Base = styled.main`
  width: 100vw;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  @media ${(props) => props.theme.windowSize.laptop} {
    flex-direction: column;
  }
`;

const HeaderWrapper = styled.div`
  width: 50vw;
  height: 100px;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.color.background};
  z-index: 5555;
  @media ${(props) => props.theme.windowSize.laptop} {
    width: 100vw;
  }
`;

const AuthBtnWrapper = styled.div`
  position: fixed;
  top: 30px;
  left: calc(50% - 60px);
  transform: translateX(-50%);
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 50px;
  padding: 30px 0;

  @media ${(props) => props.theme.windowSize.laptop} {
    left: initial;
    right: 30px;
    transform: translateX(0);
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    padding: 0;
    top: 10px;
  }
`;
const AuthBtn = styled(Icon)`
  color: ${(props) => props.theme.color.primary};
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:first-child {
    margin-right: 10px;
  }

  & > span {
    font-family: ${(props) => props.theme.fontFamily.noto};
    font-weight: 300;
    font-size: ${(props) => props.theme.fontSize.sm};
    margin-top: 2px;
    display: block;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  &:hover span {
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }
`;

const MainImgWrapper = styled.div`
  position: fixed;
  width: 50vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-image: url(${process.env.PUBLIC_URL}/mockup.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${(props) => props.theme.windowSize.laptop} {
    position: relative;
    width: 100%;
    top: 100px;
    height: 50vh;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    /* mobile viewport bug fix */
    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      min-height: -webkit-fill-available;
    }
  }
`;
const AuthContainerWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  right: 0;
  backdrop-filter: blur(10px);
  z-index: 99999999;
  background-color: ${(props) => props.theme.color.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.windowSize.mobile} {
    /* mobile viewport bug fix */
    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      min-height: -webkit-fill-available;
    }
  }
`;

export default function Auth() {
  const modalRef = useRef(null);

  const dispatch = useDispatch();

  const [isOpenedAuthForm, setIsOpenedAuthForm] = useState<boolean>(false);

  const onAuthBtnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.target instanceof Element) {
      setIsOpenedAuthForm(true);
      if (e.target.id === "signup") {
        dispatch(setSignupMode(true));
      } else {
        dispatch(setSignupMode(false));
      }
    }
  };
  const onModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      setIsOpenedAuthForm(false);
    }
  };

  useEffect(() => {
    if (isOpenedAuthForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <AuthBtnWrapper>
        <AuthBtn
          className="material-symbols-rounded"
          onClick={onAuthBtnClick}
          id="login"
        >
          login
          <span>로그인</span>
        </AuthBtn>
        <AuthBtn
          className="material-symbols-rounded"
          onClick={onAuthBtnClick}
          id="signup"
        >
          account_circle
          <span>회원가입</span>
        </AuthBtn>
      </AuthBtnWrapper>
      <Base>
        <MainImgWrapper />
        <AuthMain />
        {isOpenedAuthForm && (
          <AuthContainerWrapper
            ref={modalRef}
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              onModalOutsideClick(e)
            }
          >
            <AuthContainer setIsOpenedAuthForm={setIsOpenedAuthForm} />
          </AuthContainerWrapper>
        )}
      </Base>
    </>
  );
}
