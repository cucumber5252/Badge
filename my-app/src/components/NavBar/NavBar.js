import styles from "./NavBar.module.css";
import TigerImg from "../../assets/NavBar/TigerImg.svg";
import EagleImg from "../../assets/NavBar/EagleImg.svg";
import PresentImg from "../../assets/NavBar/PresentImg.svg";
import SettingImg from "../../assets/NavBar/SettingImg.svg";
import SettingOpenImg from "../../assets/NavBar/SettingOpenImg.svg";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const NavBar = ({ userData, setUserData }) => {
  const [showSetting, setShowSetting] = useState(false);

  const getBadgePercent = (userData.getBadge % 15) * 10;
  const fillWidth = `${getBadgePercent}%`;

  const handleSettingClick = (e) => {
    e.preventDefault();
    setShowSetting((prev) => !prev);
  };

  useEffect(() => {
    const apiUrl =
      "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/api/game/statistic";

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
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={styles.NavBarDiv}>
        <div className={styles.MarginDiv}>
          <div className={styles.flexDiv1}>
            <div className={styles.profileDiv}>
              {userData.univ === "korea" ? (
                <img src={TigerImg} className={styles.profileTigerImg} alt="" />
              ) : (
                <img src={EagleImg} className={styles.profileEagleImg} alt="" />
              )}
              <div className={styles.profileText}>{userData.nickname}</div>
            </div>
            <Link to="/present" className={styles.presentDiv}>
              <div>
                <span className={styles.presentBadgeText}>
                  선물까지 필요한 뺏지
                </span>
                <div className={styles.presentBadgeDiv}>
                  <div
                    className={styles.presentBadgeFill}
                    style={{ width: fillWidth }}
                  ></div>
                </div>
              </div>

              <img src={PresentImg} className={styles.presentImg} alt="" />
            </Link>
          </div>
          <div className={styles.flexDiv2}>
            <div className={styles.myBadgeDiv}>
              <span className={styles.myBadgeLastSpan}>
                <span className={styles.myBadgeLast}>목숨 뺏지</span>
                <span className={styles.myBadgeSpan}>{userData.myBadge}</span>
              </span>
              <Link to="/kingLoading" className={styles.myBadgeCharge}>
                충전
              </Link>
            </div>
            <div className={styles.getBadgeDiv}>
              <span className={styles.getBadgeLast}>
                {userData.univ === "korea"
                  ? "뺏은 연대 뺏지"
                  : "뺏은 고대 뺏지"}
              </span>
              <span className={styles.getBadgeSpan}>{userData.getBadge}</span>
            </div>
          </div>
        </div>

        <div
          className={`${styles.settingImgDiv} ${
            showSetting ? "showSetting" : ""
          }`}
          onClick={handleSettingClick}
        >
          {showSetting ? (
            <img src={SettingImg} className={styles.settingImg} alt="" />
          ) : (
            <div className={styles.settingOpenImgDiv}>
              <img
                src={SettingOpenImg}
                className={styles.settingOpenImg}
                alt=""
              />
              <img
                src={SettingImg}
                className={styles.settingOpenedImg}
                alt=""
              />
              <Link to="/logout" className={styles.settingOpenText1}>
                로그아웃
              </Link>
              <a
                href="https://www.notion.so/routine-hy/70e746b080c946d3a0f3dd1761a1fc50"
                className={styles.settingOpenText2}
                onClick={(event) => {
                  event.preventDefault();
                  window.open(
                    "https://www.notion.so/routine-hy/70e746b080c946d3a0f3dd1761a1fc50"
                  );
                }}
              >
                제작 이야기
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
