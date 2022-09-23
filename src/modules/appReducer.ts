const SET_WINDOW_SIZE = "appReducer/SET_WINDOW_SIZE" as const;

export const setWindowSize = (windowSize: number) => ({
  type: SET_WINDOW_SIZE,
  payload: windowSize,
});

type AppAction = ReturnType<typeof setWindowSize>;

type AppState = {
  windowSize: number;
};

const initialState: AppState = {
  windowSize: window.innerWidth,
};

function appReducer(
  state: AppState = initialState,
  action: AppAction,
): AppState {
  switch (action.type) {
    case SET_WINDOW_SIZE:
      return { ...state, windowSize: action.payload };
    default:
      return state;
  }
}

export default appReducer;
