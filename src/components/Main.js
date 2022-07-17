import React, {useContext} from "react";

import Header from "./Header";
import Keyboard from "./Keyboard";

import ThemeContext from "../store/theme-context";

const Main = () => {

    const {setThemeStyles} = useContext(ThemeContext);

    return (
        <div className={setThemeStyles('backgroundMain') + " wrapper"}>
            <Header />
            <Keyboard/>
        </div>
    )
}

export default Main;