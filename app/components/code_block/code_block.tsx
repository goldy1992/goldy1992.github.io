'use client'
import React, { useState, ReactNode } from "react"
import MultiTypeWriter from "../typewriter/multi_typewriter"
import CodeEditorTitleBar from "./header"
import { ComposableAnnotation, KotlinDefaultText, KotlinKeyword, KotlinMethodName, composableTag, functionClose, functionOpen, methodName, methodSignatureClose, methodSignatureOpen, modifierDeclaration, previewTag, privateFun, space, tab, tab2, textFun, textFunClose, textFunTextParam, textValue } from "./code_text"
import ICodeState from "./ICodeState"
import CodeRenderer from "./renderer"

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
        <span className="text-blue-400">{textFunTextParam}</span><span className="text-green-500">{textValue}</span><br/>
        {textFunClose}<br/>
        {functionClose}<br />

        </CodeBlock>
    )
}


export function HelloWorldCodeBlock({onAnimationComplete, onTypingComplete}: 
    {
        onAnimationComplete? : () => void, 
        onTypingComplete? : () => void
    }) {
    const code_blocks = [
        previewTag,
        composableTag, 
        privateFun, 
        methodName, 
        methodSignatureOpen,
        tab + modifierDeclaration,
        methodSignatureClose + space + functionOpen, 
        textFun, 
        methodSignatureOpen,  
        tab2 + textFunTextParam, 
        textValue, 
        tab + methodSignatureClose, 
        functionClose
    ]
    const [typed_code_blocks, cursor_visible, cursorPosition] = MultiTypeWriter(code_blocks, onTypingComplete, onAnimationComplete)

    let currentPreviewTag = typed_code_blocks[0]
    let isTypingPreview = cursor_visible && (cursorPosition == 0)
    let currentComposableTag = typed_code_blocks[1]
    let isTypingComposableTag = cursor_visible && (cursorPosition == 1)
    let currentPrivateFun = typed_code_blocks[2]
    let isTypingPrivateFun = cursor_visible && (cursorPosition == 2)
    let currentMethodName = typed_code_blocks[3]
    let isTypingMethodName = cursor_visible && (cursorPosition == 3)
    let currentMethodSignatureOpen = typed_code_blocks[4]
    let isTypingMethodSignatureOpen = cursor_visible && (cursorPosition == 4)
    let currentModifierDeclaration = typed_code_blocks[5]
    let isTypingModifierDeclaration = cursor_visible && (cursorPosition == 5)
    let currentMethodSignatureClose = typed_code_blocks[6]
    let isTypingMethodSignatureClose= cursor_visible && (cursorPosition == 6)

    // Fixes server side rendering undefined when the array is empty!
    if (typed_code_blocks.length <= 0) {
        return <CodeBlock numberOfLines={9} >
            </CodeBlock>
    }
    return (
        <CodeBlock numberOfLines={9} >
            <ComposableAnnotation currentText={currentPreviewTag} cursorVisible={isTypingPreview} />
            <br/>
            <ComposableAnnotation currentText={currentComposableTag} cursorVisible={isTypingComposableTag} />
            <br/>
            <KotlinKeyword currentText={currentPrivateFun} cursorVisible={isTypingPrivateFun} />
            <KotlinMethodName currentText={ space + currentMethodName} cursorVisible={isTypingMethodName}/>
            <KotlinDefaultText currentText={currentMethodSignatureOpen} cursorVisible={isTypingMethodSignatureOpen} />
            <br/>
            <KotlinDefaultText currentText={currentModifierDeclaration} cursorVisible={isTypingModifierDeclaration} />
            <br/>
            <KotlinDefaultText currentText={currentMethodSignatureClose} cursorVisible={isTypingMethodSignatureClose} />

            {/* {typed_code_blocks[4]}{(cursor_visible && (cursorPosition == 4)) && "|" }<br/>{typed_code_blocks[5]}{(cursor_visible && (cursorPosition == 5)) && "|" }<br/>
            <span className="text-green-300">{typed_code_blocks[6]}</span>{(cursor_visible && (cursorPosition == 6)) && "|" }{typed_code_blocks[7]}{(cursor_visible && (cursorPosition == 7)) && "|" }<br/>
            <span className="text-blue-400">{typed_code_blocks[8]}</span>{(cursor_visible && (cursorPosition == 8)) && "|" }<span className="text-green-500">{typed_code_blocks[9]}</span>{(cursor_visible && (cursorPosition == 9)) && "|" }<br/>
            {typed_code_blocks[10]}{(cursor_visible && (cursorPosition == 10)) && "|" }<br/>
            {typed_code_blocks[11]}{(cursor_visible && (cursorPosition == 11)) && "|" }<br /> */}

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
        <div className="dark:bg-slate-800 bg-slate-100 w-full flex-none">
            <pre className="flex flex-no-wrap min-h-full text-sm leading-6 flex-none">
                <div aria-hidden="true" className="text-slate-600 py-4 pr-4 text-right select-none w-[50px]" >
                    {lineNumbers}
                </div>
                <code className="flex-none  block break-normal text-slate-50 pt-4 pb-4 px-4 overflow-auto">
                    {children}
                </code>
            </pre>
        </div>
    )
}

export default function CodeEditor() {
    const [codeState, setCodeState] = useState<ICodeState>({ "currentIndex": 0, "canRender": false})
    const currentCode = TypingOrchestrator(codeState, setCodeState)

    console.log("current code = " + currentCode)
    return (
        <div className="px-4 mt-12 flex flex-row justify-center gap-x-3 ">
            <div className="flex flex-1 flex-col overflow-x-auto">
                <CodeEditorTitleBar /> 
                {currentCode}
            </div>
            <div className="flex-1 rounded bg-yellow-400">
                <CodeRenderer codeState={codeState} />
            </div>
        </div>

    )
}


type OnComplete = () => void
type ReactOnComplete = (onTypingComplete: OnComplete, onAnimationComplete: OnComplete) => ReactNode;
type ReactOnCompleteArray = Array<ReactOnComplete>

export function TypingOrchestrator(
    codeState: ICodeState, 
    setCodeState: React.Dispatch<React.SetStateAction<ICodeState>>) : React.ReactNode {

    const states : ReactOnCompleteArray = [
        (onComp: OnComplete, onAnimComp: OnComplete) => (<HelloWorldCodeBlock onTypingComplete={onComp} onAnimationComplete={onAnimComp}  />),
   //     (onComp: OnComplete) => (<ModifierFillMaxSize onComplete={onComp}  />)
    ]

    const onAnimationComplete = (idx: number) => {
        if (idx < (states.length-1)) {
            setCodeState({"currentIndex": idx + 1, "canRender": false})      
        } 
    }

    const onTypingComplete = (idx: number) => {
        setCodeState({"currentIndex": idx, "canRender": true})      
    }

    return (states[codeState.currentIndex](
        () => {onTypingComplete(codeState.currentIndex)},
        () => {onAnimationComplete(codeState.currentIndex)}))
}