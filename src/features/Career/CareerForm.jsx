/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./CareerForm.module.css";
import Swal from "sweetalert2";
import { randomId, validatePhoneNumber } from "../Reusable/helpers";

export default function CareerForm() {
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");

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
      handleClickSucess(
        `Your details have been submitted successfully. We will review your CV and get back to you as soon as we have any news for you!`
      );
      setTel("");
      setEmail("");
      setName(""), setFile("");
      setMessage("");
    }
  }
  return (
    <div className={styles.form}>
      <h3>
        You are interested in a non-listed position? Please fill out the form
        below and if your talent and expertise fit our team, we will get back to
        you shortly.
      </h3>

      <form className={styles.careerForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="415-201-6370"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="hello@CinnamonHouse.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="file"
          placeholder="CV"
          className={styles.careerFormFile}
          value={file}
          onChange={(e) => setFile(e.target.value)}
          required
        />
        <textarea
          type="text"
          placeholder="Message"
          className={styles.careerFormMsg}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className={styles.careerFormSubmit}> SUBMIT </button>
      </form>
    </div>
  );
}
