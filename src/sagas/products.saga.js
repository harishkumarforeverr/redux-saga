import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "../types/products.types";
import productsService from "../services/products.service";
import { setProducts } from "../actions/products.actions";
const APICall = () => {
  return {
    count: 1,
  };
};
function* makeAdd() {
  try {
    const products = yield call(APICall);

    yield put({
      type: "ADD",
      payload: products,
    });
  } catch (e) {}
}

export function* incrementCount() {
  yield takeEvery("ADD", makeAdd);
}
