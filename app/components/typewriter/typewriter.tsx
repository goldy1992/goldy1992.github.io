'use client'
import { Dispatch, useEffect, useState } from "react";

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
            <span>{currentText}</span>
            <span>{textCursorVisible && text_cursor}</span>
        </div>

    );
}
