/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createFastForm } from "../../services/ApiFastForm";
import { randomId, validatePhoneNumber } from "../Reusable/helpers";

import styles from "./FastOrder.module.css";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export default function FastOrder({ photoNum }) {
  const currentDate = new Date().getTime();
  const [selectedDate, setSelectedDate] = useState(currentDate + 8.64e7);
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [randomCode, setRandomCode] = useState(0);

  useEffect(() => {
    selectedDate && setRandomCode(randomId());
  }, [selectedDate, setRandomCode]);

  function handleClickError(err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: err,
    });
  }

  function handleClickSucess(msg) {
    Swal.fire({
      title: "Success",
      text: msg,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validatePhoneNumber(tel)) {
      handleClickError("Invalid Phone Number");
      return;
    } else {
      setTel("");
      setSelectedDate(currentDate + 8.64e7 * 2);
      setName("");
      setEvent("");
      mutate([
        {
          id: randomCode,
          name: name,
          phoneNumber: tel,
          pickUpDate: new Date(selectedDate).toISOString(),
          event: event,
        },
      ]);
    }
  }

  const { isLoading, mutate } = useMutation({
    mutationFn: (FastOrder) => createFastForm(FastOrder),
    onSuccess: () =>
      handleClickSucess(
        `Your order has been submitted! We will contact you as soon as possible to complete it.`
      ),
    onError: () =>
      handleClickError(
        "The order was not submitted successfully. Please try again!"
      ),
  });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      style={{
        backgroundImage: `url(../../../public/images/HomePage/landingPage${photoNum}.jpg)`,
      }}
    >
      <input
        type="text"
        value={name}
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div className="datePicker">
        <DatePicker
          minDate={new Date().getTime() + 8.64e7 * 2}
          selected={selectedDate}
          onChange={(e) => setSelectedDate(new Date(e).getTime())}
        />
      </div>
      <input
        type="text"
        value={tel}
        placeholder="415-201-6370"
        onChange={(e) => setTel(e.target.value)}
        required
      />

      <input
        type="text"
        value={event}
        placeholder="Event Type"
        onChange={(e) => setEvent(e.target.value)}
        required
      />

      <button className={styles.submitForm} disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}
