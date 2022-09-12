import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { setIsOpenCreateMandalart } from "../../modules/mandalartReducer";

const Base = styled.div`
  width: 220px;
  height: 220px;
  background-color: ${(props) => props.theme.color.transWhite};
  filter: drop-shadow(4px 4px 4px ${(props) => props.theme.color.shadow});
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  font-size: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color.primary};
`;

type Props = {
  children: ReactNode;
};

export default function MandalartCard({ children }: Props) {
  const dispatch = useDispatch();

  const onCreateClick = () => {
    dispatch(setIsOpenCreateMandalart());
  };

  return <Base onClick={onCreateClick}>{children}</Base>;
}
