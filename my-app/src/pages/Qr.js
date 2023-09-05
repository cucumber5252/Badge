import styles from "./Qr.module.css";
import qrExample from "../assets/Qr/qr_example.png";

import Back from "../components/Back/Back";

function Qr() {
  return (
    <div className={styles.qrDiv}>
      <div className={styles.qrImgDiv}>
        <img src={qrExample} alt="qrExample" className={styles.qrImg} />
      </div>
      <div className={styles.qrText}>QR로 상대 매칭하기</div>
      <Back />
    </div>
  );
}

export default Qr;
