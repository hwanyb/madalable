const SET_IS_OPENED_CREATE_MANDALART = "mandalartReducer/SET_IS_OPENED_CREATE_MANDALART" as const;
const SET_IS_OPENED_MANDALART_DETAIL = "mandalartReducer/SET_IS_OPENED_MANDALART_DETAIL" as const;
const SET_MANDALART = "mandalartReducer/SET_MANDALART" as const;
const SET_MY_MANDALART = "mandalartReducer/SET_MY_MANDALART" as const;
const SET_SELECTED_MANDALART =
  "mandalartReducer/SET_SELECTED_MANDALART" as const;

export const setIsOpenedCreateMandalart = () => ({
  type: SET_IS_OPENED_CREATE_MANDALART,
});
export const setIsOpenedMandalartDetail = () => ({
  type: SET_IS_OPENED_MANDALART_DETAIL,
});

export const setMandalart = (mandalart: MandalartState["mandalart"]) => ({
  type: SET_MANDALART,
  payload: mandalart,
});

export const setMyMandalart = (myMandalart: MandalartState["myMandalart"]) => ({
  type: SET_MY_MANDALART,
  payload: myMandalart,
});
export const setSelectedMandalart = (
  selectedMandalart: MandalartState["selectedMandalart"],
) => ({
  type: SET_SELECTED_MANDALART,
  payload: selectedMandalart,
});
type MandalartAction =
  | ReturnType<typeof setIsOpenedCreateMandalart>
  | ReturnType<typeof setIsOpenedMandalartDetail>
  | ReturnType<typeof setMandalart>
  | ReturnType<typeof setMyMandalart>
  | ReturnType<typeof setSelectedMandalart>;

export type MandalartState = {
  isOpenedCreateMandalart: boolean;
  isOpenedMandalartDetail: boolean;

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
    goals?: any;
  };
};

const initialState: MandalartState = {
  isOpenedCreateMandalart: false,
  isOpenedMandalartDetail: false,
  mandalart: {
    alias: "",
    emoji: "",
    color: "",
    startDate: "",
    endDate: "",
    difficulty: "",
  },
  myMandalart: [],
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
  },
};

function mandalartReducer(
  state: MandalartState = initialState,
  action: MandalartAction,
): MandalartState {
  switch (action.type) {
    case SET_IS_OPENED_CREATE_MANDALART:
      return {
        ...state,
        isOpenedCreateMandalart: !state.isOpenedCreateMandalart,
      };
    case SET_IS_OPENED_MANDALART_DETAIL:
      return {
        ...state,
        isOpenedMandalartDetail: !state.isOpenedMandalartDetail,
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
        myMandalart: [...action.payload],
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

export default mandalartReducer;
