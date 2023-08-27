/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
import styles from "./CakeItem.module.css";
import { LuVegan } from "react-icons/lu";
import { BiEuro } from "react-icons/bi";
import { GiPieSlice } from "react-icons/gi";

export default function CakeItems({ cake }) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img src={cake.image} className={styles.itemPhoto} />
          <div className={styles.itemDetails}>
            <p className={styles.name}>{cake.name}</p>
          </div>
          {cake.vegan && (
            <div className={styles.veganSticker}>
              <LuVegan />
            </div>
          )}
          <p className={styles.servings}>
            {cake.pieces} <GiPieSlice />
          </p>
        </div>
        <div className={styles.flipCardBack}>
          <p className={styles.ingredients}>
            Allergies: {cake.ingredients} {<br />} Code: {cake.id}
          </p>
          <p className={styles.price}>
            {cake.price}
            <span>
              <BiEuro />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
