import Typography from "@mui/material/Typography/Typography";
import { useEffect, useState } from "react";

const text_update_id = "text_update_id"
const terminal_cursor = "> "

export default function TypewriterTitle({fullText}: {fullText: string})  {

    useEffect(() => {
        typewriter(fullText, "",);
    }, [fullText]);

    return (
        <div className='flex flex-row flex-nowrap items-center'>
            {/* <p className="flex-none font-mono pr-2">{terminal_cursor}</p> */}
            <Typography
              component="p"
              variant="subtitle1"
              align="left"
              color="text.primary"
              className='flex-none pr-2 font-mono'
            >{terminal_cursor}</Typography>
            
            {/* <p className='flex-none font-mono' id={text_update_id}></p> */}
            <Typography
              component="p"
              variant="subtitle1"
              align="left"
              color="text.primary"
              id={text_update_id}
              className='flex-none font-mono'
            />  
            <Typography
            component="p"
            variant="subtitle1"
            align="left"
            color="text.primary"
            className='flex-none blinker font-mono'
          >|</Typography>

            {/* <p className='blinker flex-none'>|</p> */}
        </div>
    );
}


function typewriter(fullText: string, currentTextState: string) {
    let typingComplete = currentTextState.length >= fullText.length
    let newText= typingComplete ? "" : currentTextState + fullText.charAt(currentTextState.length)
    updateElement(newText)
    let waitTime = newText.length >= fullText.length ? 5000 : 50
    setTimeout(() => { typewriter(fullText, newText)}, waitTime)
}

function updateElement(newText: string) {
    let element = document.getElementById(text_update_id);
    if (element != null) {
        element.innerHTML = newText
    }
}
