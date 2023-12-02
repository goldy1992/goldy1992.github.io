import MultiTypeWriter from "@/components/typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { tab2, name, dot, comma, ComposableAnnotation, composableTag, KotlinKeyword, privateFun, KotlinMethodName, space, methodName, KotlinDefaultText, methodSignatureOpen, tab, modifierDeclaration, methodSignatureClose, functionOpen, KotlinFrameworkComposableOrObject, column, KotlinMethodParam, paramModifier, modifierLower, fillMaxSize, tab3, background, materialTheme, KotlinField, colorScheme, primaryContainer, textFun, paramText, KotlinString, functionClose, buildAnnotatedString, append, initialGreetingStart, tab4, withStyle, paramStyle, spanStyle, paramFontWeight, fontWeight, bold, tab5, initialGreetingMiddle, job, paramFontStyle, fontStyle, italic, profilePictureFunction, modifierUpper, sizeLower, dp, paramVerticalArrangement, arrangement, center, paramHorizontalAlignment, alignment, centerHorizontally, paramTextAlign, textAlign, paramFontSize, sp } from "../code_text"

export default function FontSizeLarger({onComplete}: 
    {
        onComplete? : () => void
    }) {
    const code_blocks = [
        tab3 + paramFontSize + space + "20",
        dot,
        sp,
        comma + space
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
            <KotlinMethodParam currentText={tab2 + paramHorizontalAlignment} cursorVisible={false} />
            <KotlinDefaultText currentText={alignment + dot} cursorVisible={false} />
            <KotlinField currentText={centerHorizontally} cursorVisible={false} />
            <KotlinDefaultText currentText={comma} cursorVisible={false} />
            <br />
            <KotlinMethodParam currentText={tab2 + paramVerticalArrangement} cursorVisible={false} />
            <KotlinDefaultText currentText={arrangement + dot} cursorVisible={false} />
            <KotlinField currentText={center} cursorVisible={false} />
            <KotlinDefaultText currentText={comma} cursorVisible={false} />
            <br />
            <KotlinDefaultText currentText={ tab + methodSignatureClose + space + functionOpen} cursorVisible={false} />
            <br />
            <KotlinFrameworkComposableOrObject currentText={tab2 + profilePictureFunction} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen + modifierUpper + dot} cursorVisible={false}/>
            <KotlinMethodName currentText={sizeLower} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false}/>
            <KotlinMethodParam currentText={"100"} cursorVisible={false}/>
            <KotlinDefaultText currentText={dot} cursorVisible={false}/>
            <KotlinField currentText={dp} cursorVisible={false}/>
            <KotlinDefaultText currentText={  methodSignatureClose + methodSignatureClose} cursorVisible={false}/>
        
            <br />
            <KotlinFrameworkComposableOrObject currentText={tab2 + textFun} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />

            <KotlinMethodParam currentText={paramTextAlign} cursorVisible={false}/>
            <KotlinDefaultText currentText={space + textAlign + dot} cursorVisible={false} />
            <KotlinField currentText={center} cursorVisible={false} />
            <KotlinDefaultText currentText={comma} cursorVisible={false} />
            <br />
            <KotlinMethodParam currentText={blocks[0]} cursorVisible={showCursorArray[0]}/>
            <KotlinDefaultText currentText={blocks[1]} cursorVisible={showCursorArray[1]} />
            <KotlinField currentText={blocks[2]} cursorVisible={showCursorArray[2]} />
            <KotlinDefaultText currentText={blocks[3]} cursorVisible={showCursorArray[3]} />
            <br />
            <KotlinMethodParam currentText={tab3+ paramText} cursorVisible={false} />
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
