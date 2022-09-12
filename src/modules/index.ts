import { combineReducers } from "redux";
import mandalartReducer from "./mandalartReducer";

const rootReducer = combineReducers({
  mandalartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
