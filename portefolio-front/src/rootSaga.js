import { all } from "redux-saga/effects";
import portefolioSaga from "./sagas/portefolioSaga";

function* rootSaga() {
  yield all([
    portefolioSaga(),
  ]);
}

export default rootSaga;
