import { combineReducers } from "redux";
import mandalartReducer from "./mandalartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  mandalartReducer,
  authReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
