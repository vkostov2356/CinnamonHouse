/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./SectionMenu.module.css";
import HTMLFlipBook from "react-pageflip";
import { MdTouchApp } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import SectionCakes from "./SectionCakes";
import SectionCupcakes from "./SectionCupcakes";
import SectionCakePops from "./SectionCakePops";
import SectionDonuts from "./SectionDonuts";

export default function SectionMenu({ section, book }) {
  return (
    <div
      className={styles.book}
      style={{
        backgroundImage: `url(../../../public/Images/Catalog/${section}Background.png)`,
      }}
    >
      <HTMLFlipBook
        width={400}
        height={500}
        showCover={true}
        drawShadow={false}
        ref={book}
      >
        <div className={styles.cover} data-density="hard">
          <div className={styles.cover2}>
            <div className={styles.coverDesign}>
              <div className={styles.coverCircle}>
                <span>
                  <img
                    style={
                      section === "cakePop"
                        ? { width: "12rem" }
                        : { width: "15rem" }
                    }
                    src={`../../../public/Images/Reusable/${section}Menu.png`}
                  />
                </span>
              </div>
            </div>
            <span className={styles.touch}>
              <MdTouchApp />
            </span>
            <p>The best since 2001</p>
          </div>
        </div>
        <div className={styles.demoPage}>
          {section === "cake" && <SectionCakes curPage={1} />}
          {section === "cupcake" && <SectionCupcakes curPage={1} />}
          {section === "cakePop" && <SectionCakePops curPage={1} />}
          {section === "donut" && <SectionDonuts curPage={1} />}
        </div>
        <div className={styles.demoPage}>
          {section === "cake" && <SectionCakes curPage={2} />}
          {section === "cupcake" && <SectionCupcakes curPage={2} />}
          {section === "cakePop" && <SectionCakePops curPage={2} />}
          {section === "donut" && <SectionDonuts curPage={2} />}
        </div>

        <div className={styles.demoPage}>
          {section === "cake" && <SectionCakes curPage={3} />}
          {section === "cupcake" && <SectionCupcakes curPage={3} />}
        </div>
        <div className={styles.demoPage}></div>
      </HTMLFlipBook>
    </div>
  );
}
