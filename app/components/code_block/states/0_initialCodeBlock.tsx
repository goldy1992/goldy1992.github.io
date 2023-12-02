import MultiTypeWriter from "../../typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { composableTag, privateFun, space, methodName, methodSignatureOpen, tab, modifierDeclaration, methodSignatureClose, functionOpen, column, tab2, paramModifier, modifierLower, dot, fillMaxSize, tab3, background, materialTheme, colorScheme, primaryContainer, comma, textFun, paramText, textValue, functionClose, ComposableAnnotation, KotlinKeyword, KotlinMethodName, KotlinDefaultText, KotlinFrameworkComposableOrObject, KotlinMethodParam, KotlinField, KotlinString, initialGreetingString } from "../code_text"



export function InitialCodeBlock({onComplete}: 
    {
        onComplete? : () => void
    }) {
    const code_blocks = [
        "  "
    ]
    const [blocks, cursor_visible, cursorPosition] = MultiTypeWriter(code_blocks, onComplete)

    let showCursorArray : Array<boolean> = []
    for (let n = 0; n < blocks.length; n++) {
        showCursorArray.push(cursor_visible && (cursorPosition == n))
    }
 
    // Fixes server side rendering undefined when the array is empty!
    if (blocks.length <= 0) {
        console.log("rendering empty code block")
        return <CodeBlock numberOfLines={16} >
            </CodeBlock>
    }

    return (
        <CodeBlock numberOfLines={16} >
            <ComposableAnnotation currentText={composableTag} cursorVisible={false} />
            <br/>
            <KotlinKeyword currentText={privateFun} cursorVisible={false} />
            <KotlinMethodName currentText={space + methodName} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
            <br/>
            <KotlinDefaultText currentText={tab + modifierDeclaration} cursorVisible={false} />
            <br/>
            <KotlinDefaultText currentText={methodSignatureClose + space + functionOpen} cursorVisible={false} />
            <br />
            <KotlinFrameworkComposableOrObject currentText={tab + column} cursorVisible={false} />
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
            <br />
            <KotlinMethodParam currentText={tab2 + paramModifier} cursorVisible={false} />
            <KotlinDefaultText currentText={modifierLower + dot} cursorVisible={false} />
            <KotlinMethodName currentText={fillMaxSize} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen + methodSignatureClose} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={tab3 + dot} cursorVisible={false} />
            <KotlinMethodName currentText={background} cursorVisible={false}/>
            <KotlinDefaultText currentText={  methodSignatureOpen + materialTheme + dot} cursorVisible={false} />
            <KotlinField currentText={colorScheme} cursorVisible={false} />
            <KotlinDefaultText currentText={dot} cursorVisible={false} />
            <KotlinField currentText={primaryContainer} cursorVisible={false} />
            <KotlinDefaultText currentText={methodSignatureClose} cursorVisible={false} />
            <KotlinKeyword currentText={comma} cursorVisible={false}/>
            <br />
            <KotlinDefaultText currentText={ tab + methodSignatureClose + space + functionOpen} cursorVisible={false} />
            <br />
            <KotlinFrameworkComposableOrObject currentText={tab2 + textFun} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
            <br />
            <KotlinMethodParam currentText={tab3 + paramText} cursorVisible={false} />
            <KotlinString currentText={initialGreetingString} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={tab2 + methodSignatureClose} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={tab + functionClose} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={functionClose + space} cursorVisible={showCursorArray[0]} />
        </CodeBlock>
    )
}


export function HelloWorldCodeBlock({onComplete}: 
    {
        onComplete? : () => void
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
    const [blocks, cursor_visible, cursorPosition] = MultiTypeWriter(code_blocks, onComplete)

    let showCursorArray : Array<boolean> = []
    for (let n = 0; n < blocks.length; n++) {
        showCursorArray.push(cursor_visible && (cursorPosition == n))
    }
 
    // Fixes server side rendering undefined when the array is empty!
    if (blocks.length <= 0) {
        return <CodeBlock numberOfLines={16} >
            </CodeBlock>
    }
    return (
        <CodeBlock numberOfLines={16} >
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
