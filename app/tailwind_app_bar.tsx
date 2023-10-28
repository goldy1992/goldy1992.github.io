import Image from 'next/image'
import { useContext } from 'react';
import DarkModeButton from './dark_mode_button';
import { IsDarkModeContext } from './dark_mode_context';

export default function TailwindAppBar() {

    const dm = useContext(IsDarkModeContext);
    const github_image = dm.enabled ? "./github-mark/github-mark-white.svg" : "./github-mark/github-mark.svg"

    return (
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

    );
}