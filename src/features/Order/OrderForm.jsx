/* eslint-disable no-unused-vars */
import styles from "./OrderForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { useEffect, useReducer, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import Swal from "sweetalert2";
import { randomId, validatePhoneNumber } from "../Reusable/helpers";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../../services/ApiOrder";

const initialState = {
  currentDate: new Date().getTime(),
  cakeCheck: false,
  cupcakeCheck: false,
  cakePopCheck: false,
  donutCheck: false,
  cake: 1,
  cupcake: 6,
  cakePop: 12,
  donut: 6,
  orderType: "pickUp",
  fullName: "",
  email: "",
  eventType: "",
  phoneNumber: "",
  street: "",
  city: "",
  country: "",
  allergies: "",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "cakeCheck":
      return { ...state, cakeCheck: action.payload };
    case "cupcakeCheck":
      return { ...state, cupcakeCheck: action.payload };
    case "cakePopCheck":
      return { ...state, cakePopCheck: action.payload };
    case "donutCheck":
      return { ...state, donutCheck: action.payload };
    case "cakes":
      return { ...state, cake: action.payload };
    case "cupcakes":
      return { ...state, cupcake: action.payload };
    case "cakePops":
      return { ...state, cakePop: action.payload };
    case "donuts":
      return { ...state, donut: action.payload };
    case "deliveryChange":
      return { ...state, orderType: action.payload };
    case "phoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "event":
      return { ...state, eventType: action.payload };
    case "name":
      return { ...state, fullName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "street":
      return { ...state, street: action.payload };
    case "city":
      return { ...state, city: action.payload };
    case "country":
      return { ...state, country: action.payload };
    case "allergies":
      return { ...state, allergies: action.payload };
    case "message":
      return { ...state, message: action.payload };
    case "reset":
      return {
        ...state,
        email: initialState.email,
        fullName: initialState.fullName,
        phoneNumber: initialState.phoneNumber,
        eventType: initialState.eventType,
        cakeCheck: initialState.cakeCheck,
        cupcakeCheck: initialState.cupcakeCheck,
        cakePopCheck: initialState.cakePopCheck,
        donutCheck: initialState.donutCheck,
        orderType: initialState.orderType,
        street: initialState.street,
        city: initialState.city,
        country: initialState.country,
        allergies: initialState.allergies,
        message: initialState.message,
      };

    default:
      throw new Error("Action unkonwn");
  }
};

