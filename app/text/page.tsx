'use client'

import TailwindAppBar from "@/components/tailwind_app_bar";
import Image from "next/image";
import profilePic from "../../public/profile_pic.jpg"

export default function AnimateText() {
    return (
        <div className="flex flex-col">
            <TailwindAppBar />
            <div className="mt-12">
            {/* <motion.linearGradient
                initial={{ 
                    color: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* IE10+ */
     //               color: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); 
                }
                {/* animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 2 }}
              > */} 
            <span className="text-6xl font-bold bg-gradient-to-r from-sky-500 via-neutral-100 via-50% to-sky-500 shine">
            Hello World</span>
            {/* </motion.div> */}
            </div>

            <span className="text-6xl font-bold from-sky-500 via-neutral-100 via-50% to-sky-500">
            Hello World</span>
            {/* </motion.div> */}

            <div className="flex bg-yellow-500 p-4">
                <Image className="rounded-full w-56 h-56 border-solid border-2 border-sky-500" alt="profilepic" src={profilePic} 
              />
            </div>
         
        </div>
    )
}