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
                backgroundMain: {background:'hsl(222, 26%, 31%)'},
                headerText: {color:'hsl(0, 0%, 100%)'},
                backgroundToggle: {background:'hsl(223, 31%, 20%)'},
                screenProps: {background:'hsl(224, 36%, 15%)', color:'hsl(0, 0%, 100%)'},
                backgroundKeyboard: {background:'hsl(223, 31%, 20%)'},
                backgroundSwitcher: {background:'hsl(6, 63%, 50%)'},
                keyProps: {background:'hsl(30, 25%, 89%)', color:'hsl(221, 14%, 31%)', boxShadow: 'inset 0px -4px 0px #B3A497'},
                delProps: {background: 'hsla(225, 21%, 49%, 1)', color:'hsl(0, 0%, 100%)', fontSize: '2rem', boxShadow: 'inset 0px -4px 0px #414E73'},
                resultProps: {background: 'hsla(6, 63%, 50%, 1)', color:'hsl(0, 0%, 100%)', boxShadow: 'inset 0px -4px 0px #93261A'}
            },
            theme2: {
                backgroundMain: {background:'hsl(0, 0%, 90%)'},
                headerText: {color:'hsl(60, 10%, 19%)'},
                backgroundToggle: {background:'hsl(0, 5%, 81%)'},
                screenProps: {background:'hsl(0, 0%, 93%)', color:'hsl(60, 10%, 19%)'},
                backgroundKeyboard: {background:'hsl(0, 5%, 81%)'},
                backgroundSwitcher: {background:'hsl(25, 98%, 40%)'},
                keyProps: {background:'hsl(45, 7%, 89%)', color:'hsl(60, 10%, 19%)', boxShadow: 'inset 0px -4px 0px #A79E91'},
                delProps: {background: 'hsla(184, 42%, 37%, 1)', color:'hsl(0, 0%, 100%)', fontSize: '2rem', boxShadow: 'inset 0px -4px 0px #1B6066'},
                resultProps: {background: 'hsla(25, 98%, 40%, 1)', color:'hsl(0, 0%, 100%)', boxShadow: 'inset 0px -4px 0px #873901'}
            },
            theme3: {
                backgroundMain: {background:'hsl(268, 75%, 9%)'},
                headerText: {color:'hsl(52, 100%, 62%)'},
                backgroundToggle: {background:'hsl(268, 71%, 12%)'},
                screenProps: {background:'hsl(268, 71%, 12%)', color:'hsl(52, 100%, 62%)'},
                backgroundKeyboard: {background:'hsl(268, 71%, 12%)'},
                backgroundSwitcher: {background:'hsl(176, 100%, 44%)'},
                keyProps: {background:'hsl(268, 47%, 21%)', color:'hsl(52, 100%, 62%)', boxShadow: 'inset 0px -4px 0px #881C9E'},
                delProps: {background: 'hsla(281, 89%, 26%, 1)', color:'hsl(0, 0%, 100%)', fontSize: '2rem', boxShadow: 'inset 0px -4px 0px #BE15F4'},
                resultProps: {background: 'hsla(176, 100%, 44%, 1)', color:'hsla(198, 20%, 13%, 1)', boxShadow: 'inset 0px -4px 0px #6CF9F1'}
            }
        }

        if (theme === 'theme1') {return styles.theme1[arg];}
        if (theme === 'theme2') {return styles.theme2[arg];}
        if (theme === 'theme3') {return styles.theme3[arg];}

    }

    const switcherPosition = () => {
        //if (theme === 'theme1') return {left: '0'}
        //if (theme === 'theme2') return {left: '0', right: '0', margin: 'auto'}
        //if (theme === 'theme3') return {right: '0'}

        if (theme === 'theme1') return 'header__theme-switch-left';
        if (theme === 'theme2') return 'header__theme-switch-middle';
        if (theme === 'theme3') return 'header__theme-switch-right';
    }

    return (
        <ThemeContext.Provider value={{theme, setThemeHandler, switcherPosition, setThemeStyles}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;