/* eslint-disable no-unused-vars */
import styles from "./GameModal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

export default function GameModal({ onHandleModal }) {
  return (
    <div className={styles.blur}>
      <div className={styles.gameModal}>
        <button className={styles.closeModal} onClick={onHandleModal}>
          <AiFillCloseCircle />
        </button>
        GAMEMODAL
      </div>
    </div>
  );
}

GameModal.propTypes = {
  onHandleModal: PropTypes.func,
};
