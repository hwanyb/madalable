import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../modules";
import MandalartCard from "../common/MandalartCard";
import {
  Base,
  ItemWrapper,
  MandalartAlias,
  MandalartEmoji,
} from "../Home/MandalartCardContainer";

const SuccessRateWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SuccessRate = styled.div``;
const BackCircle = styled.div`
  /* position: absolute; */
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.color.transWhite};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
`;
const SuccessRateCircle = styled.div<{ success: number }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    transparent 0% ${(props) => 100 - props.success}%,
    ${(props) => props.color} ${(props) => 100 - props.success}% 100%
  );
  background-size: 150%;
  background-position: center;
  filter: brightness(0.85) saturate(1.3);
  position: absolute;
`;
const FrontCircle = styled.div`
  width: 130px;
  height: 130px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin: 10px;
  z-index: 99;
`;
const SuccessRateText = styled.p`
  color: ${(props) => props.theme.color.fontPrimary};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  position: absolute;
  bottom: 10px;
`;

type Props = {};

export default function MandalartCardContainer({}: Props) {
  const myMandalartArr = useSelector(
    (state: RootState) => state.mandalartReducer.myMandalart,
  );
  return (
    <Base>
      {myMandalartArr.map((myMandalart, index) => (
        <ItemWrapper key={index}>
          <MandalartCard color={myMandalart.color}>
            <SuccessRateWrapper>
              <SuccessRate>
                <BackCircle>
                  <SuccessRateCircle
                    success={myMandalart.success}
                    color={myMandalart.color}
                  />
                  <FrontCircle color={myMandalart.color} />
                </BackCircle>
              </SuccessRate>
              <SuccessRateText>{myMandalart.success} %</SuccessRateText>
            </SuccessRateWrapper>
            <MandalartEmoji unified={myMandalart.emoji} size={70} />
          </MandalartCard>
          <MandalartAlias>{myMandalart.alias}</MandalartAlias>
        </ItemWrapper>
      ))}
    </Base>
  );
}
