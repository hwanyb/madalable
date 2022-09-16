import { combineReducers } from "redux";
import mandalartReducer from "./mandalartReducer";
import authReducer from "./authReducer";
import goalReducer from "./goalReducer";
import overviewReducer from "./overviewReducer";

const rootReducer = combineReducers({
  mandalartReducer,
  authReducer,
  goalReducer,
  overviewReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;