import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../modules";
import {
  setIsOpenedGoalOverview,
  setSelectedMandalart,
} from "../../modules/overviewReducer";
import MandalartCard from "../common/MandalartCard";
import {
  Base,
  ItemWrapper,
  MandalartAlias,
  MandalartEmoji,
  selectedMandalart,
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
  width: 150px;
  height: 150px;
  background-color: #ffffff52;
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
  const dispatch = useDispatch();

  const myMandalartArr = useSelector(
    (state: RootState) => state.mandalartReducer.myMandalart,
  );

  const onMandalartClick = (
    e: React.SyntheticEvent<HTMLDivElement>,
    mandalart: selectedMandalart,
  ) => {
    dispatch(setSelectedMandalart(mandalart));
    dispatch(setIsOpenedGoalOverview());
  };

  return (
    <Base>
      {myMandalartArr.map((mandalart, index) => (
        <ItemWrapper
          key={index}
          onClick={(e: React.SyntheticEvent<HTMLDivElement>) =>
            onMandalartClick(e, mandalart)
          }
        >
          <MandalartCard color={mandalart.color}>
            <SuccessRateWrapper>
              <SuccessRate>
                <BackCircle>
                  <SuccessRateCircle
                    success={mandalart.success}
                    color={mandalart.color}
                  />
                  <FrontCircle color={mandalart.color} />
                </BackCircle>
              </SuccessRate>
              <SuccessRateText>{mandalart.success} %</SuccessRateText>
            </SuccessRateWrapper>
            <MandalartEmoji unified={mandalart.emoji} size={70} />
          </MandalartCard>
          <MandalartAlias>{mandalart.alias}</MandalartAlias>
        </ItemWrapper>
      ))}
    </Base>
  );
}
