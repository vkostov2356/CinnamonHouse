/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
import styles from "./CatalogSections.module.css";

export default function CatalogSections({ onSection, section, book }) {
  return (
    <div className={styles.catalogSections}>
      <button
        className={styles.cakesBtn}
        onClick={(e) => (
          onSection(e, "cake"), book.current.pageFlip().turnToPage(0)
        )}
        style={section == "cake" ? { fontSize: "2.4rem" } : {}}
      >
        <span>cakes</span>
        <img
          className={styles.photoBtn}
          src="../../../public/Images/Catalog/cake.png"
        />
      </button>
      <button
        className={styles.cakepopsBtn}
        onClick={(e) => (
          onSection(e, "cakePop"), book.current.pageFlip().turnToPage(0)
        )}
        style={section == "cakePop" ? { fontSize: "2.4rem" } : {}}
      >
        <span>cake pops</span>
        <img
          className={styles.photoBtn}
          src="../../../public/Images/Catalog/cakePop.png"
        />
      </button>
      <button
        className={styles.cupcakesBtn}
        onClick={(e) => (
          onSection(e, "cupcake"), book.current.pageFlip().turnToPage(0)
        )}
        style={section == "cupcake" ? { fontSize: "2.4rem" } : {}}
      >
        <span>cupcakes</span>
        <img
          className={styles.photoBtn}
          src="../../../public/Images/Catalog/cupcake.png"
        />
      </button>
      <button
        className={styles.donutsBtn}
        onClick={(e) => (
          onSection(e, "donut"), book.current.pageFlip().turnToPage(0)
        )}
        style={
          // section == "donut" ? { fontSize: "2.4rem" } : { fontSize: "2rem" }
          section == "donut" ? { fontSize: "2.4rem" } : {}
        }
      >
        <span>donuts</span>
        <img
          className={styles.photoBtn}
          src="../../../public/Images/Catalog/donut.png"
        />
      </button>
    </div>
  );
}
