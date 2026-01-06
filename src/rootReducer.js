import { combineReducers } from "redux";
import portefolioReducer from "./reducers/portefolioReducer";

const rootReducer = combineReducers({
  portefolio: portefolioReducer,
});

export default rootReducer;
