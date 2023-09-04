import { useState } from "react";
import styles from "./Signup.module.css";
import TitleImg from "../assets/Login/TitleImg.svg";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showNicknameError, setShowNicknameError] = useState(true);
  const [showIdError, setShowIdError] = useState(true);
  const [showPwError, setShowPwError] = useState(true);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
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
  };

  return (
    <div className={styles.loginDiv}>
      <img className={styles.titleImg} src={TitleImg} alt="" />
      <form onSubmit={handleSubmit}>
        <div className={styles.nicknameDiv}>
          <span className={styles.nicknameTitle}>닉네임</span>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            className={styles.nicknameInput}
          ></input>
        </div>
        <div className={styles.idDiv}>
          <span className={styles.idTitle}>아이디</span>
          <input
            type="text"
            value={id}
            onChange={handleIdChange}
            className={styles.idInput}
          ></input>
        </div>
        <div className={styles.pwDiv}>
          <span className={styles.pwTitle}>비밀번호</span>
          <input
            type="password"
            value={password}
            onChange={handlePwChange}
            className={styles.pwInput}
          />
        </div>
      </form>

      <div className={styles.signupButton}>등록하기</div>
    </div>
  );
};

export default Login;
