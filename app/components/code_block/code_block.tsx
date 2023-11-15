import React, { useState, ReactNode } from "react"
import MultiTypeWriter from "../typewriter/multi_typewriter"
import CodeEditorTitleBar from "./header"

// compose semantics
const composableTag = "@Composable" 
const privateFun = "private fun "
const methodName = "HelloWorld" 
const methodSignatureOpen = "("
const modifierDeclaration = "   modifier: Modifier"
const modifierFillMaxSize = " = Modifier.fillMaxSize(),"
const methodSignatureClose =") {" 
const textFun = "   Text"
const textFunOpen = "(" 
const textFunTextParam = "      text = "
const textValue = "\"Hello world\"" 
const textFunClose = "    )"
const functionClose = "} "

export function ModifierFillMaxSize({onComplete}: {onComplete? : () => void}) {
    const code_blocks = [
        modifierFillMaxSize
    ]
    const [typed_code_blocks, cursor_visible, cursorPosition] = MultiTypeWriter(code_blocks, onComplete)

    return (
        <CodeBlock numberOfLines={9} >
        <span className="dark:text-yellow-300 text-yellow-500">{composableTag}</span><br/>
        <span className="dark:text-orange-400 text-blue-700">{privateFun}</span><span className="dark:text-amber-300 text-teal-600">{methodName}</span>{methodSignatureOpen}<br/>
        {modifierDeclaration}{typed_code_blocks[0]}{(cursor_visible && (cursorPosition == 0)) && "|" }<br/>
        {methodSignatureClose}<br/>
        <span className="text-green-300">{textFun}</span>{textFunOpen}<br/>
        <span className="text-blue-400">{textFunTextParam}</span><span className="text-green-500">{textValue}</span><br/>
        {textFunClose}<br/>
        {functionClose}<br />

        </CodeBlock>
    )
}


export function HelloWorldCodeBlock({onComplete}: {onComplete? : () => void}) {
    const code_blocks = [
        "@Composable", 
        "private fun", 
        "HelloWorld", 
        "(", 
        "   modifier: Modifier", 
        ") {", 
        "   Text", 
        "(",  
        "      text = ", 
        "\"Hello world\"", 
        "    )", 
        "} "
    ]
    const [typed_code_blocks, cursor_visible, cursorPosition] = MultiTypeWriter(code_blocks, onComplete)

    return (
        <CodeBlock numberOfLines={9} >
            <span className="dark:text-yellow-300 text-yellow-500">{typed_code_blocks[0]}</span>{(cursor_visible && (cursorPosition == 0)) && "|" }<br/>
            <span className="dark:text-orange-400 text-blue-700">{typed_code_blocks[1]}</span>{(cursor_visible && (cursorPosition == 1)) && "|" } <span className="dark:text-amber-300 text-teal-600">{typed_code_blocks[2]}</span>{(cursor_visible && (cursorPosition == 2)) && "|" }{typed_code_blocks[3]}{(cursor_visible && (cursorPosition == 3)) && "|" }<br/>
            {typed_code_blocks[4]}{(cursor_visible && (cursorPosition == 4)) && "|" }<br/>{typed_code_blocks[5]}{(cursor_visible && (cursorPosition == 5)) && "|" }<br/>
            <span className="text-green-300">{typed_code_blocks[6]}</span>{(cursor_visible && (cursorPosition == 6)) && "|" }{typed_code_blocks[7]}{(cursor_visible && (cursorPosition == 7)) && "|" }<br/>
            <span className="text-blue-400">{typed_code_blocks[8]}</span>{(cursor_visible && (cursorPosition == 8)) && "|" }<span className="text-green-500">{typed_code_blocks[9]}</span>{(cursor_visible && (cursorPosition == 9)) && "|" }<br/>
            {typed_code_blocks[10]}{(cursor_visible && (cursorPosition == 10)) && "|" }<br/>
            {typed_code_blocks[11]}{(cursor_visible && (cursorPosition == 11)) && "|" }<br />

            </CodeBlock>
    )
}

type OnCompleteFn = (idx: number) => void
type OnComplete = () => void
type ReactOnComplete = (oc: OnComplete) => ReactNode;
type ReactOnCompleteArray = Array<ReactOnComplete>

export function CodeBlock({children, numberOfLines}:{children: any, numberOfLines: number}) {
    var lineNumbers = ""
    for (let i=1; i < numberOfLines; i++) {
        lineNumbers += i + "\n"
    }
    lineNumbers += numberOfLines
    return (
        <div className="dark:bg-slate-800 bg-slate-100 w-full relative flex-auto">
            <pre className="flex flex-no-wrap min-h-full text-sm leading-6">
                <div aria-hidden="true" className="text-slate-600 py-4 pr-4 text-right select-none w-[50px]" >
                    {lineNumbers}
                </div>
                <code className="flex-grow relative block break-normal text-slate-50 pt-4 pb-4 px-4 overflow-auto">
                    {children}
                </code>
            </pre>
        </div>
    )
}

export default function CodeEditor() {
    const currentCode = TypingOrchestrator()

 
    return (
        <div className="mt-10 pt-8 grid grid-cols-12 grid-rows-5 mt-4">
            <div className="border-b border-slate-500/30 col-start-2 col-span-10 row-start-1 rounded row-span-2" >
                <CodeEditorTitleBar />
                {currentCode}
            </div>
        </div>
    )
}

export function TypingOrchestrator() : React.ReactNode {
    const [currentIndex, setCurrentIndex] = useState(0)

    const states : ReactOnCompleteArray = [
        (onComp: ()=> void) => (<HelloWorldCodeBlock onComplete={onComp}  />),
        (onComp: ()=> void) => (<ModifierFillMaxSize onComplete={onComp}  />)
    ]

    const onComplete = (idx: number) => {
        if (idx < (states.length-1)) {
            setCurrentIndex(idx + 1)      
        } 
    }

    return (states[currentIndex](() => {onComplete(currentIndex)}))
}