import styles from "./NavBar.module.css";
import TigerImg from "../../assets/NavBar/TigerImg.svg";
import EagleImg from "../../assets/NavBar/EagleImg.svg";
import PresentImg from "../../assets/NavBar/PresentImg.svg";
import SettingImg from "../../assets/NavBar/SettingImg.svg";
import SettingOpenImg from "../../assets/NavBar/SettingOpenImg.svg";

import { useEffect, useState } from "react";

const NavBar = ({ userData }) => {
  const { nickname, univ, myBadge, getBadge } = userData;

  const [showSetting, setShowSetting] = useState(false);

  const getBadgePercent = (getBadge % 10) * 10;
  const fillWidth = `${getBadgePercent}%`;

  const handleSettingClick = (e) => {
    e.preventDefault();
    setShowSetting((prev) => !prev);
  };

  return (
    <>
      <div className={styles.NavBarDiv}>
        <div className={styles.MarginDiv}>
          <div className={styles.flexDiv1}>
            <div className={styles.profileDiv}>
              {univ === "korea" ? (
                <img src={TigerImg} className={styles.profileImg} alt="" />
              ) : (
                <img src={EagleImg} className={styles.profileImg} alt="" />
              )}
              <div className={styles.profileText}>{nickname}</div>
            </div>
            <div className={styles.presentDiv}>
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
            </div>
          </div>
          <div className={styles.flexDiv2}>
            <div className={styles.myBadgeDiv}>
              <span className={styles.myBadgeLastSpan}>
                <span className={styles.myBadgeLast}>목숨 뺏지</span>
                <span className={styles.myBadgeSpan}>{myBadge}</span>
              </span>
              <span className={styles.myBadgeCharge}>충전</span>
            </div>
            <div className={styles.getBadgeDiv}>
              <span className={styles.getBadgeLast}>
                {univ === "korea" ? "뺏은 연대 뺏지" : "뺏은 고대 뺏지"}
              </span>
              <span className={styles.getBadgeSpan}>{getBadge}</span>
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
              <div className={styles.settingOpenText1}>로그아웃</div>
              <div className={styles.settingOpenText2}>제작 이야기</div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.test}>adf</div>
    </>
  );
};

export default NavBar;
