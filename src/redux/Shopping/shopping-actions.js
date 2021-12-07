import * as actionTypes from "./shopping-types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('https://my-json-server.typicode.com/benirvingplt/products/products')
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: res.data,
      })
  } catch (err) {
    console.error(err)
    }
}

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
