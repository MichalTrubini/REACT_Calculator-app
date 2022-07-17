import React, {useContext, useState} from "react";

import ThemeContext from "../store/theme-context";

import '../css/main.css'
import Key from "./UI/Key";

const Keyboard = () => {

    const {setThemeStyles} = useContext(ThemeContext);

    const [valueOutput, setvalueOutput] = useState('0');
    const [calcInputFirst, setCalcInputFirst] = useState('');
    const [operatorInput, setOperatorInput] = useState('');

    const inputNumberHandler = (value) => {
        
        if (String(valueOutput).includes('.') & value === '.') return; 
        if (calcInputFirst === '' & valueOutput.length < 10 ) {setvalueOutput(prevValue => prevValue.replace(/^0+/, '') + value)}
        else if (valueOutput === calcInputFirst) {setvalueOutput(value)} 
        else if (valueOutput.length < 10 ) setvalueOutput(prevValue => prevValue.replace(/^0+/, '') + value);
    }
    console.log('valueoutput ' + valueOutput);
    console.log('calcInputFirst ' + calcInputFirst);

    const inputResetHandler = () => {
        setvalueOutput('0');
        setCalcInputFirst('');
        setOperatorInput('');
    }

    const inputOperatorHandler = (value) => {
        setCalcInputFirst(valueOutput);
        setOperatorInput(value);
    }

    const inputResultHandler = () => {

        if (operatorInput === 'x') setvalueOutput(parseFloat(calcInputFirst) * parseFloat(valueOutput))
        else if (operatorInput === '+') setvalueOutput(parseFloat(calcInputFirst) + parseFloat(valueOutput))
        else if (operatorInput === '-') setvalueOutput(parseFloat(calcInputFirst) - parseFloat(valueOutput))
        else if (operatorInput === '/') setvalueOutput(parseFloat(calcInputFirst / valueOutput));
    }

    const inputDeletetHandler = () => {
        if (valueOutput === '0') return;
        if (valueOutput.length === 1) return setvalueOutput('0');
        setvalueOutput(prevValue => String(prevValue).slice(0,-1))
    }

    return (
        <main className="main">
            <div className="screen">
                <label htmlFor="screen-output" hidden>Screen output</label>
                <input id="screen-output" value={valueOutput} className={setThemeStyles('screenProps') + " screen__input"} readOnly/>
            </div>
            <div className={setThemeStyles('backgroundKeyboard') + " keyboard"} >
                <div className="keyboard__top">
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('7')}}>7</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('8')}}>8</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('9')}}>9</Key>
                    <Key className={setThemeStyles('delProps') + " key key--small key--small-fix"} onClick={inputDeletetHandler}>DEL</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('4')}}>4</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('5')}}>5</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('6')}}>6</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputOperatorHandler('+')}}>+</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('1')}}>1</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('2')}}>2</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('3')}}>3</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputOperatorHandler('-')}}>-</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('.')}}>.</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputNumberHandler('0')}}>0</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputOperatorHandler('/')}}>/</Key>
                    <Key className={setThemeStyles('keyProps') + " key key--small"} onClick={() => {inputOperatorHandler('x')}}>x</Key>
                </div>
                <div className="keyboard__bottom">
                    <Key className={setThemeStyles('delProps') + " key key--large"} onClick={inputResetHandler}>RESET</Key>
                    <Key className={setThemeStyles('resultProps') + " key key--large"}  onClick={inputResultHandler}>=</Key>
                </div>
            </div>
        </main>
    )
}

export default Keyboard;