import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../modules";
import Layout from "../components/common/layout/Layout";
import GoalOverview from "../components/Overview/GoalOverview";
import MandalartCardContainer from "../components/Overview/MandalartCardContainer";

export default function Overview() {
  const isOpenedGoalOverview = useSelector(
    (state: RootState) => state.overviewReducer.isOpenedGoalOverview,
  );

  return (
    <Layout>
      {isOpenedGoalOverview ? <GoalOverview /> : <MandalartCardContainer />}
    </Layout>
  );
}
