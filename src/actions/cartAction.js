import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constants/cartConstant";
  import axios from "axios";
  
  // Add to Cart
  export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`https://backend-loot-bazar.vercel.app/api/v1/product/${id}`);
  
      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: data.product._id,
          name: data.product.name,
          price: data.product.price,
          image: data.product.images[0].url,
          stock: data.product.stock,
          quantity,
        },
      });
  
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  // Remove From Cart
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  // SAVE SHIPPING INFO
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({ type: SAVE_SHIPPING_INFO, payload: data });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
  