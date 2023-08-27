/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getDonutsP1, getDonutsP2 } from "../../services/ApiDonuts";
import Spinner from "../Reusable/Spinner";
import styles from "./SmallItems.module.css";
import { BiEuro } from "react-icons/bi";
import { LuVegan } from "react-icons/lu";

function SectionCupcakes({ curPage }) {
  const {
    isLoading: isLoadingP1,
    data: donutsP1,
    error: errorP1,
  } = useQuery({
    queryKey: ["DonutsPage1"],
    queryFn: getDonutsP1,
  });

  const {
    isLoading: isLoadingP2,
    data: donutsP2,
    error: errorP2,
  } = useQuery({
    queryKey: ["DonutsPage2"],
    queryFn: getDonutsP2,
  });

  if (isLoadingP1 || isLoadingP2) {
    return <Spinner />;
  }

  return (
    <>
      {curPage == 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "100%",
            gap: "2rem",
          }}
        >
          {donutsP1.map((donut) => (
            <DonutItems donut={donut} key={donut.id} />
          ))}
        </div>
      )}
      {curPage == 2 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "100%",
            gap: "2rem",
          }}
        >
          {donutsP2.map((donut) => (
            <DonutItems donut={donut} key={donut.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default SectionCupcakes;

function DonutItems({ donut }) {
  return (
    <div className={styles.itemBox}>
      <p className={styles.itemName}>{donut.name}</p>
      <img src={donut.img} />
      <div>
        <p>Code {donut.id}</p>
        <p className={styles.itemPrice}>
          {donut.price}
          <span>
            <BiEuro />
          </span>
        </p>
      </div>
      {donut.vegan && (
        <div className={styles.itemVegan}>
          <LuVegan />
        </div>
      )}
    </div>
  );
}
