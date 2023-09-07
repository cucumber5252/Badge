import styles from "./KingGame.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import yourCard from "../assets/Game1/yourCard.svg";
import scissor from "../assets/Game1/scissor.svg";
import rock from "../assets/Game1/rock.svg";
import paper from "../assets/Game1/paper.svg";

function KingGame() {
  const [timeLeft, setTimeLeft] = useState(5);
  const [choice, setChoice] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log(choice);
  }, [choice]);

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

  const FetchChoice = () => {
    if (timeLeft === 0) {
      //서버와 통신//
      const apiUrl =
        "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/api/game/god-game/";

      const token = localStorage.getItem("token");

      const bodyToFetch = {
        choice,
      };

      //choice를 서버에 보내는 것은, 시간이 0초가 되었을 때임.
      fetch(apiUrl, {
        method: "POST", //선택한 것 보내드립니다
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }, //json형식으로 요청 보낼거다! (고정값))
        body: JSON.stringify(bodyToFetch), //JS로 작성된 bodyToFetch를 JSON으로 바꾸고,body에 담는다.

        mode: "cors", //전달 형식에 관한 요소(고정값)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("data:", data);

          navigate("/kingResult", {
            state: { data, myChoice: choice },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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
            <span className={styles.span1}>
              옥황상제는 이미 패를 골랐습니다.
            </span>
          </div>
          <div className={styles.yourCardDiv}>
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

export default KingGame;
