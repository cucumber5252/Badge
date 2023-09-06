import { useEffect, useState } from "react";
import styles from "./ranker.module.css";
import Tiger from "../assets/rule/tiger.svg";
import Eagle from "../assets/rule/eagle.svg";
import { renderMatches } from "react-router-dom";

function Ranker() {
  const [rankData, setRankData] = useState([
    { nickname: "초전도대학생", univ: "korea", getBadge: 10, rank: 1 },
    { nickname: "고려대학생", univ: "yonsei", getBadge: 9, rank: 2 },
    { nickname: "연새대병신", univ: "korea", getBadge: 9, rank: 3 },
    { nickname: "고잡대", univ: "yonsei", getBadge: 8, rank: 4 },
    { nickname: "연세대화이팅", univ: "korea", getBadge: 6, rank: 5 },
    { nickname: "연새대병신", univ: "korea", getBadge: 9, rank: 6 },
    { nickname: "고잡대", univ: "yonsei", getBadge: 8, rank: 7 },
    { nickname: "연세대화이팅", univ: "korea", getBadge: 6, rank: 8 },
    { nickname: "연새대병신", univ: "korea", getBadge: 9, rank: 9 },
    { nickname: "고잡대", univ: "yonsei", getBadge: 8, rank: 10 },
    { nickname: "연세대화이팅", univ: "korea", getBadge: 6, rank: 11 },
    { nickname: "연새대병신", univ: "korea", getBadge: 9, rank: 12 },
    { nickname: "고잡대", univ: "yonsei", getBadge: 8, rank: 13 },
    { nickname: "연세대화이팅", univ: "korea", getBadge: 6, rank: 14 },
  ]);
  const [myRank, setMyRank] = useState(872);

  // const apiUrl = "http://localhost:3000/data/rankerData.json";
  // const apiUrl =
  //   "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudt ype.app/api/game/get-ranker/ ";
  // const token = localStorage.getItem("token");

  // {
  //   "rankers": [
  //     { "nickname": "초전도대학생", "univ": "korea", "getBadge": 10, "rank": 1 },
  //     { "nickname": "고려대학생", "univ": "yonsei", "getBadge": 9, "rank": 2 }
  //   ],
  //   "myRank": 872
  // }

  // useEffect(() => {
  //   fetch(apiUrl, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // Authorization: token,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("data:", data.rankers);
  //       setRankData(data.rankers);
  //       console.log(typeof rankData);
  //     })
  //     .then(() => {
  //       console.log("rankData:", rankData);
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //       // alert("지금 오류가 발생했습니다");
  //     });
  // }, []);

  return (
    <>
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
                      <img src={Tiger} className={styles.profile} />
                    ) : (
                      <img src={Eagle} className={styles.profile} />
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
      </div>
    </>
  );
}

export default Ranker;
