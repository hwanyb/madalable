import React from "react";
import styled from "styled-components";
import { Icon } from "../../../styles/Common";

const Base = styled.div``;
const ItemWrapper = styled.a``;
const ItemIcon = styled(Icon)``;
const ItemText = styled.p``;

export default function SNB() {
  return (
    <Base>
      <ItemWrapper>
        <ItemIcon className="material-symbols-rounded">home</ItemIcon>
        <ItemText>Home</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemIcon className="material-symbols-rounded">check_circle</ItemIcon>
        <ItemText>To Do</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemIcon className="material-symbols-rounded">
          signal_cellular_alt
        </ItemIcon>
        <ItemText>Overview</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemIcon className="material-symbols-rounded">help</ItemIcon>
        <ItemText>Guide</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemIcon className="material-symbols-rounded">logout</ItemIcon>
        <ItemText>Logout</ItemText>
      </ItemWrapper>
    </Base>
  );
}
