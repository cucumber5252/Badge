import styles from "./Rule.module.css";
import KvsY from "../assets/Rule/KvsY.svg";
import vsTotal from "../assets/Rule/vsTotal.svg";
import KvsK from "../assets/Rule/KvsK.svg";
import YvsY from "../assets/Rule/YvsY.svg";

import Back from "../components/Back/Back";

function rule() {
  return (
    <div className={styles.container}>
      <div className={styles.square}>
        1. 상대와 대결 시 내 목숨 뺏지를 하나 건다.
      </div>
      <div className={styles.square}>
        2. 대결에 이긴 쪽이 상대의 목숨 뺏지를 가져간다.
      </div>
      <div className={styles.square}>
        3. 대결에 이기면 내 목숨 뺏지는 없어지지 않는다.
      </div>
      <div className={styles.imagecontainer}>
        <img src={KvsY} className={styles.KvsY} alt="" />
        <img src={vsTotal} className={styles.vsTotal} alt="" />
      </div>
      <div className={styles.square2}>
        4. 다른 학교와 대결시 얻은 타학교의 뺏지는 <br></br>전리품이 되어 다시
        뺏기지않는다.
      </div>
      <div className={styles.square}>5.이때 뺏은 뺏지 현황에 적용된다.</div>
      <div className={styles.imagecontainer}>
        <img src={KvsK} className={styles.KvsK} alt="" />
        <img src={YvsY} className={styles.YvsY} alt="" />
      </div>
      <div className={styles.square2}>
        6.같은 학교와 대결해서 얻은 같은 학교의 뺏지는 <br></br>내 목숨으로
        사용된다.
      </div>
      <div className={styles.backButtonDiv}>
        <Back />
      </div>
    </div>
  );
}

export default rule;
