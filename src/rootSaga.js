import { all } from "redux-saga/effects";
import { incrementCount } from "./sagas/products.saga";

export default function* rootSaga() {
  yield all([incrementCount()]);
}
