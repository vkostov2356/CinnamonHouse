/* eslint-disable no-unused-vars */
import NavBar from "../Reusable/NavBar";
import CareerForm from "./CareerForm";
import styles from "./CareerDesign.module.css";

import { useQuery } from "@tanstack/react-query";
import { OpenPositions } from "../../services/ApiOpenPositions";
import Spinner from "../Reusable/Spinner";
import Position from "./Position";

export default function CareerDesign() {
  const {
    isLoading,
    data: positions,
    error,
  } = useQuery({
    queryKey: ["OpenPositions"],
    queryFn: OpenPositions,
  });

  return (
    <div className={styles.careerDesign}>
      <NavBar />
      <div className={styles.careerDesignBox}>
        <img src="../../../public/Images/Career/background.jpg" />
        <h1>Become one of us!</h1>
        <div className={styles.openPositions}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {positions.map((position) => (
                <Position position={position} key={position.id} />
              ))}
            </>
          )}
        </div>
        <CareerForm />
      </div>
    </div>
  );
}
