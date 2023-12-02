import MultiTypeWriter from "@/components/typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { tab2, name, dot, comma, ComposableAnnotation, composableTag, KotlinKeyword, privateFun, KotlinMethodName, space, methodName, KotlinDefaultText, methodSignatureOpen, tab, modifierDeclaration, methodSignatureClose, functionOpen, KotlinFrameworkComposableOrObject, column, KotlinMethodParam, paramModifier, modifierLower, fillMaxSize, tab3, background, materialTheme, KotlinField, colorScheme, primaryContainer, textFun, paramText, KotlinString, functionClose, buildAnnotatedString, append, initialGreetingStart, tab4, withStyle, paramStyle, spanStyle, paramFontWeight, fontWeight, bold, tab5, initialGreetingMiddle, job } from "../code_text"

export default function TextNameBold({onComplete}: 
    {
        onComplete? : () => void
    }) {
    const code_blocks = [
        buildAnnotatedString + space + functionOpen,
        tab3 + append + methodSignatureOpen,
        "\"" + initialGreetingStart + "\"",
        methodSignatureClose,
        tab3 + withStyle,
        methodSignatureOpen,
        paramStyle,
        space + spanStyle + methodSignatureOpen,
        paramFontWeight,
        space + fontWeight + dot,
        bold,
        methodSignatureClose + methodSignatureClose + space + functionOpen,
        tab4 + append + methodSignatureOpen,
        "\"" + name + "\"",
        methodSignatureClose,
        tab3 + functionClose,
        tab3 + append + methodSignatureOpen,
        "\"" + initialGreetingMiddle + job + "\"",
        methodSignatureClose,
        tab2 + functionClose + methodSignatureClose
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
        <CodeBlock numberOfLines={24} >
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
            <KotlinMethodParam currentText={paramText} cursorVisible={false} />
            <KotlinDefaultText currentText={blocks[0]} cursorVisible={showCursorArray[0]} />
            <br />
            <KotlinDefaultText currentText={blocks[1]} cursorVisible={showCursorArray[1]} />
            <KotlinString currentText={blocks[2]} cursorVisible={showCursorArray[2]} />
            <KotlinDefaultText currentText={blocks[3]} cursorVisible={showCursorArray[3]} />
            <br />
            <KotlinMethodName currentText={blocks[4]} cursorVisible={showCursorArray[4]}/>
            <KotlinDefaultText currentText={blocks[5]} cursorVisible={showCursorArray[5]} />
            <KotlinMethodParam currentText={blocks[6]} cursorVisible={showCursorArray[6]} />
            <KotlinDefaultText currentText={blocks[7]} cursorVisible={showCursorArray[7]} />
            <KotlinMethodParam currentText={blocks[8]} cursorVisible={showCursorArray[8]} />
            <KotlinDefaultText currentText={blocks[9]} cursorVisible={showCursorArray[9]} />
            <KotlinField currentText={blocks[10]} cursorVisible={showCursorArray[10]} />
            <KotlinDefaultText currentText={blocks[11]} cursorVisible={showCursorArray[11]} />
            <br />
            <KotlinDefaultText currentText={blocks[12]} cursorVisible={showCursorArray[12]} />
            <KotlinString currentText={blocks[13]} cursorVisible={showCursorArray[13]} />
            <KotlinDefaultText currentText={blocks[14]} cursorVisible={showCursorArray[14]} />
            <br />
            <KotlinDefaultText currentText={blocks[15]} cursorVisible={showCursorArray[15]} />
            <br/>
            <KotlinDefaultText currentText={blocks[16]} cursorVisible={showCursorArray[16]} />
            <KotlinString currentText={blocks[17]} cursorVisible={showCursorArray[17]} />
            <KotlinDefaultText currentText={blocks[18]} cursorVisible={showCursorArray[18]} />
            <br />
            <KotlinDefaultText currentText={blocks[19]} cursorVisible={showCursorArray[19]} />
            {/* <br/>
            <KotlinDefaultText currentText={blocks[20]} cursorVisible={showCursorArray[20]} />
            <KotlinString currentText={blocks[21]} cursorVisible={showCursorArray[21]} />
            <KotlinDefaultText currentText={blocks[22]} cursorVisible={showCursorArray[22]} />
            <br />
            <KotlinDefaultText currentText={blocks[23]} cursorVisible={showCursorArray[23]} />
            <br /> */}
            <br />
            <KotlinDefaultText currentText={tab + functionClose} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={functionClose + space} cursorVisible={showCursorArray[0]} />
        </CodeBlock>
    )
}