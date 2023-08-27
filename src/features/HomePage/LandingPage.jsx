/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import styles from "./LandingPage.module.css";
import { GrCatalog } from "react-icons/gr";
import NavBar from "../Reusable/NavBar";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

export default function LandingPage({ photoNum }) {
  const navigation = useNavigate();

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(../../../public/Images/HomePage/landingPage${photoNum}.jpg)`,
      }}
    >
      <NavBar />
      <div className={styles.outer}>
        <h1>We never hid that our secret ingredient is</h1>

        <span className={styles.love}>love</span>
        <div className={styles.landingPageCTARev}>
          <div className={styles.landingPageReviews}>
            <div className={styles.landingPagePeople}>
              <img
                src="../../../public/Images/HomePage/landingCustomer1.jpg"
                alt="Customer photo"
              />
              <img
                src="../../../public/Images/HomePage/landingCustomer2.jpg"
                alt="Customer photo"
              />
              <img
                src="../../../public/Images/HomePage/landingCustomer3.jpg"
                alt="Customer photo"
              />
              <img
                src="../../../public/Images/HomePage/landingCustomer4.jpg"
                alt="Customer photo"
              />
              <img
                src="../../../public/Images/HomePage/landingCustomer5.jpg"
                alt="Customer photo"
              />
              <img
                src="../../../public/Images/HomePage/landingCustomer6.jpg"
                alt="Customer photo"
              />
            </div>
            <p className={styles.landingPagePeopleTxt}>
              <span>80,000+</span> already tried!
            </p>
          </div>
          <button
            className={styles.CTAbtn}
            onClick={() => navigation("/catalog")}
          >
            <GrCatalog />
            <span>Catalog</span>
          </button>
        </div>
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  photoNum: PropTypes.number,
};
