/* eslint-disable no-unused-vars */
import styles from "./Customers.module.css";
import PropTypes from "prop-types";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export default function Customers({
  currentCustomer,
  onhandleInc,
  onhandleDec,
  onSetCurCustomer,
  onHandleCurCustomer,
}) {
  const customers = {
    1: {
      name: "John Whitehall",
      text: "We found the shop on trip advisor. Its a very cute shop, with some lovely ladies working there! We enjoyed some realy nice coffee and tea, and of course delicious cupcakes! Totally recommending this one!",
    },
    2: {
      name: "Marie Josephe",
      text: "If you want to get someone you love a cake and prepared to spend an extra tenner than supermarket ones I have to recommend these cake shops. I was stunned at how delicious their cakes are, beautiful soft.",
    },
    3: {
      name: "Hans Niemann",
      text: "Very cozy place, variety of exquisite home made cakes, sweets. Located in Sofia center and at the same time it is a quiet place to enjoy your coffee in so charming atmosphere. You will fall in love with this place at first sight.",
    },
    4: {
      name: "Valeria Dimitrova",
      text: "I was so impressed with this company. Very easy process of choosing and personalising the toppers on the website, really reasonably priced, they came the next day and looked great.",
    },
    5: {
      name: "Fabiola Perez",
      text: "Very good place. Near center . Smell cake and coffe. Personal is a very kind and positive. Delicius cake and freshes.",
    },
  };

  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonialsInfo}>
        <div>
          <img
            src={`../../../public/Images/HomePage/testimonial${currentCustomer}.jpg`}
          />
          <p> {customers[currentCustomer].name}</p>
        </div>
        <div>
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
      </div>
      <div className={styles.testimonialText}>
        <p>{customers[currentCustomer].text}</p>
        <div
          style={{
            backgroundImage: `url(../../../public/Images/HomePage/reviewFood${currentCustomer}.jpg)`,
          }}
        ></div>
      </div>
      <div className={styles.testimonialsPages}>
        <button
          className={currentCustomer == 1 ? styles.activeDot : ""}
          value={1}
          onClick={(e) => onHandleCurCustomer(Number(e.target.value))}
        ></button>
        <button
          className={currentCustomer == 2 ? styles.activeDot : ""}
          value={2}
          onClick={(e) => onHandleCurCustomer(Number(e.target.value))}
        ></button>
        <button
          className={currentCustomer == 3 ? styles.activeDot : ""}
          value={3}
          onClick={(e) => onHandleCurCustomer(Number(e.target.value))}
        ></button>
        <button
          className={currentCustomer == 4 ? styles.activeDot : ""}
          value={4}
          onClick={(e) => onHandleCurCustomer(Number(e.target.value))}
        ></button>
        <button
          className={currentCustomer == 5 ? styles.activeDot : ""}
          value={5}
          onClick={(e) => onHandleCurCustomer(Number(e.target.value))}
        ></button>
      </div>
      <button className={styles.testimonialsLeft} onClick={onhandleDec}>
        <AiOutlineLeft />
      </button>
      <button className={styles.testimonialsRight} onClick={onhandleInc}>
        <AiOutlineRight />
      </button>
    </div>
  );
}

Customers.propTypes = {
  currentCustomer: PropTypes.number,
  onhandleInc: PropTypes.func,
  onhandleDec: PropTypes.func,
  onSetCurCustomer: PropTypes.func,
  onHandleCurCustomer: PropTypes.func,
};
