const SET_IS_OPEN = "mandalartReducer/SET_IS_OPEN" as const;
const SET_MANDALART = "mandalartReducer/SET_MANDALART" as const;

export const setIsOpenCreateMandalart = () => ({
  type: SET_IS_OPEN,
});

export const setMandalart = (mandalart: MandalartState["mandalart"]) => ({
  type: SET_MANDALART,
  payload: mandalart,
});

type MandalartAction =
  | ReturnType<typeof setIsOpenCreateMandalart>
  | ReturnType<typeof setMandalart>;

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
        isOpenCreateMandalart: !state.isOpenCreateMandalart,
      };
    case SET_MANDALART:
      return {
        ...state,
        mandalart: {
          ...state.mandalart,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default mandalartReducer;
