/* eslint-disable no-unused-vars */
import CatalogSections from "./CatalogSections";
import SectionMenu from "./SectionMenu";
import SectionCakePops from "./SectionCakePops";
import SectionCupcakes from "./SectionCupcakes";
import SectionDonuts from "./SectionDonuts";
import NavBar from "../Reusable/NavBar";
import styles from "./CatalogDesign.module.css";
import { useEffect, useRef, useState } from "react";

export default function CatalogDesign() {
  const [secColor, setSecColor] = useState("");
  const [section, setSection] = useState("");

  const book = useRef();

  function handleSection(e, data) {
    e.preventDefault();
    setSection(data);
  }

  useEffect(() => {
    if (section == "cake") {
      setSecColor("rgb(254, 225, 56)");
    } else if (section == "cakePop") {
      setSecColor("rgb(253, 97, 175)");
    } else if (section == "cupcake") {
      setSecColor("#ff9b58");
    } else {
      setSecColor("#5cb5ff");
    }
  }, [section]);

  return (
    <>
      <div className={styles.catalogDesign}>
        <NavBar />
        <div className={styles.catalogDesignBox}>
          <img src="../../../public/Images/Reusable/shopInterior.jpeg" />
          <h1>Online catalog</h1>
          <div style={{ width: "100%" }}>
            <CatalogSections
              book={book}
              onSection={handleSection}
              section={section}
            />
            <div
              className={styles.sectionBox}
              style={{ backgroundColor: secColor }}
            >
              {section && (
                <div
                  className={styles.box}
                  style={!section ? { opacity: "0" } : { opacity: "1" }}
                >
                  <SectionMenu book={book} section={section} />{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
