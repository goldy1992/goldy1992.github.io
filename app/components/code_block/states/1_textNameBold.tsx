import MultiTypeWriter from "@/components/typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { name, dot, KotlinMethodName, space, KotlinDefaultText, methodSignatureOpen, methodSignatureClose, functionOpen, KotlinMethodParam, tab3, KotlinField, paramText, KotlinString, functionClose, buildAnnotatedString, append, initialGreetingStart, tab4, withStyle, paramStyle, spanStyle, paramFontWeight, fontWeight, bold, tab5, initialGreetingMiddle, job, } from "../code_text"
import IntroComposable from "./common/method_name"
import Column, { ColumnModifier } from "./common/column"
import Text from "./common/text"

export default function TextNameBold({onComplete}: 
    {
        onComplete? : () => void
    }) {
    const code_blocks = [
        buildAnnotatedString + space + functionOpen,
        tab4 + append + methodSignatureOpen,
        "\"" + initialGreetingStart + "\"",
        methodSignatureClose,
        tab4 + withStyle,
        methodSignatureOpen,
        paramStyle,
        space + spanStyle + methodSignatureOpen,
        paramFontWeight,
        space + fontWeight + dot,
        bold,
        methodSignatureClose + methodSignatureClose + space + functionOpen,
        tab5 + append + methodSignatureOpen,
        "\"" + name + "\"",
        methodSignatureClose,
        tab4 + functionClose,
        tab4 + append + methodSignatureOpen,
        "\"" + initialGreetingMiddle + job + "\"",
        methodSignatureClose,
        tab3 + functionClose + methodSignatureClose
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
        <>
            <KotlinMethodParam currentText={tab3+ paramText} cursorVisible={false} />
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
        </>
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