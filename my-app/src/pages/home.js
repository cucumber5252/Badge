import styles from "./home.module.css";
import eagle from "../assets/home/eagle.svg";
import crown from "../assets/home/crown.svg";
import rockscissorpaper from "../assets/home/rockscissorpaper.svg";
import tiger from "../assets/home/tiger.svg";
// import back from "../assets/home/back.svg";\
// import tigercrown from "../assets/home/tigercrown.svg";
// import eaglecrown from "../assets/home/eaglecrown.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [userData, setUserData] = useState("");
  // const KoreaRatio = userData.korea / userData.total || 0;
  // const YonseiRatio = userData.yonsei / userData.total || 0;
  // const KoreaWidth = `${Math.max(KoreaRatio, 0) * 100}%`;
  // const YonseiWidth = `${Math.max(YonseiRatio, 0) * 100}%`;
  const KoreaWidth = `${userData.kuBadgeRatio}%`;
  const YonseiWidth = `${100 - userData.kuBadgeRatio}%`;

  useEffect(() => {
    // const apiUrl = "http://localhost:3000/data/mockData.json";
    const apiUrl =
      "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/api/game/get-univ-badge/";
    const token = localStorage.getItem("token");

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        mode: "cors",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => {
        alert("지금 오류가 발생했습니다");
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.rounded}>
          <span className={styles.text}>뺏은 뺏지 현황</span>
          <div className={styles.total}>
            <img src={tiger} />
            <img src={eagle} />
          </div>
          {userData.korea > userData.yonsei ? (
            <img src={crown} className={styles.crown} />
          ) : userData.korea < userData.yonsei ? (
            <img src={crown} className={styles.crown2} />
          ) : (
            <img src={crown} className={styles.crown3} />
          )}

          <div className={styles.ratioBar}>
            <div className={styles.ratioKorea} style={{ width: KoreaWidth }}>
              <span className={styles.count}>{userData.korea}개</span>
            </div>
            <div className={styles.ratioYonsei} style={{ width: YonseiWidth }}>
              <span className={styles.count}>{userData.yonsei}개</span>
            </div>
          </div>
          <div classname={styles.below}>
            <span className={styles.text2}>고려대</span>
            <span className={styles.text2}>연세대</span>
          </div>
        </div>
        <Link to="/ranker" className={styles.ranker}>
          랭킹보기
        </Link>
        <div className={styles.rockscissorpaper}>
          <img src={rockscissorpaper} />
        </div>
        <div className={styles.link}>
          <Link to="/QR" className={styles.game}>
            대결방 만들기
          </Link>{" "}
          <Link to="/rule" className={styles.rule}>
            룰
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
