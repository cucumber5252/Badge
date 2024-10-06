import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import BackImg from "../assets/Signup/BackImg.svg";
import TigerImg from "../assets/Signup/TigerImg.svg";
import EagleImg from "../assets/Signup/EagleImg.svg";
import ShadowTigerImg from "../assets/Signup/ShadowTigerImg.svg";
import ShadowEagleImg from "../assets/Signup/ShadowEagleImg.svg";

const Signup = ({ myData, socket, roomId }) => {
  const [univ, setUniv] = useState(null);
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [showNicknameError, setShowNicknameError] = useState(false);
  const [showIdError, setShowIdError] = useState(false);
  const [showPwError, setShowPwError] = useState(false);

  const [nicknameError, setNicknameError] = useState("");
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");

  const navigate = useNavigate();

  document.body.style.background = "none";
  document.body.style.backgroundColor = "#FCFCF6";

  const handleTigerClick = (e) => {
    if (univ === "korea") {
      setUniv(null);
    } else {
      setUniv("korea");
    }
  };

  const handleEagleClick = (e) => {
    if (univ === "yonsei") {
      setUniv(null);
    } else {
      setUniv("yonsei");
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    // 입력된 닉네임이 6자 이하일 때만 업데이트
    if (value.length <= 7) {
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

    let isValid = true;

    if (!nickname) {
      setNicknameError("닉네임을 입력하렴!");
      setShowNicknameError(true);
      isValid = false;
    } else {
      setShowNicknameError(false);
    }

    if (!id) {
      setIdError("아이디를 입력하렴!");
      setShowIdError(true);
      isValid = false;
    } else {
      setShowIdError(false);
    }

    if (password.length < 8) {
      setPwError("조건에 맞는 비밀번호를 입력하렴!");
      setShowPwError(true);
      isValid = false;
    } else {
      setShowPwError(false);
    }

    // If any of the fields are not valid, stop here.
    if (!isValid) return;

    const apiUrl =
      "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/api/user/signup/";

    const bodyToFetch = {
      userId: id,
      nickname,
      password,
      univ,
    };

    console.log(bodyToFetch);

    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyToFetch),
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Parse complete:", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", id);
      })
      .then(() => {
        if (roomId) {
          navigate("/qr", { state: { myData, visitorSocket: socket, roomId } });
          return;
        }

        if (localStorage.getItem("token")) {
          navigate("/main");
        }
      })
      .catch((error) => {
        if (error.message === "id") {
          setIdError("*누군가 이미 선점했지롱");
          setShowIdError(true);
        } else if (error.message === "nickname") {
          setNicknameError("*누군가 이미 선점했지롱");
          setShowNicknameError(true);
        }
        console.log(error);
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
            {univ === "yonsei" ? (
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
          <span className={styles.showUnivError}>*학교를 선택하렴!</span>
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
            <span className={styles.showNicknameError}>*{nicknameError}</span>
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
            <span className={styles.showIdError}>*{idError}</span>
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
          {showPwError && (
            <span className={styles.showPwError}>*{pwError}</span>
          )}
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
