/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getCakePopsP1, getCakePopsP2 } from "../../services/ApiCakePops";
import Spinner from "../Reusable/Spinner";
import styles from "./SmallItems.module.css";
import { BiEuro } from "react-icons/bi";
import { LuVegan } from "react-icons/lu";

function SectionCupcakes({ curPage }) {
  const {
    isLoading: isLoadingP1,
    data: cakepopsP1,
    error: errorP1,
  } = useQuery({
    queryKey: ["CakePopPage1"],
    queryFn: getCakePopsP1,
  });

  const {
    isLoading: isLoadingP2,
    data: cakepopsP2,
    error: errorP2,
  } = useQuery({
    queryKey: ["CakePopPage2"],
    queryFn: getCakePopsP2,
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

            gap: "2rem",
          }}
        >
          {cakepopsP1.map((cakepop) => (
            <CakePopItems cakepop={cakepop} key={cakepop.id} />
          ))}
        </div>
      )}
      {curPage == 2 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {cakepopsP2.map((cakepop) => (
            <CakePopItems cakepop={cakepop} key={cakepop.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default SectionCupcakes;

function CakePopItems({ cakepop }) {
  return (
    <div className={styles.itemBox}>
      <p className={styles.itemName}>{cakepop.name}</p>
      <img src={cakepop.img} />
      <div>
        <p>Code {cakepop.id}</p>
        <p className={styles.itemPrice}>
          {cakepop.price}
          <span>
            <BiEuro />
          </span>
        </p>
      </div>
      {cakepop.vegan && (
        <div className={styles.itemVegan}>
          <LuVegan />
        </div>
      )}
    </div>
  );
}
