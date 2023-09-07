import styles from "./Present.module.css";
import { useEffect, useState } from "react";

import KingImg from "../assets/Present/KingImg.svg";
import PresentImg from "../assets/Present/PresentImg.svg";

import Back from "../components/Back/Back";

const Present = () => {
  const lastNumber = 90;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(5);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  document.body.style.background = "none";
  document.body.style.backgroundColor = "#FCFCF6";

  const apiUrlToGet =
    "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/api/user/get-phone-num-amount/";
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(apiUrlToGet, {
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
        console.log(data);
        setAmount(data.amount);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //fetch 만들기
    const apiUrlToSubmit =
      "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/api/game/god-game/";

    const token = localStorage.getItem("token");

    const bodyToFetch = {
      phoneNumber,
    };

    //choice를 서버에 보내는 것은, 시간이 0초가 되었을 때임.
    fetch(apiUrlToSubmit, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyToFetch),

      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })

      .catch((error) => {
        console.log(error);
      });
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
      <div className={styles.submitButtons}>
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

        <div className={styles.submitPresentButton}>
          <div className={styles.submitPresentButtonLastDiv}>
            <div className={styles.submitPresentButtonLast}>신청한 선물</div>
          </div>
          <span
            className={styles.submitPresentButtonText}
            onClick={handleSubmit}
          >
            {amount}
          </span>
        </div>
      </div>

      <div className={styles.backButtonDiv}>
        <Back />
      </div>
    </div>
  );
};

export default Present;
