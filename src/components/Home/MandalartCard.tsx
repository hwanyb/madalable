import React, { ReactNode } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 220px;
  height: 220px;
  background-color: #ffffffc0;
  filter: drop-shadow(4px 4px 4px rgba(87, 87, 87, 0.1));
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
  onCreateClick: () => void;
  mandalart: boolean;
};

export default function MandalartCard({
  children,
  onCreateClick,
  mandalart,
}: Props) {
  console.log(mandalart);
  return <Base onClick={onCreateClick}>{children}</Base>;
}
