import React, { createContext, useContext, useEffect, useState } from "react";


const DarkMode = createContext();

const DarkModeProvider = ({children})=>{
    const initialMode = localStorage.getItem("dark") || "light";
    const [dark,setDark] = useState(initialMode) ;


    const toggle = ()=>{
        if(dark === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark")
        }
    };
    useEffect(()=>{
        toggle();
        localStorage.setItem("dark",dark)
    },[dark]);

    const handleSwitch = ()=>{
        setDark(dark === "dark" ? "light" : "dark")
    };

    const Component = DarkMode.Provider ;
    return <Component value={{dark,handleSwitch}}>{children}</Component>
};

const useDarkMode = ()=>useContext(DarkMode);
export {DarkModeProvider,useDarkMode}