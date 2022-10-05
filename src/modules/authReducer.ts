import { AuthState } from "../types";

const SET_IS_LOGGEDIN = "authReducer/SET_IS_LOGGEDIN" as const;
const SET_SIGNUP_MODE = "authReducer/SET_IS_LOGGSET_SIGNUP_MODEEDIN" as const;
const SET_USER_ID = "authReducer/SET_USER_ID" as const;
const SET_NICKNAME = "authReducer/SET_NICKNAME" as const;

export const setIsLoggedin = (isLoggedin: boolean) => ({
  type: SET_IS_LOGGEDIN,
  payload: isLoggedin,
});

export const setSignupMode = (signupMode: boolean) => ({
  type: SET_SIGNUP_MODE,
  payload: signupMode,
});

export const setUserId = (userId: string) => ({
  type: SET_USER_ID,
  payload: userId,
});

export const setNickname = (nickname: string) => ({
  type: SET_NICKNAME,
  payload: nickname,
});

type AuthAction =
  | ReturnType<typeof setIsLoggedin>
  | ReturnType<typeof setSignupMode>
  | ReturnType<typeof setNickname>
  | ReturnType<typeof setUserId>;

const initialState: AuthState = {
  isLoggedin: false,
  signupMode: false,
  userId: "",
  nickname: "",
};

function authReducer(
  state: AuthState = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case SET_IS_LOGGEDIN:
      return { ...state, isLoggedin: action.payload };
    case SET_SIGNUP_MODE:
      return { ...state, signupMode: action.payload };
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    case SET_NICKNAME:
      return { ...state, nickname: action.payload };
    default:
      return state;
  }
}

export default authReducer;
