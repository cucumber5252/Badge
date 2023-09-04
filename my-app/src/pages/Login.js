import { useState } from "react";
import styles from "./Login.module.css";
import TitleImg from "../assets/Login/TitleImg.svg";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

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

      <div className={styles.loginButton}>
        로그인하기
        {showError && <div className={styles.errorMessage}>*땡 틀렸습니다</div>}
      </div>

      <div className={styles.signupButton}>회원가입</div>
    </div>
  );
};

export default Login;
