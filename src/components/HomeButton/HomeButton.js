import { useNavigate } from "react-router-dom";
import styles from "./HomeButton.module.css";

function HomeButton() {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/main");
  };
  return (
    <div className={styles.backDiv} onClick={handleNavigate}>
      홈으로
    </div>
  );
}

export default HomeButton;
