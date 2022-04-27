import { createContext } from "react";
import { useReducer } from "react";


export const ThemeContext = createContext();

const init_state = { darkMode: false }

const themeReducer = (state, actioin) => {
    switch (actioin.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode }
        default:
            return state;
    }

}


export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, init_state)
    return (
        <ThemeContext.Provider value={{ state, dispatch }}> {props.children}</ThemeContext.Provider>
    )
}
