/* eslint-disable no-unused-vars */
import NavBar from "../Reusable/NavBar";
import styles from "./OrderDesign.module.css";
import OrderForm from "./OrderForm";
import OrderGifs from "./OrderGifs";

export default function OrderDesign() {
  return (
    <div className={styles.orderMain}>
      <NavBar />
      <div className={styles.orderBox}>
        <div className={styles.orderBoxSmall}>
          <img src="../../../public/Images/Cart/OrderBackground.jpg" />
          <h1>Cake your order!</h1>
        </div>
        <OrderGifs />
        <OrderForm />
        <OrderGifs />
      </div>
    </div>
  );
}
