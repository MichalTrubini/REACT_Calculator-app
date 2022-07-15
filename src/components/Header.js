import React, { useState, useContext } from 'react';
import ThemeContext from '../store/theme-context';
import '../css/header.css'

const Header = () => { 

    const {switcherPosition} = useContext(ThemeContext);
    const {setThemeHandler} = useContext(ThemeContext);
    const {setThemeStyles} = useContext(ThemeContext);

    return (
        <div style={setThemeStyles('backgroundMain')}>
            <header style={setThemeStyles('headerText')} className="header">
                <div className="header__left">
                    <p className='header__title'>calc</p>
                </div>
                <div className="header__right">
                    <p className='header__subtitle'>theme</p>
                    <div className='header__theme-switch-wrapper'>
                        <p className='header__theme-switch-positions'><span>1</span><span>2</span><span>3</span></p>
                        <div style={setThemeStyles('backgroundToggle')} className='header__theme-switch-container'>
                            <div id='theme1' className='header__theme-switch-position' onClick={setThemeHandler}></div>
                            <div id='theme2' className='header__theme-switch-position' onClick={setThemeHandler}></div>
                            <div id='theme3' className='header__theme-switch-position' onClick={setThemeHandler}></div>
                            <div style={setThemeStyles('backgroundSwitcher')} className={switcherPosition() + ' header__theme-switch'}></div>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header;