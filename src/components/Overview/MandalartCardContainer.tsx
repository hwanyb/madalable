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
import SuccessContainer from "./SuccessContainer";

export default function MandalartCardContainer() {
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
            <SuccessContainer color={mandalart.color} success={mandalart.success} size={150} />
            <MandalartEmoji unified={mandalart.emoji} size={70} />
          </MandalartCard>
          <MandalartAlias>{mandalart.alias}</MandalartAlias>
        </ItemWrapper>
      ))}
    </Base>
  );
}
