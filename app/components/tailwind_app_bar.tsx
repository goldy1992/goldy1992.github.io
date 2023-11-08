import Image from 'next/image'
import { useContext, useEffect, useState } from 'react';
import DarkModeButton from '../dark_mode_button';
import { IsDarkModeContext } from '../dark_mode_context';
import {  motion, useMotionValueEvent, useScroll} from "framer-motion"
const duration = 0.3
export default function TailwindAppBar() {

  const dm = useContext(IsDarkModeContext);
  const github_image = dm.enabled ? "./github-mark/github-mark-white.svg" : "./github-mark/github-mark.svg"



  return (
      <div className="fixed w-full pt-2 pb-2 bg-neutral-100 dark:bg-neutral-900 flex flex-row flex-nowrap items-center space-x-2.5 px-4 pt-1">
    
        <Image
          src={github_image}
          alt="Github"
          className="flex-none"
          width={25}
          height={25}
        />

        <div className="text-gray-800 dark:text-gray-200 font-medium text-lg">
              goldy1992
        </div> 
      
        <div className='grow'/>
        <div>
          <DarkModeButton />
        </div>
      </div>

  );
}


