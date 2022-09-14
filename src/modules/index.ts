import { combineReducers } from "redux";
import mandalartReducer from "./mandalartReducer";
import authReducer from "./authReducer";
import goalReducer from "./goalReducer";

const rootReducer = combineReducers({
  mandalartReducer,
  authReducer,
  goalReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;