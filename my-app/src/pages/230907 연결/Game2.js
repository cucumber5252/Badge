import styles from "./Game2.module.css";
import { useState } from "react";

import scissor from "../assets/Game2/scissor.svg";
import rock from "../assets/Game2/rock.svg";
import paper from "../assets/Game2/paper.svg";

import Back from "../components/Back/Back";

function Game2(soket) {
  let opChoice = "rock"; //백에서 가져와야함
  let myChoice = "paper"; //백에서 가져와야함
  let result = "draw";

  ///한국어로 가위 바위 보 결과 저장
  let koreanOpChoice =
    opChoice === "scissor" ? "가위" : opChoice === "rock" ? "바위" : "보";

  let koreanMyChoice =
    myChoice === "scissor" ? "가위" : myChoice === "rock" ? "바위" : "보";

  socket.disconnect();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.opDiv}>
          <div className={styles.card}>
            {opChoice === "scissor" ? (
              <img src={scissor} alt={opChoice} className={styles.cardImg} />
            ) : opChoice === "rock" ? (
              <img src={rock} alt={opChoice} className={styles.cardImg} />
            ) : (
              <img src={paper} alt={opChoice} className={styles.cardImg} />
            )}
            {koreanOpChoice}
          </div>
        </div>

        <div
          className={`${styles.resultBox} ${
            result === "win"
              ? styles.resultDivColorWin
              : result === "draw"
              ? styles.resultDivColorDraw
              : styles.resultDivColorLose
          }`}
        >
          <div className={styles.result}>{result}</div>
        </div>

        <div className={styles.myDiv}>
          <div className={styles.card}>
            {myChoice === "scissor" ? (
              <img src={scissor} alt={opChoice} className={styles.cardImg} />
            ) : myChoice === "rock" ? (
              <img src={rock} alt={opChoice} className={styles.cardImg} />
            ) : (
              <img src={paper} alt={opChoice} className={styles.cardImg} />
            )}
            {koreanMyChoice}
          </div>
        </div>
        <div className={styles.back}>
          <Back to={useState(-1)} />
        </div>
      </div>
    </>
  );
}

export default Game2;
