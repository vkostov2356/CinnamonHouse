/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./GameForm.module.css";

export default function GameForm({ onHandleGame, onRandomNum }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setName("");
    onHandleGame(e);
    onRandomNum();
  }

  return (
    <form className={styles.gameForm} onSubmit={(e) => handleSubmit(e)}>
      <input
        value={name}
        type="text"
        placeholder="Full name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        type="email"
        placeholder="hello@CinnamonHouse.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button>Play</button>

      {/* {isSubmitted && (
        <img src="../../../public/Images/Game/cupcakeDance.gif" />
      )} */}
    </form>
  );
}
