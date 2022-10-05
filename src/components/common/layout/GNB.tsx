import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { authService } from "../../../firebase";
import { Icon } from "../../../styles/Common";

const Base = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 40px;
  right: 5vw;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  z-index: 999999;
  @media ${(props) => props.theme.windowSize.mobile} {
    right: initial;
    width: 80vw;
    top: initial;
    bottom: 0;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.background};
    height: 80px;
  }
`;
const ItemIcon = styled(Icon)`
  transition: all 0.2s ease;
`;
const ItemText = styled.h3`
  font-family: ${(props) => props.theme.fontFamily.noto};
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.sm};
  position: relative;
  white-space: nowrap;
  text-align: center;
  margin-top: 5px;
  color: ${(props) => props.theme.color.primary};
`;
const ItemWrapper = styled(Link)<{ location: string }>`
  cursor: pointer;
  color: ${(props) => props.theme.color.primary};
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (hover: hover) {
    &:hover ${ItemIcon} {
      transform: scale(1.2);
      transition: all 0.2s ease;
    }
  }

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: transparent;
    margin-top: 5px;
    border-radius: 10px;
    transition: all 0.2s ease;
  }
  ${(props) =>
    props.location === props.className &&
    css`
      &::after {
        background-color: ${(props) => props.theme.color.primary};
        transition: all 0.2s ease;
      }
    `}
`;
const LogoutBtn = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.color.primary};
  display: flex;
  transition: all 0.2s ease;

  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
    }
    &:hover ${ItemIcon} {
      transform: scale(1.2);
      transition: all 0.2s ease;
    }
  }
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: transparent;
    margin-top: 5px;
    border-radius: 10px;
    transition: all 0.2s ease;
  }
`;
export default function GNB() {
  const onLogoutClick = () => {
    const result = window.confirm("로그아웃하시겠습니까?");
    if (result) {
      authService.signOut();
    }
  };
  const location = useLocation().pathname;
  return (
    <Base>
      <ItemWrapper to="/" className="/" location={location}>
        <ItemIcon className="material-symbols-rounded">home</ItemIcon>
        <ItemText>Home</ItemText>
      </ItemWrapper>
      <ItemWrapper to="/todo" className="/todo" location={location}>
        <ItemIcon className="material-symbols-rounded">check_circle</ItemIcon>
        <ItemText>To Do</ItemText>
      </ItemWrapper>
      <ItemWrapper to="/overview" className="/overview" location={location}>
        <ItemIcon className="material-symbols-rounded">
          signal_cellular_alt
        </ItemIcon>
        <ItemText>Overview</ItemText>
      </ItemWrapper>
      <LogoutBtn onClick={onLogoutClick}>
        <ItemIcon className="material-symbols-rounded">logout</ItemIcon>
        <ItemText>Logout</ItemText>
      </LogoutBtn>
    </Base>
  );
}
