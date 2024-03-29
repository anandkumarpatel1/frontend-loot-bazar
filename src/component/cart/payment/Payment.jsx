import React, { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../checkoutStep/CheckoutSteps";
import "./style.css";
import MetaData from "../../layout/metaData/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { clearErrors, createOrder } from "../../../actions/orderAction";


const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const [cashOn, setCashOn] = useState("cod")

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://backend-loot-bazar.vercel.app/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if(cashOn === 'cod'){
        dispatch(createOrder(order))
        navigate('/success')
      }

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;
        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order))
          navigate("/success");
        } else {
          alert.error("There's some issue while processing payment.");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <div className="payment">
        <CheckoutSteps activeStep={2} />
        <div className="paymentContainer">
          <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
            <Typography>Card Info</Typography>
            <div>
              <input type="radio"  className="my-payment-radio"/>
              cash on delivery (COD)
            </div>
            <input
              type="submit"
              value={`COD - ₹${orderInfo && orderInfo.totalPrice}`}
              ref={payBtn}
              className="paymentFormBtn"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;