import MultiTypeWriter from "@/components/typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { tab2, name, dot, comma, ComposableAnnotation, composableTag, KotlinKeyword, privateFun, KotlinMethodName, space, methodName, KotlinDefaultText, methodSignatureOpen, tab, modifierDeclaration, methodSignatureClose, functionOpen, KotlinFrameworkComposableOrObject, column, KotlinMethodParam, paramModifier, modifierLower, fillMaxSize, tab3, background, materialTheme, KotlinField, colorScheme, primaryContainer, textFun, paramText, KotlinString, functionClose, buildAnnotatedString, append, initialGreetingStart, tab4, withStyle, paramStyle, spanStyle, paramFontWeight, fontWeight, bold, tab5, initialGreetingMiddle, job, paramFontStyle, fontStyle, italic } from "../code_text"
import Column, { ColumnModifier } from "./common/column"
import IntroComposable from "./common/method_name"
import Text from "./common/text"
import BuildAnnotatedString, { InitialAnnotatedString, middleAnnotatedString, nameBold } from "./build_annotated_string"

export default function TextJobItalics({onComplete}: 
    {
        onComplete? : () => void
    }) {
    const code_blocks = [
        "\"" + initialGreetingMiddle + "\"",
        methodSignatureClose,
        tab4 + withStyle,
        methodSignatureOpen,
        paramStyle,
        space + spanStyle + methodSignatureOpen,
        paramFontStyle,
        space + fontStyle + dot,
        italic,
        methodSignatureClose + methodSignatureClose + space + functionOpen,
        tab5 + append + methodSignatureOpen,
        "\"" + job + "\"",
        methodSignatureClose,
        tab4 + functionClose,
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

    const textParams = (
        <BuildAnnotatedString>
            {InitialAnnotatedString}
            <br/>
            {nameBold}
            <br />
            <KotlinDefaultText currentText={tab4 + append + methodSignatureOpen} cursorVisible={showCursorArray[16]} />
            <KotlinString currentText={blocks[0]} cursorVisible={showCursorArray[0]} />
            <KotlinDefaultText currentText={blocks[1]} cursorVisible={showCursorArray[1]} />
            <br />
            <KotlinMethodName currentText={blocks[2]} cursorVisible={showCursorArray[2]}/>
            <KotlinDefaultText currentText={blocks[3]} cursorVisible={showCursorArray[3]} />
            <KotlinMethodParam currentText={blocks[4]} cursorVisible={showCursorArray[4]} />
            <KotlinDefaultText currentText={blocks[5]} cursorVisible={showCursorArray[5]} />
            <KotlinMethodParam currentText={blocks[6]} cursorVisible={showCursorArray[6]} />
            <KotlinDefaultText currentText={blocks[7]} cursorVisible={showCursorArray[7]} />
            <KotlinField currentText={blocks[8]} cursorVisible={showCursorArray[8]} />
            <KotlinDefaultText currentText={blocks[9]} cursorVisible={showCursorArray[9]} />
            <br />
            <KotlinDefaultText currentText={blocks[10]} cursorVisible={showCursorArray[10]} />
            <KotlinString currentText={blocks[11]} cursorVisible={showCursorArray[11]} />
            <KotlinDefaultText currentText={blocks[12]} cursorVisible={showCursorArray[12]} />
            <br />
            <KotlinDefaultText currentText={blocks[13]} cursorVisible={showCursorArray[13]} />

        </BuildAnnotatedString> 
    )

    return (
        <CodeBlock numberOfLines={24} >
            <IntroComposable>
                <Column params={(<ColumnModifier />)}>
                    <Text params={textParams} />
                </Column>
                <br />
            </IntroComposable>
        </CodeBlock>
    )
}
