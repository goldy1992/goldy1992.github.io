'use client'
import React, { useState, ReactNode } from "react"
import MultiTypeWriter from "../typewriter/multi_typewriter"
import CodeEditorTitleBar from "./header"
import { composableTag, functionClose, methodName, methodSignatureClose, methodSignatureOpen, modifierDeclaration, privateFun, textFun, textFunClose, paramText, textValue } from "./code_text"
import CodeRenderer from "./renderer"
import { InitialCodeBlock } from "./states/0_initialCodeBlock"
import ICodeState from "./ICodeState"
import TextNameBold from "./states/1_textNameBold"
import TextJobItalics from "./states/2_textJobItalics"
import VerticalCenter from "./states/4_verticalCenter"
import ProfilePic from "./states/3_profilePic"
import ProfilePicCenter from "./states/5_profilePic_center"
import TextAlignCenter from "./states/6_textAlignCenter"
import FontSizeLarger from "./states/7_fontSizeLarger"

export function ModifierFillMaxSize({onComplete}: {onComplete? : () => void}) {
    const code_blocks = [ ""
    //   modifierFillMaxSize
    ]
    const [typed_code_blocks, cursor_visible, cursorPosition] = MultiTypeWriter(code_blocks, onComplete)

    return (
        <CodeBlock numberOfLines={9} >
        <span className="dark:text-yellow-300 text-yellow-500">{composableTag}</span><br/>
        <span className="dark:text-orange-400 text-blue-700">{privateFun}</span><span className="dark:text-amber-300 text-teal-600">{methodName}</span>{methodSignatureOpen}<br/>
        {modifierDeclaration}{typed_code_blocks[0]}{(cursor_visible && (cursorPosition == 0)) && "|" }<br/>
        {methodSignatureClose}<br/>
        <span className="text-green-300">{textFun}</span>{"textFunOpen"}<br/>
        <span className="text-blue-400">{paramText}</span><span className="text-green-500">{textValue}</span><br/>
        {textFunClose}<br/>
        {functionClose}<br />

        </CodeBlock>
    )
}


export function CodeBlock({children, numberOfLines}:{children: any, numberOfLines: number}) {
    var lineNumbers = ""
    for (let i=1; i < numberOfLines; i++) {
        lineNumbers += i + "\n"
    }
    lineNumbers += numberOfLines
    return (
        <div className="dark:bg-slate-800 bg-slate-200 w-full flex-none">
            <pre className="flex flex-no-wrap min-h-full text-xs leading-3 flex-none">
                <div aria-hidden="true" className="text-slate-600 py-4 pr-4 text-right select-none w-[50px]" >
                    {lineNumbers}
                </div>
                <code className="flex-grow block break-normal text-slate-50 pt-4 pb-4 px-4 overflow-auto">
                    {children}
                </code>
            </pre>
        </div>
    )
}

export default function CodeEditor({className} : {className? : string}) {
    const [codeState, setCodeState] = useState<ICodeState>({ "currentIndex": 0, "canRender": false})
    const currentCode = TypingOrchestrator(codeState, setCodeState)
    let rootClassName = "px-4 mt-12 flex flex-row justify-center gap-x-3 " + className 
    console.log("current code = " + currentCode)
    return (
        <div className={rootClassName}>
            <div className="flex flex-1 flex-col overflow-x-auto">
                <CodeEditorTitleBar /> 
                {currentCode}
            </div>
            <div className="flex-1 rounded dark:bg-sky-700 bg-sky-200">
                <CodeRenderer codeState={codeState} />
            </div>
        </div>
    )
}


type OnComplete = () => void
type ReactOnComplete = (onTypingComplete: OnComplete) => ReactNode;
type ReactOnCompleteArray = Array<ReactOnComplete>

export function TypingOrchestrator(
    codeState: ICodeState, 
    setCodeState: React.Dispatch<React.SetStateAction<ICodeState>>) : React.ReactNode {

    const states : ReactOnCompleteArray = [
        (onComp: OnComplete) => (<InitialCodeBlock onComplete={onComp}  />),
        (onComp: OnComplete) => (<TextNameBold onComplete={onComp}  />),
        // (onComp: OnComplete) => (<TextJobItalics onComplete={onComp}  />),
        // (onComp: OnComplete) => (<ProfilePic onComplete={onComp}  />),
        // (onComp: OnComplete) => (<VerticalCenter onComplete={onComp}  />),
        // (onComp: OnComplete) => (<ProfilePicCenter onComplete={onComp}  />),
        // (onComp: OnComplete) => (<TextAlignCenter onComplete={onComp}  />),
        // (onComp: OnComplete) => (<FontSizeLarger onComplete={onComp}  />),
    ]



    const onComplete = (idx: number) => {
        console.log("setting on typing complete, idx: " + idx + " canRender: true")
        setCodeState({"currentIndex": idx, "canRender": true})
        console.log("declaring timeout")
        let timeout = setTimeout(() => {
            let nextIdx = idx < (states.length - 1) ? idx + 1 : 0
            setCodeState({"currentIndex": nextIdx, "canRender": false})
            }, 2000)  
        console.log("on complete returning")
        return () => clearTimeout(timeout); 
    }

    console.log("currentidx: " +  codeState.currentIndex)
    return (
        states[codeState.currentIndex] (
         () => {onComplete(codeState.currentIndex)}
        )
    )
}