import MultiTypeWriter from "@/components/typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { tab2, name, dot, comma, ComposableAnnotation, composableTag, KotlinKeyword, privateFun, KotlinMethodName, space, methodName, KotlinDefaultText, methodSignatureOpen, tab, modifierDeclaration, methodSignatureClose, functionOpen, KotlinFrameworkComposableOrObject, column, KotlinMethodParam, paramModifier, modifierLower, fillMaxSize, tab3, background, materialTheme, KotlinField, colorScheme, primaryContainer, textFun, paramText, KotlinString, functionClose, buildAnnotatedString, append, initialGreetingStart, tab4, withStyle, paramStyle, spanStyle, paramFontWeight, fontWeight, bold, tab5, initialGreetingMiddle, job, paramFontStyle, fontStyle, italic, profilePictureFunction, modifierUpper, sizeLower, dp } from "../code_text"

export default function ProfilePic({onComplete}: 
    {
        onComplete? : () => void
    }) {
    const code_blocks = [
        tab2 + profilePictureFunction,
        methodSignatureOpen + modifierUpper + dot,
        sizeLower,
        methodSignatureOpen,
        "100",
        dot,
        dp,
        methodSignatureClose,methodSignatureClose
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
        <CodeBlock numberOfLines={20} >
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
            <KotlinFrameworkComposableOrObject currentText={blocks[0]} cursorVisible={showCursorArray[0]}/>
            <KotlinDefaultText currentText={blocks[1]} cursorVisible={showCursorArray[1]}/>
            <KotlinMethodName currentText={blocks[2]} cursorVisible={showCursorArray[2]}/>
            <KotlinDefaultText currentText={blocks[3]} cursorVisible={showCursorArray[3]}/>
            <KotlinMethodParam currentText={blocks[4]} cursorVisible={showCursorArray[4]}/>
            <KotlinDefaultText currentText={blocks[5]} cursorVisible={showCursorArray[5]}/>
            <KotlinField currentText={blocks[6]} cursorVisible={showCursorArray[6]}/>
            <KotlinDefaultText currentText={blocks[7]} cursorVisible={showCursorArray[7]}/>
        
            <br />
            <KotlinFrameworkComposableOrObject currentText={tab2 + textFun} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
            <KotlinMethodParam currentText={paramText} cursorVisible={false} />
            <KotlinDefaultText currentText={buildAnnotatedString + space + functionOpen} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={tab3 + append + methodSignatureOpen} cursorVisible={false} />
            <KotlinString currentText={"\"" + initialGreetingStart + "\""} cursorVisible={false} />
            <KotlinDefaultText currentText={methodSignatureClose} cursorVisible={false} />
            <br />
            <KotlinMethodName currentText={tab3 + withStyle} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
            <KotlinMethodParam currentText={paramStyle} cursorVisible={false} />
            <KotlinDefaultText currentText={space + spanStyle + methodSignatureOpen} cursorVisible={false} />
            <KotlinMethodParam currentText={paramFontWeight} cursorVisible={false} />
            <KotlinDefaultText currentText={space + fontWeight + dot} cursorVisible={false} />
            <KotlinField currentText={bold} cursorVisible={false} />
            <KotlinDefaultText currentText={methodSignatureClose + methodSignatureClose + space + functionOpen} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={tab4 + append + methodSignatureOpen} cursorVisible={false} />
            <KotlinString currentText={"\"" + name + "\""} cursorVisible={false} />
            <KotlinDefaultText currentText={methodSignatureClose} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={tab3 + functionClose} cursorVisible={false} />
            <br/>
            <KotlinDefaultText currentText={tab3 + append + methodSignatureOpen} cursorVisible={false} />
            <KotlinString currentText={ "\"" + initialGreetingMiddle + "\""} cursorVisible={false} />
            <KotlinDefaultText currentText={methodSignatureClose} cursorVisible={false} />
            <br />
            <KotlinMethodName currentText={tab3 + withStyle} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
            <KotlinMethodParam currentText={paramStyle} cursorVisible={false} />
            <KotlinDefaultText currentText={space + spanStyle + methodSignatureOpen} cursorVisible={false} />
            <KotlinMethodParam currentText={paramFontStyle} cursorVisible={false} />
            <KotlinDefaultText currentText={space + fontStyle + dot} cursorVisible={false} />
            <KotlinField currentText={italic} cursorVisible={false} />
            <KotlinDefaultText currentText={ methodSignatureClose + methodSignatureClose + space + functionOpen} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={tab4 + append + methodSignatureOpen} cursorVisible={false} />
            <KotlinString currentText={"\"" + job + "\""} cursorVisible={false} />
            <KotlinDefaultText currentText={methodSignatureClose} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={tab3 + functionClose} cursorVisible={false} />
          <br />
            <KotlinDefaultText currentText={tab + functionClose} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={functionClose + space} cursorVisible={false} />
        </CodeBlock>
    )
}
