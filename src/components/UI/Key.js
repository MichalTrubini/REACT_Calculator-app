import React, {useContext} from "react";

import ThemeContext from "../../store/theme-context";

const Key = (props) => {

    const {setThemeStyles} = useContext(ThemeContext);

    return (
        <button style={setThemeStyles(props.styling)} className={props.className}>
            {props.children}
        </button>
    )
}

export default Key;