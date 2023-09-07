import styles from "./Profile.module.css";

import { useState, useEffect } from "react";

import TigerImg from "../assets/Profile/TigerImg.svg";
import TearTigerImg from "../assets/Profile/TearTigerImg.svg";
import EagleImg from "../assets/Profile/EagleImg.svg";
import TearEagleImg from "../assets/Profile/TearEagleImg.svg";

import Back from "../components/Back/Back";

const Profile = () => {
  const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    const apiUrl =
      "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/api/game/get-record/";

    const token = localStorage.getItem("token");

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        setUserProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let {
    nickname,
    wins,
    total,
    rockNum,
    paperNum,
    scissorNum,
    losers,
    myRank,
    univ,
  } = userProfile;

  losers = ["안녕하세요", "헬로"];

  const loses = total - wins;

  const profileImgDivStyle = {
    backgroundColor: univ === "korea" ? "#EC7676" : "#7690EC",
  };

  const listTitleText = univ === "korea" ? "연대생" : "고대생";

  return (
    <div className={styles.profile}>
      <div className={styles.profileDiv}>
        <div className={styles.profileImgDiv} style={profileImgDivStyle}>
          {univ === "korea" ? (
            <img src={TigerImg} className={styles.profileImg} alt=""></img>
          ) : (
            <img src={EagleImg} className={styles.profileImg} alt=""></img>
          )}
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileName}>{nickname}</div>
          <div className={styles.profileResultRank}>
            <span className={styles.profileResult}>
              {total}전 {wins}승 {loses}패
            </span>
            <span className={styles.profileRank}>{myRank}위</span>
          </div>
        </div>
      </div>

      <div className={styles.listDiv}>
        <div className={styles.listImgDiv}>
          {univ === "korea" ? (
            <img src={TearEagleImg} className={styles.listImg} alt=""></img>
          ) : (
            <img src={TearTigerImg} className={styles.listImg} alt=""></img>
          )}
        </div>
        <div className={styles.listWin}>
          <div className={styles.listTitle}>내가 이긴 {listTitleText}</div>
          <div className={styles.listWrap}>
            {losers.map((item, index) => (
              <div key={index} className={styles.listItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.backButtonDiv}>
        <Back />
      </div>
    </div>
  );
};

export default Profile;
