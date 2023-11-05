import Image from 'next/image'
import { useContext, useState } from 'react';
import DarkModeButton from './dark_mode_button';
import { IsDarkModeContext } from './dark_mode_context';
import { motion, useMotionValueEvent, useScroll} from "framer-motion"

export default function TailwindAppBar() {

  const dm = useContext(IsDarkModeContext);
  const github_image = dm.enabled ? "./github-mark/github-mark-white.svg" : "./github-mark/github-mark.svg"

  /** add this bit **/
  const { scrollY, } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    update()
    console.log("x changed to", latest)
  })

 /** add useState hook to manage state **/
 const [hidden, setHidden] = useState(false);

 /** this onUpdate function will be called in the `scrollY.onChange` callback **/
 function update() {
   if (scrollY?.get() < scrollY?.getPrevious()) {
     setHidden(false);
     console.log("visible");
   } else if (scrollY?.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) {
     setHidden(true);
     console.log("hidden");
   }
 }

 /** add this const **/
 const variants = {
  /** this is the "visible" key and it's respective style object **/
  visible: { y: 0 },
  /** this is the "hidden" key and it's respective style object **/
  hidden: { y: -100 }
  };

  return (
    <div className='fixed w-full'>
      <motion.nav
        /** the variants object needs to be passed into the motion component **/
        variants={variants}
        /** it's right here that we match our boolean state with these variant keys **/
        animate={hidden ? "hidden" : "visible"}
    
        /** I'm also going to add a custom easing curve and duration for the animation **/
        transition={{ ease: 'linear', duration: 0.3 }}>

      <div className="pt-2 pb-2 bg-neutral-100 dark:bg-neutral-900 flex flex-row flex-nowrap items-center space-x-2.5 px-4 pt-1">
    
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
    
      </motion.nav>
    </div>
  );
}


