import Typography from "@mui/material/Typography/Typography";
import { useEffect, useState } from "react";

const text_retype_delay = 5000
const terminal_cursor = ">  "
const default_type_delay=50
const text_cursor = "|"
const text_cursor_delay = 700

export default function TypewriterTitle({ 
    text = "no text defined", 
    delay = default_type_delay, 
    infinite = true,
    className = "flex-none"
}: {
    text: string, 
    delay?: number, 
    infinite: boolean,
    className: string})  {

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textCursorVisible, setTextCursorVisible] = useState(true);
    const [isTyping, setIsTyping] = useState(false)

    useEffect(()=> {
        let timeout : NodeJS.Timeout;

        if (currentIndex < text.length) {
            setIsTyping(true);
            timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
        } else if (infinite) {
            setIsTyping(false);
            // ADD THIS CHECK
            timeout = setTimeout(() => {
                setCurrentIndex(0);
                setCurrentText("");
            }, text_retype_delay);
        }
      
          return () => clearTimeout(timeout);
        }, [currentIndex, delay, infinite, text]);

    useEffect(()=> {
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            setTextCursorVisible(true);
        } else {
            timeout = setTimeout(() => {
                setTextCursorVisible(!textCursorVisible)
              }, text_cursor_delay);
        }

        return () => clearTimeout(timeout);
    }, [isTyping, textCursorVisible]);
      
    return (
        <div className={className}>
            <div className='flex flex-row flex-wrap items-center'>
                <div className="flex-none font-mono text-gray-800 dark:text-gray-200">{terminal_cursor}</div>
                <div className="flex-none pl-2 font-mono text-gray-800 dark:text-gray-200">{currentText}</div>
                <div className="flex-none blinker p-0 font-mono text-gray-800 dark:text-gray-200">{textCursorVisible && text_cursor}</div>
            </div>
        </div>
    );
}
