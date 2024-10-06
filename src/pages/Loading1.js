import { useNavigate, useLocation } from "react-router-dom";

import styles from "./Loading1.module.css";
import eagle from "../assets/Loading1/eagle.svg";
import tiger from "../assets/Loading1/tiger.svg";
import mystery from "../assets/Loading1/mystery.svg";
import { useEffect } from "react";
// import Back from "../components/Back/Back";

const Loading1 = () => {
  const location = useLocation();
  const { socket, opData, myData, roomId, role } = location.state || {};
  const userId = myData.userId;

  const navigate = useNavigate();
  let myNickname = myData.nickname;
  let myUniv = myData.univ;
  let myWins = myData.wins;
  let myTotal = myData.total;
  let myLose = myTotal - myWins;

  let opNickname = opData.nickname;
  let opUniv = opData.univ;
  let opWins = opData.wins;
  let opTotal = opData.total;
  let opLose = opTotal - opWins;

  socket.once("activateGame", (data) => {
    if (data.state === "success") {
      //go to game1 ''choice''
      navigate("/game1", { state: { socket, userId, roomId, role } });
    }
  });

  useEffect(() => {
    socket.emit("refresh", { roomId, role });
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    socket.emit("startGame", { roomId, userId });
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={`${styles.nicknameDiv} ${styles.opNickname}`}>
            {!opNickname ? "???" : `${opNickname}`}
          </div>
          <div className={`${styles.totalDiv} ${styles.opTotal}`}>
            {!opNickname
              ? "???전 ???승 ???패"
              : `${opTotal}전 ${opWins}승 ${opLose}패`}
          </div>
          {/* 이미지 맞는 것 보여주기 */}
          {!opNickname ? (
            <img
              src={mystery}
              alt="mystery"
              className={`${styles.univImg} ${styles.opImg}`}
            />
          ) : opUniv === "korea" ? (
            <img
              src={tiger}
              alt="tiger"
              className={`${styles.univImg} ${styles.opImg}`}
            />
          ) : (
            <img
              src={eagle}
              alt="eagle"
              className={`${styles.univImg} ${styles.opImg}`}
            />
          )}
        </div>

        <div className={styles.contents}>
          <div className={styles.myImg}>
            {myUniv === "korea" ? (
              <img src={tiger} alt="tiger" className={`${styles.univImg}`} />
            ) : (
              <img src={eagle} alt="eagle" className={`${styles.univImg}`} />
            )}
          </div>
          <div className={styles.myDiv}>
            <div className={styles.nicknameDiv}>{myNickname}</div>
            <div className={`${styles.totalDiv}`}>
              {`${myTotal}전 ${myWins}승 ${myLose}패`}
              <div />
            </div>
          </div>
        </div>
        <div className={styles.alertDiv}>
          {opNickname}(이)가
          <br />
          승부를 걸어왔다!
        </div>

        <div className={styles.goToNextDiv} onClick={onClick}>
          시작하기
        </div>
      </div>
    </>
  );
};

export default Loading1;
