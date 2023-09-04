import './Loading1.module.css';
import eagle from '../../assets/Loading1/eagle.svg';
import tiger from '../../assets/Loading1/tiger.svg';
import mystery from '../../assets/Loading1/mystery.svg';
function Loading1() {


    return (
    <>
    <div>
        <div>
            <div>
                <div>아가새</div>
                <div>0전 0승 0패</div>
                <img src={mystery} alt="mystery"/>
            </div>

            <div>
                <div>초전도대학생</div>
                <div>0전 0승 0패</div>
                <img src={tiger} alt="tiger"/>
            </div>
        </div>
        <div>
            아가새(이)가<br/>
            승부를 걸어왔다!
        </div>

    </div>

    
    </>
    );
}

export default Loading1;