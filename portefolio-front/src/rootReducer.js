import { combineReducers } from "redux";
import portefolioReducer from "./reducers/portefolioReducer";
import chatReducer from "./reducers/chatReducer";

const rootReducer = combineReducers({
  portefolio: portefolioReducer,
  chat: chatReducer,
});

export default rootReducer;
