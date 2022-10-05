import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../modules";
import Layout from "../components/common/layout/Layout";
import GoalOverview from "../components/Overview/GoalOverview";
import MandalartCardContainer from "../components/Overview/MandalartCardContainer";
import { Icon } from "../styles/Common";
import {
  setIsOpenedGoalOverview,
  setIsOpenedTodoOverview,
} from "../modules/overviewReducer";

const BackBtn = styled(Icon)`
  position: absolute;
  top: 30px;
  left: 30px;
  color: ${(props) => props.theme.color.gray};
  transition: all 0.3s ease-in-out;
  z-index: 999999;
  &:hover {
    color: ${(props) => props.theme.color.darkGray};
  }
`;

export default function Overview() {
  const dispatch = useDispatch();

  const { isOpenedGoalOverview, isOpenedTodoOverview } = useSelector(
    (state: RootState) => state.overviewReducer,
  );

  const onBackBtnClick = () => {
    if (isOpenedGoalOverview && !isOpenedTodoOverview) {
      dispatch(setIsOpenedGoalOverview(false));
    } else if (isOpenedTodoOverview) {
      dispatch(setIsOpenedTodoOverview(false));
    }
  };
  return (
    <Layout>
      {isOpenedGoalOverview && (
        <BackBtn className="material-symbols-rounded" onClick={onBackBtnClick}>
          arrow_back_ios_new
        </BackBtn>
      )}
      {isOpenedGoalOverview ? <GoalOverview /> : <MandalartCardContainer />}
    </Layout>
  );
}
