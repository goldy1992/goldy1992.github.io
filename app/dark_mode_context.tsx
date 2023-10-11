import { createContext, useState } from 'react';


export const IsDarkModeContext = createContext({
    enabled: true,
    setIsDarkMode: (dm:boolean) => {}});

export function DarkModeProvider(props:any) {
    const [darkMode, setDarkMode] = useState(true);
    console.log("setting provider darkmode to: " + darkMode);
    return <IsDarkModeContext.Provider 
    value={{ enabled: darkMode, setIsDarkMode: setDarkMode }}>
        {props.children}
        </IsDarkModeContext.Provider>;
  }

