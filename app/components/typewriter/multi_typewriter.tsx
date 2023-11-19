'use client'

import { useEffect, useState } from "react"

const text_retype_delay = 5000
const terminal_cursor = ">  "
const default_type_delay=25
const text_cursor = "|"
const text_cursor_delay = 700

export default function MultiTypeWriter(
    strings : Array<string>, 
    onComplete?: () => void,
    delay: number = default_type_delay,
) : Array<any> {
    const [currentText, setCurrentText] = useState<Array<string>>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textCursorVisible, setTextCursorVisible] = useState(true);
    const [cursorPosition, setCursorPosition] = useState(0)
    const [isTyping, setIsTyping] = useState(false)
    let lastIdx = getStringArrayLength(strings)
    
    useEffect(()=> {
        console.log("hit useEffect")
        let timeout : NodeJS.Timeout;
        if (currentIndex < lastIdx) {          
            setIsTyping(true);
            timeout = setTimeout(() => {
                setCurrentText(createTypedStringArray(currentIndex, strings))
                setCursorPosition(getIdxOfCurrentString(currentIndex, strings))
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
        } else if (isTyping) {
            setIsTyping(false);
            if (onComplete != null) {
                console.log("setting onComplete")
               onComplete()
            }
        }
        return () => clearTimeout(timeout);
    }, [currentIndex, delay, isTyping]);

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

    return Array<any>(currentText, textCursorVisible, cursorPosition)
}

function getStringArrayLength(strings: Array<string>) {
    let toReturn = 0;
    strings.forEach((s)=>{
        toReturn += s.length
    })
    return toReturn
}

function getIdxOfCurrentString(currentIndex: number, strings: Array<string>) : number {
    let count = 0
    for (let i = 0; i < strings.length; i++) {
        let s = strings[i]
        count += s.length
        if (count > currentIndex) {
            return i;
        }
    }
    return strings.length - 1
}

function createTypedStringArray(currentIdx: number, strings : Array<string>) : Array<string> {
    let toReturn = []
    for (let i = 0; i < strings.length; i++) {
        toReturn.push("")
    }

    let count = 0
    let strIdx = 0
    let complete = false
    while (!complete) {
        let currentStr = strings[strIdx]
        let newCount = count + currentStr.length
        if (newCount >= currentIdx) {
            let charsToPush = currentIdx - count + 1;
            toReturn[strIdx] = currentStr.substring(0, charsToPush)
            
            complete = true;
        } else {
            count = newCount
            toReturn[strIdx] = strings[strIdx]
            strIdx++
        }
    }
    return toReturn
}
