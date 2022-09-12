const SET_IS_OPEN = "mandalartReducer/SET_IS_OPEN" as const;
const SET_MANDALART = "mandalartReducer/SET_MANDALART" as const;
// const SET_ALIAS = "mandalartReducer/SET_ALIAS" as const;
// const SET_EMOJI = "mandalartReducer/SET_EMOJI" as const;
// const SET_COLOR = "mandalartReducer/SET_COLOR" as const;
// const SET_START_DATE = "mandalartReducer/SET_START_DATE" as const;
// const SET_END_START_DATE = "mandalartReducer/SET_END_START_DATE" as const;
// const SET_DIFFICULTY = "mandalartReducer/SET_DIFFICULTY" as const;


export const setIsOpenCreateMandalart = () => ({
  type: SET_IS_OPEN,
});


export const setMandalart = (mandalart: MandalartState['mandalart']) => ({
  type: SET_MANDALART,
  payload: mandalart
});
// export const setAlias = (alias: string) => ({
//   type: SET_ALIAS,
//   payload: alias
// });
// export const setEmoji = (emoji: string) => ({
//   type: SET_EMOJI,
//   payload: emoji
// });
// export const setColor = (color: string) => ({
//   type: SET_COLOR,
//   payload: color
// });
// export const setStartDate = (startDate: string) => ({
//   type: SET_START_DATE,
//   payload: startDate
// });
// export const setEndDate = (endtDate: string) => ({
//   type: SET_END_START_DATE,
//   payload: endtDate
// });
// export const setDifficulty = (diffuculty: string) => ({
//   type: SET_DIFFICULTY,
//   payload: diffuculty
// });


type MandalartAction = 
  |ReturnType<typeof setIsOpenCreateMandalart>
  |ReturnType<typeof setMandalart>
  // |ReturnType<typeof setAlias>
  // |ReturnType<typeof setEmoji>
  // |ReturnType<typeof setColor>
  // |ReturnType<typeof setStartDate>
  // |ReturnType<typeof setEndDate>
  // |ReturnType<typeof setDifficulty>;
  
type MandalartState = {
  isOpenCreateMandalart: boolean;

  mandalart: {
    alias: string;
    emoji: string;
    color: string;
    startDate: string;
    endDate: string;
    difficulty: string;
  };
};

const initialState: MandalartState = {
  isOpenCreateMandalart: false,
  mandalart: {
    alias: "",
    emoji: "",
    color: "",
    startDate: "",
    endDate: "",
    difficulty: "",
  },
};

function mandalartReducer(
  state: MandalartState = initialState,
  action: MandalartAction,
): MandalartState {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpenCreateMandalart: !state.isOpenCreateMandalart
      };
    case SET_MANDALART:
      return {
        ...state,
        mandalart: {
          ...state.mandalart,
          ...action.payload,
        }
        };
    default:
      return state;
  }
}

export default mandalartReducer;
