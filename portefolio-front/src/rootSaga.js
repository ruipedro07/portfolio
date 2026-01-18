import { all } from "redux-saga/effects";
import portefolioSaga from "./sagas/portefolioSaga";
import chatSaga from "./sagas/chatSaga";

function* rootSaga() {
  yield all([
    portefolioSaga(),
    chatSaga(),
  ]);
}

export default rootSaga;
