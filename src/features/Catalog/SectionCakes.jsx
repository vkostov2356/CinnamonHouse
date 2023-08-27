/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getCakesP1 } from "../../services/ApiCakesP1";
import { getCakesP2 } from "../../services/ApiCakeP2";
import { getCakesP3 } from "../../services/ApiCakeP3";
import Spinner from "../Reusable/Spinner";
import CakeItems from "./CakeItems";

function SectionCakes({ curPage }) {
  const {
    isLoading: isLoadingP1,
    data: cakesP1,
    error: errorP1,
  } = useQuery({
    queryKey: ["CakesPage1"],
    queryFn: getCakesP1,
  });

  const {
    isLoading: isLoadingP2,
    data: cakesP2,
    error: errorP2,
  } = useQuery({
    queryKey: ["CakePage2"],
    queryFn: getCakesP2,
  });

  const {
    isLoading: isLoadingP3,
    data: cakesP3,
    error: errorP3,
  } = useQuery({
    queryKey: ["CakePage3"],
    queryFn: getCakesP3,
  });

  if (isLoadingP1 || isLoadingP2 || isLoadingP2 || isLoadingP3) {
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
          {cakesP1.map((cake) => (
            <CakeItems cake={cake} key={cake.id} />
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
          {cakesP2.map((cake) => (
            <CakeItems cake={cake} key={cake.id} />
          ))}
        </div>
      )}
      {curPage == 3 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {cakesP3.map((cake) => (
            <CakeItems cake={cake} key={cake.id} />
          ))}
        </div>
      )}
      {curPage == 4 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        ></div>
      )}
    </>
  );
}

export default SectionCakes;
