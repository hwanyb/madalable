import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../../../firebase";
import { Icon } from "../../../styles/Common";

const Base = styled.div`
  width: 200px;
  box-sizing: border-box;
  margin-top: 30px;
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
`;
const ItemWrapper = styled(Link)<{location: string}>`
  display: flex;
  cursor: pointer;
  color: ${(props) => props.location === props.className ? props.theme.color.white : props.theme.color.primary};
  margin-bottom: 10px;
  border-radius: 0 50px 50px 0;
  padding-left: 30px;
  transition: all 0.2s ease;
  text-decoration: none;
  background-color: ${(props) => props.location === props.className ? props.theme.color.primary : "transparent"};
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
  display: flex;
  cursor: pointer;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 10px;
  border-radius: 0 50px 50px 0;
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
      <ItemWrapper to="/guide" className='/guide' location={location}>
        <ItemIcon className="material-symbols-rounded">help</ItemIcon>
        <ItemText>Guide</ItemText>
      </ItemWrapper>
      <LogoutBtn onClick={onLogoutClick}>
        <ItemIcon className="material-symbols-rounded">logout</ItemIcon>
        <ItemText>Logout</ItemText>
      </LogoutBtn>
    </Base>
  );
}
