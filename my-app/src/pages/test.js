import styles from "./test.module.css";
import Qr from "./Qr/Qr";
import Game1 from "./Game1/Game1";
import Game2 from "./Game2/Game2";
import Loading1 from "./Loading1/Loading1";
import Back from "./Back/Back";

function test() {
  return (
    <>
      <span className={styles.testDiv}>안녕하세요</span>
      <Game2 />
    </>
  );
}

export default test;
