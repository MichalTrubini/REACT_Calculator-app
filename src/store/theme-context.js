import React, {useState} from "react";

const ThemeContext = React.createContext();

export function ThemeProvider({children}) {

    const [theme, setTheme] = useState('theme1');

    const setThemeHandler = (event) => {
        setTheme(prevValue => event.target.id);
    }

    const setThemeStyles = (arg) => {

        const styles = {
            theme1: {
                backgroundMain: 'background-main-one',
                headerText: 'header-color-one',
                backgroundToggle: 'background-toggle-one',
                screenProps: 'screen-props-one',
                backgroundKeyboard: 'background-keyboard-one',
                backgroundSwitcher: 'background-switcher-one',
                keyProps: 'key-props-one',
                delProps: 'del-props-one',
                resultProps: 'result-props-one'
            },
            theme2: {
                backgroundMain: 'background-main-two',
                headerText: 'header-color-two',
                backgroundToggle: 'background-toggle-two',
                screenProps: 'screen-props-two',
                backgroundKeyboard: 'background-keyboard-two',
                backgroundSwitcher: 'background-switcher-two',
                keyProps: 'key-props-two',
                delProps: 'del-props-two',
                resultProps: 'result-props-two'
            },
            theme3: {
                backgroundMain: 'background-main-three',
                headerText: 'header-color-three',
                backgroundToggle: 'background-toggle-three',
                screenProps: 'screen-props-three',
                backgroundKeyboard: 'background-keyboard-three',
                backgroundSwitcher: 'background-switcher-three',
                keyProps: 'key-props-three',
                delProps: 'del-props-three',
                resultProps: 'result-props-three'
            }
        }

        if (theme === 'theme1') {return styles.theme1[arg];}
        if (theme === 'theme2') {return styles.theme2[arg];}
        if (theme === 'theme3') {return styles.theme3[arg];}

    }

    const switcherPosition = () => {

        if (theme === 'theme1') return 'header__theme-switch-left ';
        if (theme === 'theme2') return 'header__theme-switch-middle ';
        if (theme === 'theme3') return 'header__theme-switch-right ';
    }

    return (
        <ThemeContext.Provider value={{theme, setThemeHandler, switcherPosition, setThemeStyles}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;