import React, { useRef, useState } from "react";
import styled from "styled-components";

import AuthMain from "../components/AuthMain";
import Header from "../components/common/layout/Header";
import AuthContainer from "../components/AuthContainer";
import { Icon } from "../styles/Common";

const Base = styled.main`
  width: 100vw;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
`;

const AuthBtnWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 60px);
  transform: translateX(-50%);
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 50px;
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
`;
const MockupImg = styled.img`
  height: 100vh;
`;
const AuthContainerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  right: 0;
  backdrop-filter: blur(10px);
  z-index: 99999999;
  background-color: ${props=>props.theme.color.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function Auth() {
  const modalRef = useRef(null);

  const [isOpenedAuthForm, setIsOpenedAuthForm] = useState<boolean>(false);

  const onAuthBtnClick = () => {
    setIsOpenedAuthForm(true);
  }
  const onModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if(e.target === modalRef.current) {
      setIsOpenedAuthForm(false);
    }
  }
  return (
    <>
      <Header />
      <Base>
        <AuthBtnWrapper>
          <AuthBtn
            className="material-symbols-rounded"
            onClick={onAuthBtnClick}
          >
            login
            <span>로그인</span>
          </AuthBtn>
          <AuthBtn
            className="material-symbols-rounded"
            onClick={onAuthBtnClick}
          >
            account_circle
            <span>회원가입</span>
          </AuthBtn>
        </AuthBtnWrapper>
        <AuthMain />
        <MainImgWrapper>
          <MockupImg src={process.env.PUBLIC_URL + "/mac_mockup.jpg"} />
        </MainImgWrapper>
        {isOpenedAuthForm && (
          <AuthContainerWrapper ref={modalRef} onClick={(e: React.MouseEvent<HTMLDivElement>) => onModalOutsideClick(e)}>
            <AuthContainer setIsOpenedAuthForm={setIsOpenedAuthForm} />
          </AuthContainerWrapper>
        )}
      </Base>
    </>
  );
}
