const SET_GOALS_ARR = "goalReducer/SET_GOALS_ARR" as const;
const SET_IS_EDITING = "goalReducer/SET_IS_EDITING" as const;

export const setGaoalsArr = (goalsArr: GoalState["goalsArr"]) => ({
  type: SET_GOALS_ARR,
  payload: goalsArr,
});

export const setIsEditing = () => ({
  type: SET_IS_EDITING,
});

type GoalAction =
  | ReturnType<typeof setGaoalsArr>
  | ReturnType<typeof setIsEditing>;

type GoalState = {
  goalsArr: {
    id: number;
    text: string;
    todos: {
      id: number;
      text: string;
      emoji: string;
      multiple: boolean;
      period: string;
      periodText: string;
      periodRange: string;
      periodNumber: number;
    }[];
  }[];
  isEditing: boolean;
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
  isEditing: false,
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
    case SET_IS_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
      }
    default:
    return state;
  }
}

export default goalReducer;