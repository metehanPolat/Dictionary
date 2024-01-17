import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState({
        modeDark : localStorage.getItem('localDarkMode')===null ? false: localStorage.getItem('localDarkMode'),
        fontFamily : "sans-serif",
        
    })

    const newSetTheme = (newTheme) => {
        localStorage.setItem('localDarkMode', newTheme.modeDark);
        setTheme(newTheme)
    }

    const values = {theme,setTheme:newSetTheme}
    
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)