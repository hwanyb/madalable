const SET_GOALS_ARR = "goalReducer/SET_GOALS_ARR" as const;
const SET_IS_EDITING_GOAL = "goalReducer/SET_IS_EDITING_GOAL" as const;
const SET_IS_EDITING_TODO = "goalReducer/SET_IS_EDITING_TODO" as const;
const SET_SELECTED_GOAL = "goalReducer/SET_SELECTED_GOAL" as const;
const SET_SELECTED_TODO = "goalReducer/SET_SELECTED_TODO" as const;
const SET_IS_OPENED_TODO_DETAIL =
  "goalReducer/SET_IS_OPENED_TODO_DETAIL" as const;

export const setGaoalsArr = (goalsArr: GoalState["goalsArr"]) => ({
  type: SET_GOALS_ARR,
  payload: goalsArr,
});

export const setIsEditingGoal = () => ({
  type: SET_IS_EDITING_GOAL,
});
export const setIsEditingTodo = () => ({
  type: SET_IS_EDITING_TODO,
});
export const setIsOpenedTodoDetail = () => ({
  type: SET_IS_OPENED_TODO_DETAIL,
});
export const setSelectedGoal = (selectedGoal: GoalState["selectedGoal"]) => ({
  type: SET_SELECTED_GOAL,
  payload: selectedGoal,
});

export const setSelectedTodo = (selectedTodo: GoalState["selectedTodo"]) => ({
  type: SET_SELECTED_TODO,
  payload: selectedTodo,
});

type GoalAction =
  | ReturnType<typeof setGaoalsArr>
  | ReturnType<typeof setIsEditingGoal>
  | ReturnType<typeof setIsEditingTodo>
  | ReturnType<typeof setSelectedTodo>
  | ReturnType<typeof setSelectedGoal>
  | ReturnType<typeof setIsOpenedTodoDetail>;

type GoalState = {
  selectedGoal: {
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
  };
  selectedTodo: {
    id: number;
    text: string;
    emoji: string;
    multiple: boolean;
    period: string;
    periodText: string;
    periodRange: string;
    periodNumber: number;
  };
  goalsArr: {
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
  }[];
  isEditingGoal: boolean;
  isEditingTodo: boolean;
  isOpenedTodoDetail: boolean;
};

let tempGoalsArr = [];
for (let i = 0; i < 8; i++) {
  let tempTodosArr = [];
  for (let j = 0; j < 8; j++) {
    tempTodosArr[j] = {
      id: j + 1,
      text: "",
      emoji: "",
      multiple: false,
      period: "",
      periodText: "",
      periodRange: "",
      periodNumber: 0,
    };
  }
  tempGoalsArr[i] = {
    id: i + 1,
    text: "",
    todos: tempTodosArr,
  };
}

const initialState: GoalState = {
  goalsArr: tempGoalsArr,
  isEditingGoal: false,
  isEditingTodo: false,
  isOpenedTodoDetail: false,
  selectedGoal: {
    id: 0,
    text: "",
    todos: [],
  },
  selectedTodo: {
    id: 0,
    text: "",
    emoji: "",
    multiple: false,
    period: "",
    periodText: "",
    periodRange: "",
    periodNumber: 0,
  },
};

function goalReducer(
  state: GoalState = initialState,
  action: GoalAction,
): GoalState {
  switch (action.type) {
    case SET_GOALS_ARR:
      return {
        ...state,
        goalsArr: [...action.payload],
      };
    case SET_IS_EDITING_GOAL:
      return {
        ...state,
        isEditingGoal: !state.isEditingGoal,
      };
    case SET_IS_EDITING_TODO:
      return {
        ...state,
        isEditingTodo: !state.isEditingTodo,
      };
    case SET_IS_OPENED_TODO_DETAIL:
      return {
        ...state,
        isOpenedTodoDetail: !state.isOpenedTodoDetail,
      };
    case SET_SELECTED_GOAL:
      return {
        ...state,
        selectedGoal: {
          ...state.selectedGoal,
          ...action.payload,
        },
      };
    case SET_SELECTED_TODO:
      return {
        ...state,
        selectedTodo: {
          ...state.selectedTodo,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default goalReducer;
