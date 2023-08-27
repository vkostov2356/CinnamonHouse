/* eslint-disable no-unused-vars */
import GameForm from ".//GameForm";
import TheGame from "./TheGame";
import GameModal from "./GameModal";
import styles from "./GameDesign.module.css";
import NavBar from "../Reusable/NavBar";
import { AiFillQuestionCircle, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

export default function GameDesign() {
  const [gameModal, setGameModal] = useState(false);
  const [gameShow, setGameShow] = useState(false);
  const [randomNum, setRandomNum] = useState(0);

  function handleRandomNum() {
    setRandomNum(Math.ceil(Math.random() * 3));
    console.log(randomNum);
  }

  function handleModal(e) {
    e.preventDefault();
    setGameModal(!gameModal);
  }

  function handleGame(e) {
    e.preventDefault();
    setGameShow(true);
  }

  return (
    <>
      <div className={styles.gameDesign}>
        <NavBar />
        <div className={styles.gameDesignBox}>
          <button className={styles.question} onClick={handleModal}>
            <AiFillQuestionCircle />
          </button>
          <h1>Try your luck and win a delicious prize or two!</h1>
          <GameForm onHandleGame={handleGame} onRandomNum={handleRandomNum} />
          {gameShow && <TheGame randomNum={randomNum} />}
        </div>
      </div>
      {gameModal && <GameModal onHandleModal={handleModal} />}
    </>
  );
}
