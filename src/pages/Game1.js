import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Game1.module.css";

import yourCard from "../assets/Game1/yourCard.svg";
import scissor from "../assets/Game1/scissor.svg";
import rock from "../assets/Game1/rock.svg";
import paper from "../assets/Game1/paper.svg";
import socket from "./socket";

export default function Game1() {
  const [timeLeft, setTimeLeft] = useState("");
  const [choice, setChoice] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, roomId } = location.state || {};

  const FetchChoice = () => {
    socket.emit("choice", { choice, userId, roomId });
    socket.once("choice", (data) => {
      if (data.choice !== choice) {
        //resend emit
        socket.emit("choice", { choice, userId, roomId });
      }
    });

    socket.once("gameResult", (data) => {
      //Game2.js
      navigate("/game2", { state: { data, roomId } });
    });
  };

  //////////////////////////////////////////
  // //가위바위보 선택 test
  // useEffect(() => {
  //   console.log(choice);
  // }, [choice]);

  ////////타이머 코드///////
  useEffect(() => {
    //설정된 시간 간격마다 SetInterval 콜백이 실행된다.
    const id = setInterval(() => {
      //타이머 숫자가 하나씩 줄어들도록
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    //0이 되면 카운트다운 멈춤
    if (timeLeft === 0) {
      clearInterval(id);
      FetchChoice();
    }
    return () => clearInterval(id);
    //timeLeft 변수가 바뀔때마다 useEffect 실행
  }, [timeLeft]);

  function rockChoiceHandler(e) {
    e.preventDefault();
    setChoice("rock");
  }

  function scissorChoiceHandler(e) {
    e.preventDefault();
    setChoice("scissor");
  }

  function paperChoiceHandler(e) {
    e.preventDefault();
    setChoice("paper");
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.yourSelection}>
            <span className={styles.span1}>상대도 선택 중</span>
          </div>
          <div>
            <img className={styles.yourCardImg} src={yourCard} alt="yourCard" />
          </div>
        </div>

        <div className={styles.timeLeftDiv}>
          <div className={styles.timeLeft}>{timeLeft}</div>
          <div className={styles.notification}>
            <span>제한시간 안에 골라주세요</span>
          </div>
        </div>

        <div className={styles.cards}>
          <div
            className={`${styles.card} ${
              choice === "scissor" ? styles.clickedCard : ""
            }`}
            onClick={scissorChoiceHandler}
          >
            <img className={styles.myCardImg} src={scissor} alt="scissor" />
            <div>가위</div>
          </div>
          <div
            className={`${styles.card} ${
              choice === "rock" ? styles.clickedCard : ""
            }`}
            onClick={rockChoiceHandler}
          >
            <img className={styles.myCardImg} src={rock} alt="rock" />
            <div>바위</div>
          </div>
          <div
            className={`${styles.card} ${
              choice === "paper" ? styles.clickedCard : ""
            }`}
            onClick={paperChoiceHandler}
          >
            <img className={styles.myCardImg} src={paper} alt="paper" />
            <div>보</div>
          </div>
        </div>
      </div>
    </>
  );
}
