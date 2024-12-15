import React, { createContext , useContext} from "react";

export const ThemeContext = createContext(
    // default kuch na kuch feel ho jab context create ho 
    {
        themeMode:"light",
        darkTheme: ()=>{},
       lightTheme: ()=>{},
    }
)

export const  ThemeProvider = ThemeContext.Provider


//coutom hooks

export default function useTheme(){
    return useContext(ThemeContext)
}
