import { Link } from 'react-router-dom';
import './Back.module.css';

function Back({to}) {
    return (
    <>
    <Link to={to}>돌아가기</Link>
    </>
    );
}

export default Back;