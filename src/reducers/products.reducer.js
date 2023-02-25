import { SET_PRODUCTS } from "../types/products.types";

export const productsInitialState = [];

const countSlice = (state = 0, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUB":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

export default countSlice;
