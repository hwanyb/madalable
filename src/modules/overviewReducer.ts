import { OverviewState } from "../types";

const SET_IS_OPENED_GOAL_OVERVIEW =
  "overviewReducer/SET_IS_OPENED_GOAL_OVERVIEW" as const;
const SET_IS_OPENED_TODO_OVERVIEW =
  "overviewReducer/SET_IS_OPENED_TODO_OVERVIEW" as const;
const SET_SELECTED_MANDALART =
  "overviewReducer/SET_SELECTED_MANDALART" as const;
const SET_SELECTED_GOAL = "overviewReducer/SET_SELECTED_GOAL" as const;

export const setIsOpenedGoalOverview = (isOpenedGoalOverview: boolean) => ({
  type: SET_IS_OPENED_GOAL_OVERVIEW,
  payload: isOpenedGoalOverview,
});
export const setIsOpenedTodoOverview = (isOpenedTodoOverview: boolean) => ({
  type: SET_IS_OPENED_TODO_OVERVIEW,
  payload: isOpenedTodoOverview,
});

export const setSelectedMandalart = (
  selectedMandalart: OverviewState["selectedMandalart"],
) => ({
  type: SET_SELECTED_MANDALART,
  payload: selectedMandalart,
});
export const setSelectedGoal = (
  selectedTodo: OverviewState["selectedGoal"],
) => ({
  type: SET_SELECTED_GOAL,
  payload: selectedTodo,
});

type OverviewAction =
  | ReturnType<typeof setIsOpenedGoalOverview>
  | ReturnType<typeof setIsOpenedTodoOverview>
  | ReturnType<typeof setSelectedMandalart>
  | ReturnType<typeof setSelectedGoal>;

const initialState: OverviewState = {
  isOpenedGoalOverview: false,
  isOpenedTodoOverview: false,
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
  selectedGoal: {
    id: 0,
    text: "",
    todos: [],
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
        isOpenedGoalOverview: action.payload,
      };
    case SET_IS_OPENED_TODO_OVERVIEW:
      return {
        ...state,
        isOpenedTodoOverview: action.payload,
      };
    case SET_SELECTED_MANDALART:
      return {
        ...state,
        selectedMandalart: {
          ...state.selectedMandalart,
          ...action.payload,
        },
      };
    case SET_SELECTED_GOAL:
      return {
        ...state,
        selectedGoal: {
          ...state.selectedGoal,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default overviewReducer;
