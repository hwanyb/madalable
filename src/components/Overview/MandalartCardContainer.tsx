import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../modules";
import {
  setIsOpenedGoalOverview,
  setSelectedMandalart,
} from "../../modules/overviewReducer";
import { Mandalart } from "../../types";
import Empty from "../common/Empty";
import SuccessContainer from "./SuccessContainer";
import MandalartCard from "../common/MandalartCard";
import {
  Base,
  ItemWrapper,
  MandalartAlias,
  MandalartEmoji,
  successOrNot,
  SuccessStamp,
  SuccessStampWrapper,
} from "../Home/MandalartCardContainer";

export default function MandalartCardContainer() {
  const dispatch = useDispatch();

  const myMandalartArr = useSelector(
    (state: RootState) => state.mandalartReducer.myMandalart,
  );
  const onMandalartClick = (
    e: React.SyntheticEvent<HTMLDivElement>,
    mandalart: Mandalart,
  ) => {
    dispatch(setSelectedMandalart(mandalart));
    dispatch(setIsOpenedGoalOverview(true));
  };

  return (
    <Base mandalartLength={myMandalartArr.length}>
      {myMandalartArr.length === 0 && <Empty />}
      {myMandalartArr.map((mandalart, index) => (
        <ItemWrapper
          key={index}
          onClick={(e: React.SyntheticEvent<HTMLDivElement>) =>
            onMandalartClick(e, mandalart)
          }
        >
          {successOrNot(mandalart.success, mandalart.difficulty) && (
            <SuccessStampWrapper>
              <SuccessStamp>SUCCESS</SuccessStamp>
            </SuccessStampWrapper>
          )}
          <MandalartCard color={mandalart.color}>
            <SuccessContainer
              color={mandalart.color}
              success={mandalart.success}
              size={150}
            />
            <MandalartEmoji unified={mandalart.emoji} size={70} />
          </MandalartCard>
          <MandalartAlias>{mandalart.alias}</MandalartAlias>
        </ItemWrapper>
      ))}
    </Base>
  );
}
