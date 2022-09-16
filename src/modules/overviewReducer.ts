const SET_IS_OPENED_GOAL_OVERVIEW =
  "overviewReducer/SET_IS_OPENED_GOAL_OVERVIEW" as const;
const SET_SELECTED_MANDALART =
  "overviewReducer/SET_SELECTED_MANDALART" as const;

export const setIsOpenedGoalOverview = () => ({
  type: SET_IS_OPENED_GOAL_OVERVIEW,
});

export const setSelectedMandalart = (
  selectedMandalart: OverviewState["selectedMandalart"],
) => ({
  type: SET_SELECTED_MANDALART,
  payload: selectedMandalart,
});

type OverviewAction =
  | ReturnType<typeof setIsOpenedGoalOverview>
  | ReturnType<typeof setSelectedMandalart>;

type OverviewState = {
  isOpenedGoalOverview: boolean;
  selectedMandalart: {
    doc_id: string;
    alias: string;
    emoji: string;
    color: string;
    start_date: string;
    end_date: string;
    difficulty: string;
    user_id: string;
    created_at: number;
    success: number;
    goals?:
      | {
          id: number;
          text: string;
          todos:
            | {
                id: number;
                text: string;
                emoji: string;
                multiple: boolean;
                period: string;
                periodText: string;
                periodRange: string;
                periodNumber: number;
              }[]
            | undefined;
        }[]
      | undefined;
  };
};

const initialState: OverviewState = {
  isOpenedGoalOverview: false,
  selectedMandalart: {
    alias: "",
    emoji: "",
    color: "",
    start_date: "",
    end_date: "",
    difficulty: "",
    doc_id: "",
    user_id: "",
    created_at: 0,
    success: 0,
  },
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
    case SET_SELECTED_MANDALART:
      return {
        ...state,
        selectedMandalart: {
          ...state.selectedMandalart,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default overviewReducer;