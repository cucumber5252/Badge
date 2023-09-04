import './Game1.module.css';
import {useEffect, useState} from 'react';

import yourCard from '../../assets/Game1/yourCard.svg';
import scissor from '../../assets/Game1/scissor.svg';
import rock from '../../assets/Game1/scissor.svg';
import paper from '../../assets/Game1/paper.svg';

function Game1() {
    let [timeLeft, setTimeLeft] = useState(5);
    let [choice, setChoice] = useState('rock');

    function rockChoiceHandler() {
        setChoice('rock');
    }

    function scissorChoiceHandler() {
        setChoice('scissor');
    }

    function paperChoiceHandler() {
        setChoice('paper')
    }
    useEffect( () => {
        //설정된 시간 간격마다 SetInterval 콜백이 실행된다.
        const id = setInterval(() =>{
            //타이머 숫자가 하나씩 줄어들도록
            setTimeLeft((timeLeft) => timeLeft -1);
        }, 1000);

        //0이 되면 카운트다운 멈춤
        if (timeLeft ===0) {
            clearInterval(id);
        }
        return () => clearInterval(id);
        //timeLeft 변수가 바뀔때마다 useEffect 실행
    }, [timeLeft]);

    return (
    <>
    <div>
        <div>
            <div>
                <span>상대도 선택 중</span>
            </div>
            <div>
                <img src={yourCard} alt="yourCard" />
            </div>
        </div>

        <div>
            <div>
                {timeLeft}
            </div>
            <div>
                <span>제한시간 안에 골라주세요</span>
            </div>
        </div>

        <div>
            <div onClick={scissorChoiceHandler}>
                <img src={scissor} alt="scissor"/>
                <div>가위</div>
            </div>
            <div onClick={rockChoiceHandler}>
                <img src={rock} alt="rock"/>
                <div>바위</div>
            </div>
            <div onClick={paperChoiceHandler}>
                <img src={paper} alt="paper"/>
                <div>보</div>
            </div>
        </div>

    </div>

    
    </>
    );
}

export default Game1;