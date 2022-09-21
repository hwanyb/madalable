import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { authService } from "../../../firebase";
import { Icon } from "../../../styles/Common";

const ToggleBtn = styled(Icon)`
  transition: all 0.5s ease-in-out;
  color: ${(props) => props.theme.color.background};
  position: absolute;
  right: -20px;
  height: 24px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
    color: ${(props) => props.theme.color.fontPrimary};
  }
`;

const Base = styled.div<{ snbIsOpened: boolean }>`
  height: 100%;
  box-sizing: border-box;
  margin-top: 30px;
  position: relative;
  transition: all 0.5s ease-in-out;
  &:hover ${ToggleBtn} {
    color: ${(props) => props.theme.color.gray};
    transition: all 0.5s ease-in-out;
  }
  ${(props) =>
    props.snbIsOpened
      ? css`
          width: 250px;
        `
      : css`
          width: 50px;
          ${ItemText} {
            display: none;
          }
          ${ItemWrapper} {
            padding-left: 5px;
          }
          ${LogoutBtn} {
            padding-left: 5px;
          }
        `}
`;
const ItemIcon = styled(Icon)`
  line-height: 40px;
  margin-right: 10px;
`;
const ItemText = styled.h3`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: 40px;
  position: relative;
  top: 2px;
  white-space: nowrap;
`;
const ItemWrapper = styled(Link)<{ location: string }>`
  width: 70%;
  display: flex;
  cursor: pointer;
  color: ${(props) =>
    props.location === props.className
      ? props.theme.color.white
      : props.theme.color.primary};
  margin-bottom: 10px;
  border-radius: 0 10px 10px 0;
  padding-left: 30px;
  transition: all 0.2s ease;
  text-decoration: none;
  background-color: ${(props) =>
    props.location === props.className
      ? props.theme.color.primary
      : "transparent"};
  &:hover {
    background-color: ${(props) => props.theme.color.primary};
  }
  &:hover ${ItemIcon} {
    color: ${(props) => props.theme.color.white};
  }
  &:hover ${ItemText} {
    color: ${(props) => props.theme.color.white};
  }
`;
const LogoutBtn = styled.div`
  width: 70%;
  display: flex;
  cursor: pointer;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 10px;
  border-radius: 0 10px 10px 0;
  padding-left: 30px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.color.primary};
  }
  &:hover ${ItemIcon} {
    color: ${(props) => props.theme.color.white};
  }
  &:hover ${ItemText} {
    color: ${(props) => props.theme.color.white};
  }
`;
export default function SNB() {
  const [snbIsOpened, setSnbIsOpened] = useState(
    JSON.parse(localStorage.getItem("SNB")),
  );
  useEffect(() => {
    localStorage.setItem("SNB", JSON.stringify(snbIsOpened));
  });
  const onLogoutClick = () => {
    const result = window.confirm("로그아웃하시겠습니까?");
    if (result) {
      authService.signOut();
    }
  };
  const onToggleSnbClick = () => {
    setSnbIsOpened(!snbIsOpened);
  };
  const location = useLocation().pathname;
  return (
    <Base snbIsOpened={snbIsOpened}>
      <ToggleBtn
        onClick={onToggleSnbClick}
        className="material-symbols-rounded"
        id={snbIsOpened ? "close" : "open"}
      >
        {snbIsOpened
          ? "keyboard_double_arrow_left"
          : "keyboard_double_arrow_right"}
      </ToggleBtn>
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
