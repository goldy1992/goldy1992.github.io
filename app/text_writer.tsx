'use client'
import TypewriterTitle from "./components/typewriter/typewriter";

const terminal_cursor = ">  "
const typing_text = "I'm a full-stack developer."

export default function TextWriter() {
    return (
        <div className='mt-10 pt-8 pb-6'>
        <div className="p-2 max-w-sm mx-auto bg-secondaryContainer-light dark:bg-secondaryContainer-dark rounded-xl shadow-lg flex items-center space-x-2">

          <div className='flex flex-row flex-wrap items-center'>
              <div className="flex-none font-mono text-gray-800 dark:text-gray-200">{terminal_cursor}</div>
              <div className="flex-none pl-2 font-mono text-gray-800 dark:text-gray-200"> 
                <TypewriterTitle text={typing_text} infinite={true} className="flex-none" /> 
                </div>
              {/* <div className="flex-none blinker p-0 font-mono text-gray-800 dark:text-gray-200">{textCursorVisible && text_cursor}</div> */}
          </div>
        </div>
        </div>
    )
}