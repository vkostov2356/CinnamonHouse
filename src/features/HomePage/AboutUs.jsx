/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsFillSunsetFill } from "react-icons/bs";
import PropTypes from "prop-types";
import Ribbon from "../Reusable/Ribbon";
import styles from "./AboutUs.module.css";
import Customers from "./Customers";
import FastOrder from "./FastOrder";

export default function AboutUs({ photoNum }) {
  const [curCustomer, setCurCustomer] = useState(1);

  function handleCurCustomerInc() {
    if (curCustomer === 5) {
      setCurCustomer(1);
    } else {
      setCurCustomer((cur) => cur + 1);
    }
  }
  function handleCurCustomerDec() {
    if (curCustomer === 1) {
      setCurCustomer(5);
    } else {
      setCurCustomer((cur) => cur - 1);
    }
  }
  function handleCurCustomer(value) {
    setCurCustomer(value);
  }

  return (
    <div className={styles.aboutUsSection}>
      <div className={styles.aboutUsBox}>
        <div className={styles.aboutUs}>
          <Ribbon headingTxt={"About us"} />
          <div className={styles.aboutUsText}>
            <img src="../../../public/Images/Reusable/shopInterior.jpeg" />
            <div className={styles.aboutUsInfo}>
              <h3>The beginning</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit minus, optio facere, eum repellat dolores non ut omnis
                explicabo, id laboriosam quis ipsam modi officia quos sequi.
                Eius, consequatur tempore.
              </p>
            </div>

            <div className={styles.aboutUsInfo}>
              <h3>Recipe book</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit minus, optio facere, eum repellat dolores non ut omnis
                explicabo, id laboriosam quis ipsam modi officia quos sequi.
                Eius, consequatur tempore.
              </p>
              <button className={styles.purchaseNow}>Purchase now</button>
            </div>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="../../../public/Images/HomePage/recipeBook.jpeg" />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="../../../public/Images/HomePage/RecipeBookOpen.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonials}>
          <Ribbon headingTxt={"Reviews"} />
          <Customers
            currentCustomer={curCustomer}
            onhandleDec={handleCurCustomerDec}
            onhandleInc={handleCurCustomerInc}
            onSetCurCustomer={setCurCustomer}
            onHandleCurCustomer={handleCurCustomer}
          />
        </div>
        <div className={styles.fastOrder}>
          <Ribbon headingTxt={"Fast Order"} />
          <FastOrder photoNum={photoNum} />
        </div>
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  photoNum: PropTypes.number,
};
