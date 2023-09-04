import './Game2.module.css';
import {useState} from 'react';

import yourCard from '../../assets/Game2/yourCard.svg';
import scissor from '../../assets/Game2/scissor.svg';
import rock from '../../assets/Game2/scissor.svg';
import paper from '../../assets/Game2/paper.svg';

import Back from '../Back/Back';

function Game2() {

    const [outcome, setOutcome] = useState('test');
    // setOutcome('백에서가져온값');
    return (
    <>
    <div>

        <div>
            <img src={rock} alt="rock"/>
            <div>가위</div>
        </div>


        <div>
            <div>
                <div>win</div>
            </div>
        </div>

        <div>
            <img src={scissor} alt="scissor"/>
            <div>가위</div>
        </div>

    </div>

    <Back to=""/>
    </>
    );
}

export default Game2;