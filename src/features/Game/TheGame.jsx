/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./TheGame.module.css";

export default function TheGame() {
  return (
    <div className={styles.gameContainer}>
      <div className={styles.birthdayGift}>
        <div className={styles.gift}>
          <input className={styles.check} type="checkbox" />
          <label className={styles.click} htmlFor="click"></label>
          <div className={styles.wishes}>Happy Birthday!</div>
          <div className={styles.sparkles}>
            <div className={styles.spark1}></div>
            <div className={styles.spark2}></div>
            <div className={styles.spark3}></div>
            <div className={styles.spark4}></div>
            <div className={styles.spark5}></div>
            <div className={styles.spark6}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
