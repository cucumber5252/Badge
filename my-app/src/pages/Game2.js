import styles from "./Game2.module.css";
import { useState, useEffect } from "react";

import scissor from "../assets/Game2/scissor.svg";
import rock from "../assets/Game2/rock.svg";
import paper from "../assets/Game2/paper.svg";

import Back from "../components/Back/Back";
import { useLocation, useNavigate } from "react-router-dom";

import HomeButton from "../components/HomeButton/HomeButton";
import Refight from "../components/Refight/Refight";

function Game2() {
  const location = useLocation;
  const navigate = useNavigate();
  const [isDraw, setIsDraw] = useState(false);
  const { socket, data, roomId, userId, role } = location.state || {};

  let opChoice = data.opChoice; //백에서 가져와야함
  let myChoice = data.myChoice; //백에서 가져와야함
  let result = data.result;

  useEffect(() => {
    socket.emit("refresh", { roomId, role });
  }, []);
  ///한국어로 가위 바위 보 결과 저장
  let koreanOpChoice =
    opChoice === "scissor" ? "가위" : opChoice === "rock" ? "바위" : "보";

  let koreanMyChoice =
    myChoice === "scissor" ? "가위" : myChoice === "rock" ? "바위" : "보";

  if (result === "draw") {
    setIsDraw(true);
    setTimeout(() => {
      navigate("/game1", { state: { socket, roomId, userId, role } });
    }, 3000);
  } else {
    socket.disconnect();
  }

  // function TfBack() {
  //   if ( result === "draw") {
  //     return <>
  //     <div className={styles.back}>
  //       <Back />
  //     </div>
  //     </>

  //   }else{
  //     return <div className={styles.back}></div>
  //   }
  // }

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
          {isDraw ? <Refight /> : <HomeButton />}
        </div>
      </div>
    </>
  );
}

export default Game2;
