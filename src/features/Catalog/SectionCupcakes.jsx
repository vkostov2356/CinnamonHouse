/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import {
  getCupcakesP1,
  getCupcakesP2,
  getCupcakesP3,
} from "../../services/ApiCupcake";
import Spinner from "../Reusable/Spinner";
import styles from "./SmallItems.module.css";
import { BiEuro } from "react-icons/bi";
import { LuVegan } from "react-icons/lu";

function SectionCupcakes({ curPage }) {
  const {
    isLoading: isLoadingP1,
    data: cupcakesP1,
    error: errorP1,
  } = useQuery({
    queryKey: ["CupcakePage1"],
    queryFn: getCupcakesP1,
  });

  const {
    isLoading: isLoadingP2,
    data: cupcakesP2,
    error: errorP2,
  } = useQuery({
    queryKey: ["CupcakePage2"],
    queryFn: getCupcakesP2,
  });

  const {
    isLoading: isLoadingP3,
    data: cupcakesP3,
    error: errorP3,
  } = useQuery({
    queryKey: ["CupcakePage3"],
    queryFn: getCupcakesP3,
  });

  if (isLoadingP1 || isLoadingP2 || isLoadingP3) {
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
          {cupcakesP1.map((cupcake) => (
            <CupcakeItems cupcake={cupcake} key={cupcake.id} />
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
          {cupcakesP2.map((cupcake) => (
            <CupcakeItems cupcake={cupcake} key={cupcake.id} />
          ))}
        </div>
      )}
      {curPage == 3 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "100%",
            gap: "2rem",
          }}
        >
          {cupcakesP3.map((cupcake) => (
            <CupcakeItems cupcake={cupcake} key={cupcake.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default SectionCupcakes;

function CupcakeItems({ cupcake }) {
  return (
    <div className={styles.itemBox}>
      <p className={styles.itemName}>{cupcake.name}</p>
      <img src={cupcake.img} />
      <div>
        <p>Code {cupcake.id}</p>
        <p className={styles.itemPrice}>
          {cupcake.price}
          <span>
            <BiEuro />
          </span>
        </p>
      </div>
      {cupcake.vegan && (
        <div className={styles.itemVegan}>
          <LuVegan />
        </div>
      )}
    </div>
  );
}
