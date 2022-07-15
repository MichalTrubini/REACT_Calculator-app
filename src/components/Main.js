import React, {useContext} from "react";

import ThemeContext from "../store/theme-context";

import '../css/main.css'
import Key from "./UI/Key";

const Main = () => {

    const {setThemeStyles} = useContext(ThemeContext);

    return (
        <main style={setThemeStyles('backgroundMain')} className="main">
            <div className="screen">
                <input style={setThemeStyles('screenProps')} value={'399,981'} className="screen__input" readOnly/>
            </div>
            <div style={setThemeStyles('backgroundKeyboard')} className="keyboard">
                <div className="keyboard__top">
                    <Key styling='keyProps' className="key key--small">7</Key>
                    <Key styling='keyProps' className="key key--small">8</Key>
                    <Key styling='keyProps' className="key key--small">9</Key>
                    <Key styling='delProps' className="key key--small">DEL</Key>
                    <Key styling='keyProps' className="key key--small">4</Key>
                    <Key styling='keyProps' className="key key--small">5</Key>
                    <Key styling='keyProps' className="key key--small">6</Key>
                    <Key styling='keyProps' className="key key--small">+</Key>
                    <Key styling='keyProps' className="key key--small">1</Key>
                    <Key styling='keyProps' className="key key--small">2</Key>
                    <Key styling='keyProps' className="key key--small">3</Key>
                    <Key styling='keyProps' className="key key--small">-</Key>
                    <Key styling='keyProps' className="key key--small">.</Key>
                    <Key styling='keyProps' className="key key--small">0</Key>
                    <Key styling='keyProps' className="key key--small">/</Key>
                    <Key styling='keyProps' className="key key--small">x</Key>
                </div>
                <div className="keyboard__bottom">
                    <Key styling='delProps' className="key key--large">DEL</Key>
                    <Key styling='resultProps' className="key key--large">=</Key>
                </div>
            </div>
        </main>
    )
}

export default Main;