import { combineReducers } from "redux";
import mandalartReducer from "./mandalartReducer";
import authReducer from "./authReducer";
import goalReducer from "./goalReducer";
import overviewReducer from "./overviewReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  mandalartReducer,
  authReducer,
  goalReducer,
  overviewReducer,
  appReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;