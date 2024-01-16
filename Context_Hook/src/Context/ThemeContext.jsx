import { useState,createContext } from "react";

const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
function ThemeProvider({children}){
    // eslint-disable-next-line no-undef
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme,
        toggleTheme
    }


    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}
