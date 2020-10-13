import axios from "axios";
<<<<<<< HEAD
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
=======
import { CART_ADD_ITEM } from "../constants/cartConstants";
>>>>>>> 6d6463d8022ff3fad475b2a23c96daaa441bdc46

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItem));
};
<<<<<<< HEAD

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
=======
>>>>>>> 6d6463d8022ff3fad475b2a23c96daaa441bdc46
