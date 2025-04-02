import { useState } from "react";
import themeContext from "./themeContext";
import { Dimensions } from "react-native";

const ThemeState = (props) => {
    const [dark, setDark] = useState(false)
    const [pyq, setPyq] = useState(false)
    return (
        <themeContext.Provider value={{dark, setDark, pyq, setPyq}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeState