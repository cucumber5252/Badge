import styles from "./KingResult.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import scissor from "../assets/Game2/scissor.svg";
import rock from "../assets/Game2/rock.svg";
import paper from "../assets/Game2/paper.svg";

import HomeButton from "../components/HomeButton/HomeButton";
import Refight from "../components/Refight/Refight";

function KingResult() {
  const location = useLocation();
  const { data, myChoice } = location.state || {};
  const [isDraw, setIsDraw] = useState(false);

  const opChoice = data.gmChoice;
  const [result, setResult] = useState(data.result);

  if (result === "tie") {
    setResult("draw");
    setIsDraw(true);
  }

  ///한국어로 가위 바위 보 결과 저장
  let koreanOpChoice =
    opChoice === "scissor" ? "가위" : opChoice === "rock" ? "바위" : "보";

  let koreanMyChoice =
    myChoice === "scissor" ? "가위" : myChoice === "rock" ? "바위" : "보";

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
          }
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
          {isDraw ? <Refight /> : <HomeButton />}
        </div>
      </div>
    </>
  );
}

export default KingResult;
