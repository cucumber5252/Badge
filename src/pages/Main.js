import styles from "./Main.module.css";
import eagle from "../assets/Home/eagle.svg";
import crown from "../assets/Home/crown.svg";
import rockscissorpaper from "../assets/Home/rockscissorpaper.svg";
import tiger from "../assets/Home/tiger.svg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [userData, setUserData] = useState("");
  document.body.style.background = "none";
  document.body.style.backgroundColor = "#FCFCF6";

  const KoreaWidth = `${userData.kuBadgeRatio}%`;
  const YonseiWidth = `${100 - userData.kuBadgeRatio}%`;

  useEffect(() => {
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
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.rounded}>
        <span className={styles.text}>뺏은 뺏지 현황</span>
        <div className={styles.total}>
          <img src={tiger} alt="" />
          <img src={eagle} alt="" />
        </div>
        {userData.korea > userData.yonsei ? (
          <img src={crown} className={styles.crown} alt="" />
        ) : userData.korea < userData.yonsei ? (
          <img src={crown} className={styles.crown2} alt="" />
        ) : (
          <img src={crown} className={styles.crown3} alt="" />
        )}

        <div className={styles.ratioBar}>
          <div className={styles.ratioKorea} style={{ width: KoreaWidth }}>
            <span className={styles.count}>{userData.korea}개</span>
          </div>
          <div className={styles.ratioYonsei} style={{ width: YonseiWidth }}>
            <span className={styles.count}>{userData.yonsei}개</span>
          </div>
        </div>
        <div className={styles.below}>
          <span className={styles.text2}>고려대</span>
          <span className={styles.text2}>연세대</span>
        </div>
      </div>
      <Link to="/ranker" className={styles.ranker}>
        랭킹보기
      </Link>
      <div className={styles.rockscissorpaper}>
        <img src={rockscissorpaper} alt="" />
      </div>
      <div className={styles.link}>
        <Link to="/qr" state={{ role: "creator" }} className={styles.game}>
          대결방 만들기
        </Link>{" "}
        <Link to="/rule" className={styles.rule}>
          룰
        </Link>
      </div>
    </div>
  );
}

export default Main;
