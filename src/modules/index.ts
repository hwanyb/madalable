import { combineReducers } from "redux";
import mandalart from "./mandalart";

const rootReducer = combineReducers({
  mandalart,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
