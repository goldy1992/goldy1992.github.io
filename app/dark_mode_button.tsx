import IconButton from "@mui/material/IconButton/IconButton";
import { IsDarkModeContext } from "./dark_mode_context"
import React, { useContext } from "react";
import { DarkModeIcon, LightModeIcon } from "./icons/icons";

export default function DarkModeButton() {
  console.log("@invoking darkmode button")
    const dm = useContext(IsDarkModeContext);

    const lightModeIcon =   ( 
      <IconButton onClick={() => {dm.setIsDarkMode(false)
          console.log("setting dm false")
           }} > 
          <LightModeIcon className="stroke-sky-800 dark:stroke-sky-100 w-6 h-6 mr-2" />
        </IconButton>
    );

    
    const darkModeIcon =   ( 
      <IconButton onClick={() => {dm.setIsDarkMode(true) }} > 
          <DarkModeIcon className="stroke-sky-800 dark:stroke-sky-100 w-6 h-6 mr-2"/>
        </IconButton>
    );
    return (
      <IsDarkModeContext.Provider value={{enabled: dm.enabled, setIsDarkMode: dm.setIsDarkMode}}>
      { dm.enabled ? lightModeIcon : darkModeIcon      }

    </IsDarkModeContext.Provider>
    );
}

// export default function NextDarkModeButton() {
//   const { systemTheme, theme, setTheme } = useTheme();
//   const currentTheme = theme === 'system' ? systemTheme : theme;
//     const lightModeIcon =   ( 
//       <IconButton onClick={() => {dm.setIsDarkMode(false)
//       console.log("setting dm false") }} > 
//           <LightModeIcon/>
//         </IconButton>
//     );

    
//     const darkModeIcon =   ( 
//       <IconButton onClick={() => {dm.setIsDarkMode(true) }} > 
//           <DarkModeIcon/>
//         </IconButton>
//     );
//     return (
//       <IsDarkModeContext.Provider value={{enabled: dm.enabled, setIsDarkMode: dm.setIsDarkMode}}>
//       { dm.enabled ? lightModeIcon : darkModeIcon      }

//     </IsDarkModeContext.Provider>
//     );
// }




