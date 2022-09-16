const SET_IS_OPENED_GOAL_OVERVIEW =
  "overviewReducer/SET_IS_OPENED_GOAL_OVERVIEW" as const;

export const setIsOpenedGoalOverview = () => ({
  type: SET_IS_OPENED_GOAL_OVERVIEW,
});

type OverviewAction = ReturnType<typeof setIsOpenedGoalOverview>;

type OverviewState = {
  isOpenedGoalOverview: boolean;
};

const initialState: OverviewState = {
  isOpenedGoalOverview: false,
};

function overviewReducer(
  state: OverviewState = initialState,
  action: OverviewAction,
): OverviewState {
  switch (action.type) {
    case SET_IS_OPENED_GOAL_OVERVIEW:
      return {
        ...state,
        isOpenedGoalOverview: !state.isOpenedGoalOverview,
      };
    default:
      return state;
  }
}

export default overviewReducer;