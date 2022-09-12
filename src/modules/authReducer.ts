const SET_IS_LOGGEDIN = "authReducer/SET_IS_LOGGEDIN" as const;

export const setIsLoggedin = (isLoggedin: boolean) => ({
  type: SET_IS_LOGGEDIN,
  payload: isLoggedin
});

type AuthAction = ReturnType<typeof setIsLoggedin>;

type AuthState = {
  isLoggedin: boolean;
};

const initialState: AuthState = {
  isLoggedin: false,
};

function authReducer(
  state: AuthState = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case SET_IS_LOGGEDIN:
      return { ...state, isLoggedin: !state.isLoggedin };
    default:
      return state;
  }
}

export default authReducer;
