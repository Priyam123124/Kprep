import { useState } from "react";
import themeContext from "./themeContext";

const ThemeState = (props) => {
    const [dark, setDark] = useState(false)
    return (
        <themeContext.Provider value={{dark, setDark}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeState