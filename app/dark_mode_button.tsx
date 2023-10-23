import IconButton from "@mui/material/IconButton/IconButton";
import { IsDarkModeContext } from "./dark_mode_context"
import React, { useContext } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkModeButton() {
  console.log("@invoking darkmode button")
    const dm = useContext(IsDarkModeContext);

    const lightModeIcon =   ( 
      <IconButton onClick={() => {dm.setIsDarkMode(false)
          console.log("setting dm false")
           }} > 
          <LightModeIcon className="fill-yellow-500" />
        </IconButton>
    );

    
    const darkModeIcon =   ( 
      <IconButton onClick={() => {dm.setIsDarkMode(true) }} > 
          <DarkModeIcon className="fill-yellow-500"/>
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




