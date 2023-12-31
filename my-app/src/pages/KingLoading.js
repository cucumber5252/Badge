import styles from "./KingLoading.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import KingImg from "../assets/KingLoading/KingImg.svg";
import Back from "../components/Back/Back";

const KingLoading = ({ userData }) => {
  const [timeLeft, setTimeLeft] = useState("");

  document.body.style.background = "none";
  document.body.style.backgroundColor = "#FCFCF6";

  useEffect(() => {
    const apiUrl = `https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/api/game/check-available/`;
    const token = localStorage.getItem("token");

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            const error = new Error(err.message);
            error.timeInterval = err.timeInterval;
            throw error;
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("200 data:", data);
        setTimeLeft(0);
      })
      .catch((error) => {
        console.log("Error:", error);
        if (error.message === "too soon") {
          // or check the status code if it's available
          console.log(error.timeInterval);
          setTimeLeft(error.timeInterval); // use the time interval from the error
        } else {
          console.error("Unhandled error:", error);
        }
      });
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeLeft]);

  const minute = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const second = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className={styles.kingLoadingDiv}>
      <img src={KingImg} className={styles.kingImg} alt="" />
      <div className={styles.kingSayDiv}>
        <div className={styles.kingSay}>목숨이 부족하더냐!</div>
        <div className={styles.kingSay}>나는 5분에 한번 지상에 내려온다네</div>
        <div className={styles.kingSay}>나를 이기면 뺏지를 하나 주지</div>
      </div>
      <Link
        to="/kingGame"
        className={styles.joinInfoButton}
        onClick={(e) => {
          if (timeLeft !== 0) {
            e.preventDefault();
          }
        }}
      >
        <div className={styles.joinInfoButtonLastDiv}>
          {timeLeft === 0 ? (
            <div className={styles.joinInfoButtonLast}>눌러서 대결하기</div>
          ) : (
            <div className={styles.joinInfoButtonLast}>
              대결까지 {minute}:{second}
            </div>
          )}
        </div>
        <span className={styles.joinInfoButtonText}>옥황상제와의 대결</span>
      </Link>
      <div className={styles.backButtonDiv}>
        <Back />
      </div>
    </div>
  );
};

export default KingLoading;
