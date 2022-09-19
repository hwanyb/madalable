import { AuthState } from "../types";

const SET_IS_LOGGEDIN = "authReducer/SET_IS_LOGGEDIN" as const;
const SET_USER_ID = "authReducer/SET_USER_ID" as const;

export const setIsLoggedin = (isLoggedin: boolean) => ({
  type: SET_IS_LOGGEDIN,
  payload: isLoggedin,
});

export const setUserId = (userId: string) => ({
  type: SET_USER_ID,
  payload: userId,
});

type AuthAction =
  | ReturnType<typeof setIsLoggedin>
  | ReturnType<typeof setUserId>;

const initialState: AuthState = {
  isLoggedin: false,
  userId: "",
};

function authReducer(
  state: AuthState = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case SET_IS_LOGGEDIN:
      return { ...state, isLoggedin: action.payload };
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
}

export default authReducer;