export default function OrderForm() {
  const [
    {
      currentDate,
      cakeCheck,
      cakePopCheck,
      cupcakeCheck,
      donutCheck,
      cake,
      cakePop,
      cupcake,
      donut,
      orderType,
      fullName,
      email,
      eventType,
      phoneNumber,
      street,
      city,
      country,
      allergies,

      message,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [selectedDate, setSelectedDate] = useState(currentDate + 8.64e7);
  const [orderId, setOrderId] = useState(randomId());

  const fullAddress = `${street}, ${city}, ${country}`;

  function handleClickError(err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: err,
    });
  }

  console.log(cake);

  function handleClickSucess(msg) {
    Swal.fire({
      title: "Success",
      text: msg,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      handleClickError("Invalid Phone Number");
      return;
    } else {
      dispatch({
        type: "reset",
      });
      setOrderId(randomId());
      mutate([
        {
          id: orderId,
          name: fullName,
          email: email,
          phoneNumber: phoneNumber,
          orderType: orderType,
          address: fullAddress,
          eventDate: new Date(selectedDate).toISOString(),
          eventType: eventType,
          cakes: `cakes - ${cakeCheck ? cake : 0}`,
          cupcakes: `cupcakes - ${cupcakeCheck ? cupcake : 0}`,
          cakePops: `cakePops - ${cakePopCheck ? cakePop : 0}`,
          donuts: `donuts - ${donutCheck ? donut : 0}`,
          allergies: allergies,
          message: message,
        },
      ]);
    }
  }

  const { isLoading, mutate } = useMutation({
    mutationFn: (Orders) => createOrder(Orders),
    onSuccess: () =>
      handleClickSucess(
        `Your order has been submitted! We will contact you to confirm it in no time.`
      ),
    onError: () =>
      handleClickError(
        "The order was not submitted successfully. Please try again!"
      ),
  });

  return (
    <form className={styles.orderForm} onSubmit={(e) => handleSubmit(e)}>
      <label>Full name</label>
      <input
        type="text"
        placeholder="John Tesla *"
        value={fullName}
        onChange={(e) =>
          dispatch({
            type: "name",
            payload: e.target.value,
          })
        }
        required
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="hello@CinnamonHouse.com *"
        value={email}
        onChange={(e) =>
          dispatch({
            type: "email",
            payload: e.target.value,
          })
        }
        required
      />

      <label>Phone Number</label>
      <input
        type="text"
        placeholder="415-201-6370 *"
        value={phoneNumber}
        onChange={(e) =>
          dispatch({
            type: "phoneNumber",
            payload: e.target.value,
          })
        }
      />
      <label>Order type</label>
      <select
        value={orderType}
        onChange={(e) =>
          dispatch({
            type: "deliveryChange",
            payload: e.target.value,
          })
        }
        required
      >
        <option value={"pickUp"}>Pick up</option>
        <option value={"delivery"}>Delivery</option>
      </select>

      {orderType === "delivery" && (
        <>
          <label>Address</label>
          <div className={styles.address}>
            <input
              type="text"
              placeholder="Street Address *"
              value={street}
              onChange={(e) =>
                dispatch({
                  type: "street",
                  payload: e.target.value,
                })
              }
              required
            />
            <input
              type="text"
              placeholder="City *"
              value={city}
              onChange={(e) =>
                dispatch({
                  type: "city",
                  payload: e.target.value,
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Country *"
              value={country}
              onChange={(e) =>
                dispatch({
                  type: "country",
                  payload: e.target.value,
                })
              }
              required
            />
          </div>
        </>
      )}

      <label>Event type and date</label>
      <div className={styles.event}>
        <input
          type="text"
          placeholder="Wedding *"
          value={eventType}
          onChange={(e) =>
            dispatch({
              type: "event",
              payload: e.target.value,
            })
          }
          required
        />
        <div className="datePicker">
          <DatePicker
            minDate={new Date().getTime() + 8.64e7 * 2}
            selected={selectedDate + 8.64e7}
            onChange={(e) => setSelectedDate(new Date(e).getTime())}
          />
        </div>
      </div>
      <label>Product type</label>
      <div className={styles.productType}>
        <button
          onClick={(e) => (
            e.preventDefault(),
            dispatch({
              type: "cakeCheck",
              payload: !cakeCheck,
            })
          )}
        >
          {cakeCheck && <BsCheckLg />}
        </button>
        <img src="../../../public/Images/Reusable/cakeMenu.png" />
        <div>
          {cakeCheck && (
            <input
              type="number"
              min={1}
              defaultValue={1}
              onChange={(e) =>
                dispatch({
                  type: "cakes",
                  payload: e.target.value,
                })
              }
            />
          )}
        </div>
        <button
          onClick={(e) => (
            e.preventDefault(),
            dispatch({
              type: "cupcakeCheck",
              payload: !cupcakeCheck,
            })
          )}
        >
          {cupcakeCheck && <BsCheckLg />}
        </button>
        <img src="../../../public/Images/Reusable/cupcakeMenu.png" />
        <div>
          {cupcakeCheck && (
            <input
              type="number"
              min={6}
              defaultValue={6}
              onChange={(e) =>
                dispatch({
                  type: "cupcakes",
                  payload: e.target.value,
                })
              }
            />
          )}
        </div>
        <button
          onClick={(e) => (
            e.preventDefault(),
            dispatch({
              type: "cakePopCheck",
              payload: !cakePopCheck,
            })
          )}
        >
          {cakePopCheck && <BsCheckLg />}
        </button>
        <img
          src="../../../public/Images/Reusable/cakePopMenu.png"
          className={styles.cakePop}
        />
        <div>
          {cakePopCheck && (
            <input
              type="number"
              min={12}
              defaultValue={12}
              onChange={(e) =>
                dispatch({
                  type: "cakePops",
                  payload: e.target.value,
                })
              }
            />
          )}
        </div>
        <button
          onClick={(e) => (
            e.preventDefault(),
            dispatch({
              type: "donutCheck",
              payload: !donutCheck,
            })
          )}
        >
          {donutCheck && <BsCheckLg />}
        </button>
        <img src="../../../public/Images/Reusable/donutMenu.png" />
        <div>
          {donutCheck && (
            <input
              type="number"
              min={6}
              defaultValue={6}
              onChange={(e) =>
                dispatch({
                  type: "donuts",
                  payload: e.target.value,
                })
              }
            />
          )}
        </div>
      </div>
      <label>Food intolerances</label>
      <div className={styles.allergies}>
        <ul>
          <li>
            <span>1</span> lactoseli
          </li>
          <li>
            <span>2</span> gluten
          </li>
          <li>
            <span>3</span> fructose
          </li>
          <li>
            <span>4</span> sorbitol
          </li>
          <li>
            <span>5</span> histamine
          </li>
          <li>
            <span>6</span> salicylates
          </li>
        </ul>
        <input
          type="text"
          value={allergies}
          placeholder="Numbers of allergies"
          onChange={(e) =>
            dispatch({
              type: "allergies",
              payload: e.target.value,
            })
          }
        />
      </div>
      <label>Additional instructions</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) =>
          dispatch({
            type: "message",
            payload: e.target.value,
          })
        }
      />
      <button className={styles.submit}>Submit</button>
    </form>
  );
}
