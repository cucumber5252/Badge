import { useNavigate } from "react-router-dom";
import styles from "./Back.module.css";

function Back() {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className={styles.backDiv} onClick={handleNavigate}>
      돌아가기
    </div>
  );
}

export default Back;
