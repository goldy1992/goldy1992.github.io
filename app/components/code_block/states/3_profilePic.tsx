import MultiTypeWriter from "@/components/typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { tab2, name, dot, comma, ComposableAnnotation, composableTag, KotlinKeyword, privateFun, KotlinMethodName, space, methodName, KotlinDefaultText, methodSignatureOpen, tab, modifierDeclaration, methodSignatureClose, functionOpen, KotlinFrameworkComposableOrObject, column, KotlinMethodParam, paramModifier, modifierLower, fillMaxSize, tab3, background, materialTheme, KotlinField, colorScheme, primaryContainer, textFun, paramText, KotlinString, functionClose, buildAnnotatedString, append, initialGreetingStart, tab4, withStyle, paramStyle, spanStyle, paramFontWeight, fontWeight, bold, tab5, initialGreetingMiddle, job, paramFontStyle, fontStyle, italic, profilePictureFunction, modifierUpper, sizeLower, dp } from "../code_text"
import IntroComposable from "./common/method_name"
import Column, { ColumnModifier } from "./common/column"
import BuildAnnotatedString from "./build_annotated_string"
import Text from "./common/text"

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

    const profilePic = (
        <>
            <KotlinFrameworkComposableOrObject currentText={blocks[0]} cursorVisible={showCursorArray[0]}/>
            <KotlinDefaultText currentText={blocks[1]} cursorVisible={showCursorArray[1]}/>
            <KotlinMethodName currentText={blocks[2]} cursorVisible={showCursorArray[2]}/>
            <KotlinDefaultText currentText={blocks[3]} cursorVisible={showCursorArray[3]}/>
            <KotlinMethodParam currentText={blocks[4]} cursorVisible={showCursorArray[4]}/>
            <KotlinDefaultText currentText={blocks[5]} cursorVisible={showCursorArray[5]}/>
            <KotlinField currentText={blocks[6]} cursorVisible={showCursorArray[6]}/>
            <KotlinDefaultText currentText={blocks[7]} cursorVisible={showCursorArray[7]}/>
        </>
    )
 
    // Fixes server side rendering undefined when the array is empty!
    if (blocks.length <= 0) {
        console.log("rendering empty code block")
        return <CodeBlock numberOfLines={16} >
            </CodeBlock>
    }

    return (
        <CodeBlock numberOfLines={24} >
            <IntroComposable>
                <Column params={(<ColumnModifier />)}>
                    {profilePic}
                    <br />
                    <Text params={(<BuildAnnotatedString />)} />
                </Column>
            </IntroComposable>
        </CodeBlock>
    )
}
