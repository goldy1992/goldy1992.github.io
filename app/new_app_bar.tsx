import { AppBar, Typography } from "@mui/material";
import DarkModeButton from "./dark_mode_button";
import Image from 'next/image'
import React from "react";
import { IsDarkModeContext } from "./dark_mode_context";
import useScrollTrigger from '@mui/material/useScrollTrigger/useScrollTrigger';
import Slide from '@mui/material/Slide/Slide';

export default function NewAppBar() {
    const dm = React.useContext(IsDarkModeContext);
    const github_image = dm.enabled ? "./github-mark/github-mark-white.svg" : "./github-mark/github-mark.svg"
  
    return (
      <HideOnScroll>  
       <AppBar elevation={0} className="bg-neutral-100 dark:bg-neutral-900" >
          <div className="flex flex-row flex-nowrap items-center space-x-2.5 px-4 pt-1">
            <Image
              src={github_image}
              alt="Github"
              className="flex-none"
              width={25}
              height={25}
              priority
            />
    
            <div className="text-gray-800 dark:text-gray-200 font-medium text-lg">
                  goldy1992
            </div> 
          
            <div className='grow'/>
            <div>
              <DarkModeButton />
            </div>
          </div>
        </AppBar>
      </HideOnScroll>

    );
}

function HideOnScroll({
    children,
  }: {
    children: React.ReactElement
  }) {
   // const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
     // target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }