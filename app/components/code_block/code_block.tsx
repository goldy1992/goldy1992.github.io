'use client'
import React, { useState, ReactNode } from "react"
import MultiTypeWriter from "../typewriter/multi_typewriter"
import CodeEditorTitleBar from "./header"
import { ComposableAnnotation, KotlinDefaultText, KotlinKeyword, KotlinMethodName, background, colorScheme, column, comma, composableTag, dot, fillMaxSize, functionClose, functionOpen, materialTheme, methodName, methodSignatureClose, methodSignatureOpen, modifierDeclaration, modifierLower, paramModifier, previewTag, primaryContainer, privateFun, space, tab, tab2, tab3, textFun, textFunClose, paramText, textValue, KotlinFrameworkComposableOrObject, KotlinMethodParam, KotlinField, KotlinString } from "./code_text"
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
        <span className="text-blue-400">{paramText}</span><span className="text-green-500">{textValue}</span><br/>
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
        composableTag, 
        privateFun, 
        space + methodName, 
        methodSignatureOpen,
        tab + modifierDeclaration,
        methodSignatureClose + space + functionOpen, 
        tab + column,
        methodSignatureOpen,
        tab2 + paramModifier,
        modifierLower + dot,
        fillMaxSize,
        methodSignatureOpen + methodSignatureClose,
        tab3 + dot,
        background,
        methodSignatureOpen + materialTheme + dot,
        colorScheme,
        dot,
        primaryContainer,
        methodSignatureClose,
        comma,
        tab + methodSignatureClose + space + functionOpen,
        tab2 + textFun, 
        methodSignatureOpen,  
        tab3 + paramText, 
        textValue, 
        tab2 + methodSignatureClose,
        tab + functionClose,
        functionClose + space
    ]
    const [blocks, cursor_visible, cursorPosition] = MultiTypeWriter(code_blocks, onTypingComplete, onAnimationComplete)

    let showCursorArray : Array<boolean> = []
    for (let n = 0; n < blocks.length; n++) {
        showCursorArray.push(cursor_visible && (cursorPosition == n))
    }
 
    // Fixes server side rendering undefined when the array is empty!
    if (blocks.length <= 0) {
        return <CodeBlock numberOfLines={14} >
            </CodeBlock>
    }
    return (
        <CodeBlock numberOfLines={14} >
            <ComposableAnnotation currentText={blocks[0]} cursorVisible={showCursorArray[0]} />
            <br/>
            <KotlinKeyword currentText={blocks[1]} cursorVisible={showCursorArray[1]} />
            <KotlinMethodName currentText={blocks[2]} cursorVisible={showCursorArray[2]}/>
            <KotlinDefaultText currentText={blocks[3]} cursorVisible={showCursorArray[3]} />
            <br/>
            <KotlinDefaultText currentText={blocks[4]} cursorVisible={showCursorArray[4]} />
            <br/>
            <KotlinDefaultText currentText={blocks[5]} cursorVisible={showCursorArray[5]} />
            <br />
            <KotlinFrameworkComposableOrObject currentText={blocks[6]} cursorVisible={showCursorArray[6]} />
            <KotlinDefaultText currentText={blocks[7]} cursorVisible={showCursorArray[7]} />
            <br />
            <KotlinMethodParam currentText={blocks[8]} cursorVisible={showCursorArray[8]} />
            <KotlinDefaultText currentText={blocks[9]} cursorVisible={showCursorArray[9]} />
            <KotlinMethodName currentText={blocks[10]} cursorVisible={showCursorArray[10]}/>
            <KotlinDefaultText currentText={blocks[11]} cursorVisible={showCursorArray[11]} />
            <br />
            <KotlinDefaultText currentText={blocks[12]} cursorVisible={showCursorArray[12]} />
            <KotlinMethodName currentText={blocks[13]} cursorVisible={showCursorArray[13]}/>
            <KotlinDefaultText currentText={blocks[14]} cursorVisible={showCursorArray[14]} />
            <KotlinField currentText={blocks[15]} cursorVisible={showCursorArray[15]} />
            <KotlinDefaultText currentText={blocks[16]} cursorVisible={showCursorArray[16]} />
            <KotlinField currentText={blocks[17]} cursorVisible={showCursorArray[17]} />
            <KotlinDefaultText currentText={blocks[18]} cursorVisible={showCursorArray[18]} />
            <KotlinKeyword currentText={blocks[19]} cursorVisible={showCursorArray[19]}/>
            <br />
            <KotlinDefaultText currentText={blocks[20]} cursorVisible={showCursorArray[20]} />
            <br />
            <KotlinFrameworkComposableOrObject currentText={blocks[21]} cursorVisible={showCursorArray[21]}/>
            <KotlinDefaultText currentText={blocks[22]} cursorVisible={showCursorArray[22]} />
            <br />
            <KotlinMethodParam currentText={blocks[23]} cursorVisible={showCursorArray[23]} />
            <KotlinString currentText={blocks[24]} cursorVisible={showCursorArray[24]} />
            <br />
            <KotlinDefaultText currentText={blocks[25]} cursorVisible={showCursorArray[25]} />
            <br />
            <KotlinDefaultText currentText={blocks[26]} cursorVisible={showCursorArray[26]} />
            <br />
            <KotlinDefaultText currentText={blocks[27]} cursorVisible={showCursorArray[27]} />
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
        console.log("setting on typing complete, idx: " + idx + " canRender: true")
        setCodeState({"currentIndex": idx, "canRender": true})      
    }

    return (states[codeState.currentIndex](
        () => {onTypingComplete(codeState.currentIndex)},
        () => {onAnimationComplete(codeState.currentIndex)}))
}