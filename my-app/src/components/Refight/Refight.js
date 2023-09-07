import { useNavigate } from "react-router-dom";
import styles from "./Refight.module.css";

function Refight() {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/kingGame");
  };
  return (
    <div className={styles.backDiv} onClick={handleNavigate}>
      다시 붙기
    </div>
  );
}

export default Refight;
