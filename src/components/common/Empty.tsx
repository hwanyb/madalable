import React from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EmptyLogo = styled.img``;
const EmptyText = styled.h3`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  color: ${(props) => props.theme.color.gray};
  margin: 50px 0;
`;
const CreateMandalartBtn = styled.button`
  margin-top: 20px;
`;

export default function Empty() {
  return (
    <Base>
      <EmptyLogo src={process.env.PUBLIC_URL + "/logo_gray200.png"} />
      <EmptyText>생성한 만다라트가 없습니다.</EmptyText>
      <CreateMandalartBtn>만다라트 생성하기</CreateMandalartBtn>
    </Base>
  );
}
