/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./Position.module.css";
import { MdBakeryDining } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdPointOfSale, MdAttachMoney } from "react-icons/md";
import { GiCook, GiVacuumCleaner, GiCookingGlove } from "react-icons/gi";
import { BsCheckCircleFill, BsDashCircleFill } from "react-icons/bs";

export default function Position({ position }) {
  console.log(position.title.toLowerCase() == "assistant");
  console.log(position.title.toLowerCase(), "assistant");

  return (
    <div className={styles.position}>
      <div className={styles.icon}>
        {position.title.toLowerCase() == "baker" && <MdBakeryDining />}
        {position.title.toLowerCase() == "head baker" && <GiCook />}
        {position.title.toLowerCase() == "cashier" && <MdPointOfSale />}
        {position.title.toLowerCase() == "accountant" && <MdAttachMoney />}
        {position.title.toLowerCase() == "cleaner" && <GiVacuumCleaner />}
        {position.title.toLowerCase() == "assistant" && <GiCookingGlove />}
      </div>
      <h3>{position.title}</h3>
      <div className={styles.location}>
        <CiLocationOn />
        <span>
          {position.location}
          <span className={styles.type}> {position.type}</span>
        </span>
      </div>

      <p>
        Experience:
        {position.experience ? (
          <span style={{ color: "#40a940" }}>
            <BsCheckCircleFill />
          </span>
        ) : (
          <span>
            <BsDashCircleFill />
          </span>
        )}
      </p>
      <button className={styles.apply}>APPLY</button>
    </div>
  );
}
