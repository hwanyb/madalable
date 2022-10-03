import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../components/common/layout/Header";
import AuthMain from "../components/Auth/AuthMain";
import AuthContainer from "../components/Auth/AuthContainer";
import { Icon } from "../styles/Common";

const Base = styled.main`
  width: 100vw;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  @media ${(props) => props.theme.windowSize.laptop} {
    flex-direction: column;
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

  @media ${(props) => props.theme.windowSize.laptop} {
    left: auto;
    right: 30px;
    transform: translateX(0);
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
  width: 50%;
  overflow: hidden;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 999999;

  @media ${(props) => props.theme.windowSize.laptop} {
    position: relative;
    width: 100%;
    z-index: 999;
    top: 110px;
  }
`;
const MockupImg = styled.img`
  height: 100vh;
  @media ${(props) => props.theme.windowSize.laptop} {
    height: 80vh;
  }
`;
const AuthContainerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  right: 0;
  backdrop-filter: blur(10px);
  z-index: 99999999;
  background-color: ${(props) => props.theme.color.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Auth() {
  const modalRef = useRef(null);

  const [isOpenedAuthForm, setIsOpenedAuthForm] = useState<boolean>(false);

  const onAuthBtnClick = () => {
    setIsOpenedAuthForm(true);
  };
  const onModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      setIsOpenedAuthForm(false);
    }
  };

  useEffect(() => {
    if (isOpenedAuthForm) {
      document.body.style.overflow = "hidden";
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.body.style.overflow = "scroll";
    }
  });
  return (
    <>
      <Header />
      <AuthBtnWrapper>
        <AuthBtn className="material-symbols-rounded" onClick={onAuthBtnClick}>
          login
          <span>로그인</span>
        </AuthBtn>
        <AuthBtn className="material-symbols-rounded" onClick={onAuthBtnClick}>
          account_circle
          <span>회원가입</span>
        </AuthBtn>
      </AuthBtnWrapper>
      <Base>
        <MainImgWrapper>
          <MockupImg src={process.env.PUBLIC_URL + "/mac_mockup.jpg"} />
        </MainImgWrapper>

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
