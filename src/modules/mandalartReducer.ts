const SET_IS_OPEN = "mandalartReducer/SET_IS_OPEN" as const;
const SET_MANDALART = "mandalartReducer/SET_MANDALART" as const;
const SET_MY_MANDALART = "mandalartReducer/SET_MY_MANDALART" as const;

export const setIsOpenCreateMandalart = () => ({
  type: SET_IS_OPEN,
});

export const setMandalart = (mandalart: MandalartState["mandalart"]) => ({
  type: SET_MANDALART,
  payload: mandalart,
});

export const setMyMandalart = (myMandalart: MandalartState["myMandalart"]) => ({
  type: SET_MY_MANDALART,
  payload: myMandalart,
});

type MandalartAction =
  | ReturnType<typeof setIsOpenCreateMandalart>
  | ReturnType<typeof setMandalart>
  | ReturnType<typeof setMyMandalart>;

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
  myMandalart: {
    doc_id: string;
    alias: string;
    emoji: string;
    color: string;
    start_date: string;
    end_date: string;
    difficulty: string;
    user_id: string;
    created_at: number;
  }[];
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
  myMandalart: [],
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
    case SET_MY_MANDALART:
      return {
        ...state,
        myMandalart: [
          ...action.payload,
        ],
      };
    default:
      return state;
  }
}

export default mandalartReducer;
