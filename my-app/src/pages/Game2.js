import styles from "./Game2.module.css";
import { useState } from "react";

import scissor from "../assets/Game2/scissor.svg";
import rock from "../assets/Game2/rock.svg";
import paper from "../assets/Game2/paper.svg";

import Back from "./Back";

function Game2() {
  let opChoice = "rock"; //백에서 가져와야함
  let myChoice = "paper"; //백에서 가져와야함
  let result = "win";

  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.card}>
            {opChoice === "scissor" ? (
              <img src={scissor} alt={opChoice} className={styles.cardImg} />
            ) : opChoice === "rock" ? (
              <img src={rock} alt={opChoice} className={styles.cardImg} />
            ) : (
              <img src={paper} alt={opChoice} className={styles.cardImg} />
            )}
          </div>
          <div>{opChoice}</div>
        </div>
        <div>
          <div>
            <div>{result}</div>
          </div>
        </div>

        <div>
          <div className={styles.card}>
            {myChoice === "scissor" ? (
              <img src={scissor} alt={opChoice} className={styles.cardImg} />
            ) : myChoice === "rock" ? (
              <img src={rock} alt={opChoice} className={styles.cardImg} />
            ) : (
              <img src={paper} alt={opChoice} className={styles.cardImg} />
            )}
          </div>
          <div>{myChoice}</div>
        </div>
      </div>

      <Back to={useState(-1)} />
    </>
  );
}

export default Game2;
