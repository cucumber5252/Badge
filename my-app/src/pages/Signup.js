import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import BackImg from "../assets/Signup/BackImg.svg";
import TigerImg from "../assets/Signup/TigerImg.svg";
import EagleImg from "../assets/Signup/EagleImg.svg";
import ShadowTigerImg from "../assets/Signup/ShadowTigerImg.svg";
import ShadowEagleImg from "../assets/Signup/ShadowEagleImg.svg";

const Signup = () => {
  const [univ, setUniv] = useState(null);
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [showNicknameError, setShowNicknameError] = useState(false);
  const [showIdError, setShowIdError] = useState(false);

  const navigate = useNavigate();

  const handleTigerClick = (e) => {
    if (univ === "korea") {
      setUniv(null);
    } else {
      setUniv("korea");
    }
  };

  const handleEagleClick = (e) => {
    if (univ === "yon") {
      setUniv(null);
    } else {
      setUniv("yon");
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    // 입력된 닉네임이 6자 이하일 때만 업데이트
    if (value.length <= 6) {
      setNickname(value);
    }
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //fetch 만들기

    const apiUrl = "/api/user/signup/";

    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        userId: id,
        password,
      }),

      mode: "cors",
    })
      .then((response) => response.json())
      .then(() => navigate("/home"))
      .catch((error) => {
        if (error.message === "id") {
          setShowIdError(true);
        } else if (error.message === "nickname") {
          setShowNicknameError(true);
        }
      });
  };
  return (
    <>
      <Link to="/" className={styles.backImgLink}>
        <img className={styles.backImg} src={BackImg} alt="" />
      </Link>
      <div className={styles.loginDiv}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.univDiv}>
            {univ === "korea" ? (
              <img
                className={styles.TigerImg}
                src={TigerImg}
                alt=""
                onClick={handleTigerClick}
              />
            ) : (
              <img
                className={styles.TigerImg}
                src={ShadowTigerImg}
                alt=""
                onClick={handleTigerClick}
              />
            )}
            {univ === "yon" ? (
              <img
                className={styles.EagleImg}
                src={EagleImg}
                alt=""
                onClick={handleEagleClick}
              />
            ) : (
              <img
                className={styles.EagleImg}
                src={ShadowEagleImg}
                alt=""
                onClick={handleEagleClick}
              />
            )}
          </div>
          <span className={styles.showUnivError}>*학교를 선택해주세요!</span>
          <div className={styles.nicknameDiv}>
            <span className={styles.nicknameTitle}>닉네임</span>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className={styles.nicknameInput}
              placeholder="띄어쓰기 없이 최대 6자"
            ></input>
          </div>

          {showNicknameError && (
            <span className={styles.showNicknameError}>
              *다른 사람이 이미 선점했지롱
            </span>
          )}
          <div className={styles.idDiv}>
            <span className={styles.idTitle}>아이디</span>
            <input
              type="text"
              value={id}
              onChange={handleIdChange}
              className={styles.idInput}
            ></input>
          </div>
          {showIdError && (
            <span className={styles.showIdError}>
              *다른 사람이 이미 선점했지롱
            </span>
          )}
          <div className={styles.pwDiv}>
            <span className={styles.pwTitle}>비밀번호</span>
            <input
              type="password"
              value={password}
              onChange={handlePwChange}
              className={styles.pwInput}
              placeholder="8자 이상으로 설정해주세요!"
            />
          </div>
        </form>
        <div className={styles.signupButton} onClick={handleSubmit}>
          등록하기
        </div>
        <div className={styles.warnings}>
          <div className={styles.warningDiv}>
            아이디 비번은 다시 찾을 수 없어요
          </div>
          <div className={styles.warningDiv}>무조건 기억하기^^</div>
        </div>
      </div>
    </>
  );
};

export default Signup;
