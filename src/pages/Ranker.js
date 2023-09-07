import { useEffect, useState } from "react";
import styles from "./Ranker.module.css";
import Tiger from "../assets/Rule/tiger.svg";
import Eagle from "../assets/Rule/eagle.svg";

import Back from "../components/Back/Back";

function Ranker() {
  const [rankData, setRankData] = useState([]);
  const [myRank, setMyRank] = useState("");

  const apiUrl =
    "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/api/game/get-ranker/ ";
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRankData(data.rankers);
        setMyRank(data.myRank);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.ranker}>
        <div className={styles.me}>MY RANK : {myRank}위</div>
        <div className={styles.top20}>TOP 20</div>
        <div className={styles.users}>
          {rankData.map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.column}>
                <div className={styles.count}>{item.rank}</div>
                <div className={styles.individual}>
                  {item.univ === "korea" ? (
                    <img src={Tiger} className={styles.profile} alt="" />
                  ) : (
                    <img src={Eagle} className={styles.profile} alt="" />
                  )}
                  {item.nickname}
                  <div className={styles.badge}>뺏은뱃지</div>
                  <div className={styles.getbadge}>{item.getBadge}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.backButtonDiv}>
        <Back />
      </div>
    </div>
  );
}

export default Ranker;
