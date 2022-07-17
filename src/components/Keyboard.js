import React, {useContext, useState} from "react";

import ThemeContext from "../store/theme-context";

import '../css/main.css'
import Key from "./UI/Key";

const Keyboard = () => {

    const {setThemeStyles} = useContext(ThemeContext);

    const[valueOutput, setvalueOutput] = useState('');
    const [calcInputFirst, setCalcInputFirst] = useState('');
    const [operatorInput, setOperatorInput] = useState('');

    const inputNumberHandler = (value) => {
        
        if (calcInputFirst === '') {setvalueOutput(prevValue => prevValue + value)}
        else if (valueOutput === calcInputFirst) {setvalueOutput(value)} 
        else setvalueOutput(prevValue => prevValue + value);
    }

    const inputResetHandler = () => {
        setvalueOutput('');
        setCalcInputFirst('');
        setOperatorInput('');
    }

    const inputOperatorHandler = (value) => {
        setCalcInputFirst(valueOutput);
        setOperatorInput(value);
    }

    const inputResultHandler = () => {
        if (operatorInput === 'x') setvalueOutput(parseInt(calcInputFirst) * parseInt(valueOutput))
        else if (operatorInput === '+') setvalueOutput(parseInt(calcInputFirst) + parseInt(valueOutput))
        else if (operatorInput === '-') setvalueOutput(parseInt(calcInputFirst) - parseInt(valueOutput))
        else if (operatorInput === '/') setvalueOutput(parseInt(calcInputFirst / valueOutput));
    }

    const inputDeletetHandler = () => {

        setvalueOutput(prevValue => prevValue.slice(0,-1))
    }

    return (
        <main className="main">
            <div className="screen">
                <input style={setThemeStyles('screenProps')} value={valueOutput} className="screen__input" readOnly/>
            </div>
            <div style={setThemeStyles('backgroundKeyboard')} className="keyboard">
                <div className="keyboard__top">
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('7')}}>7</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('8')}}>8</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('9')}}>9</Key>
                    <Key styling='delProps' className="key key--small" onClick={inputDeletetHandler}>DEL</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('4')}}>4</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('5')}}>5</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('6')}}>6</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputOperatorHandler('+')}}>+</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('1')}}>1</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('2')}}>2</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('3')}}>3</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputOperatorHandler('-')}}>-</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('.')}}>.</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputNumberHandler('0')}}>0</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputOperatorHandler('/')}}>/</Key>
                    <Key styling='keyProps' className="key key--small" onClick={() => {inputOperatorHandler('x')}}>x</Key>
                </div>
                <div className="keyboard__bottom">
                    <Key styling='delProps' className="key key--large" onClick={inputResetHandler}>RESET</Key>
                    <Key styling='resultProps' className="key key--large" onClick={inputResultHandler}>=</Key>
                </div>
            </div>
        </main>
    )
}

export default Keyboard;