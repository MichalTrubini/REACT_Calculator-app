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
                backgroundToggle: {background:'hsl(223, 31%, 20%)'},
                backgroundScreen: {background:'hsl(224, 36%, 15%)'},
                backgroundSwitcher: {background:'hsl(6, 63%, 50%)'},
                backgroundKey1: {background:'hsl(225, 21%, 49%)'},
                shadowKey1: {},
                backgroundKey2: {background:'hsl(6, 63%, 50%)'},
                shadowKey2: {background:'hsl(6, 70%, 34%)'},
                backgroundKey3: {background:'hsl(30, 25%, 89%)'},
                shadowKey3: {background:'hsl(28, 16%, 65%)'},
                text2: {color:'hsl(221, 14%, 31%)'},
                text1: {color:'hsl(0, 0%, 100%)'}
            },
            theme2: {
                backgroundMain: {background:'hsl(0, 0%, 90%)'},
                backgroundToggle: {background:'hsl(0, 5%, 81%)'},
                backgroundScreen: {background:'hsl(0, 0%, 93%)'},
                backgroundSwitcher: {background:'hsl(25, 98%, 40%)'},
                backgroundKey1: {background:'hsl(185, 42%, 37%)'},
                shadowKey1: {background:'hsl(185, 58%, 25%)'},
                backgroundKey2: {background:'hsl(25, 98%, 40%)'},
                shadowKey2: {background:'hsl(25, 99%, 27%)'},
                backgroundKey3: {background:'hsl(45, 7%, 89%)'},
                shadowKey3: {background:'hsl(35, 11%, 61%)'},
                text1: {color:'hsl(60, 10%, 19%)'},
                text2: {color:'hsl(0, 0%, 100%)'}
            },
            theme3: {
                backgroundMain: {background:'hsl(268, 75%, 9%)'},
                backgroundToggle: {background:'hsl(268, 71%, 12%)'},
                backgroundScreen: {background:'hsl(268, 71%, 12%)'},
                backgroundSwitcher: {background:'hsl(176, 100%, 44%)'},
                backgroundKey1: {background:'hsl(281, 89%, 26%)'},
                shadowKey1: {background:'hsl(285, 91%, 52%)'},
                backgroundKey2: {background:'hsl(176, 100%, 44%)'},
                shadowKey2: {background:'hsl(177, 92%, 70%)'},
                backgroundKey3: {background:'hsl(268, 47%, 21%)'},
                shadowKey3: {background:'hsl(290, 70%, 36%)'},
                text2: {color:'hsl(198, 20%, 13%)'},
                text1: {color:'hsl(52, 100%, 62%)'},
                text3: {color:'hsl(0, 0%, 100%)'}
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