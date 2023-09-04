import styles from './Qr.module.css';
import qrExample from '../assets/Qr/qrExample.png';
import Back from './Back';
function Qr() {


    return (
    <>
    <div className={styles.qrDiv}>
        <div className={styles.qrImgDiv}>
            <img className={styles.qrImg} src={qrExample} alt="qrExample"/>
        </div>
        <div>
            <p>상대에게 QR을 보여주어 매칭</p>
        </div>
    
        <Back className={styles.backButton} />
    </div>
    </>
    );
}

export default Qr;