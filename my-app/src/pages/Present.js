import styles from "./Present.module.css";
import { useState } from "react";

import KingImg from "../assets/Present/KingImg.svg";
import PresentImg from "../assets/Present/PresentImg.svg";

import Back from "../components/Back/Back";

const Present = () => {
  const lastNumber = 90;
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited!");
    //fetch 만들기
  };

  return (
    <div className={styles.presentDiv}>
      <div className={styles.kingImgDiv}>
        <div className={styles.kingImgSays}>
          <div className={styles.kingImgSay}>옥황 옥황</div>
          <div className={styles.kingImgSay}>바니바니 바니바니</div>
        </div>
        <img className={styles.kingImg} src={KingImg} alt=""></img>
      </div>
      <div className={styles.kingImgBigSays}>
        <div className={styles.kingImgBigSay}>
          하늘에서 내려온 옥황상제가 하는 말
        </div>
        <div className={styles.kingImgBigSay}>
          '동물의 왕에게는 선물을 내려주마!'
        </div>
      </div>
      <img src={PresentImg} className={styles.presentImg} alt="" />
      <form className={styles.phoneNumberInputForm} onSubmit={handleSubmit}>
        <input
          className={styles.phoneNumberInput}
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="연락받을 전화번호 쓰기"
        />
      </form>
      <div className={styles.submitInfoButton}>
        <div className={styles.submitInfoButtonLastDiv}>
          <div className={styles.submitInfoButtonLast}>
            마감까지 {lastNumber}명
          </div>
        </div>
        <span className={styles.submitInfoButtonText} onClick={handleSubmit}>
          선착순 신청하기
        </span>
      </div>
      <div className={styles.backButtonDiv}>
        <Back to={"/home"} />
      </div>
    </div>
  );
};

export default Present;
