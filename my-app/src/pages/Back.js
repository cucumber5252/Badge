import { Link } from 'react-router-dom';
import styles from './Back.module.css';

function Back({to}) {
    return (
    <>
    <div className={styles.backButton}>
        <Link style={{textDecoration:"none"}} className={styles.link} to={to}>돌아가기</Link>
    </div>
    </>
    );
}

export default Back;