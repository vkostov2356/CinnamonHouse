/* eslint-disable no-unused-vars */
import styles from "./Ribbon.module.css";
import PropTypes from "prop-types";

export default function Ribbon({ headingTxt }) {
  return <h1 className={styles.ribbon}>{headingTxt}</h1>;
}

Ribbon.propTypes = {
  headingTxt: PropTypes.string,
};
