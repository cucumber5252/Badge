import styles from "./test.module.css";
import Qr from "./Qr";
import Game1 from "./Game1";
import Game2 from "./Game2";
import Loading1 from "./Loading1";
import Back from "./Back";

function test() {
  return (
    <>
      <span className={styles.testDiv}>안녕하세요</span>
      <Qr/>
    </>
  );
}

export default test;
