import MultiTypeWriter from "@/components/typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { tab2, name, dot, comma, ComposableAnnotation, composableTag, KotlinKeyword, privateFun, KotlinMethodName, space, methodName, KotlinDefaultText, methodSignatureOpen, tab, modifierDeclaration, methodSignatureClose, functionOpen, KotlinFrameworkComposableOrObject, column, KotlinMethodParam, paramModifier, modifierLower, fillMaxSize, tab3, background, materialTheme, KotlinField, colorScheme, primaryContainer, textFun, paramText, KotlinString, functionClose, buildAnnotatedString, append, initialGreetingStart, tab4, withStyle, paramStyle, spanStyle, paramFontWeight, fontWeight, bold, tab5, initialGreetingMiddle, job, paramFontStyle, fontStyle, italic, profilePictureFunction, modifierUpper, sizeLower, dp, paramVerticalArrangement, arrangement, center, paramHorizontalAlignment, alignment, centerHorizontally } from "../code_text"
import ProfilePic from "./3_profilePic"
import BuildAnnotatedString from "./build_annotated_string"
import Column, { ColumnModifier, ColumnVerticalArrangementCenter } from "./common/column"
import IntroComposable from "./common/method_name"
import Text from "./common/text"
import ProfilePicComplete from "./common/profile_pic"

export default function ProfilePicCenter({onComplete}: 
    {
        onComplete? : () => void
    }) {
    const code_blocks = [
        tab2 + paramHorizontalAlignment,
        alignment + dot,
        centerHorizontally,
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

    let columnModifier = (
        <>
            <ColumnModifier />
            <br />
            <ColumnVerticalArrangementCenter />
            <br />
            <KotlinMethodParam currentText={blocks[0]} cursorVisible={showCursorArray[0]} />
            <KotlinDefaultText currentText={blocks[1]} cursorVisible={showCursorArray[1]} />
            <KotlinField currentText={blocks[2]} cursorVisible={showCursorArray[2]} />
            <KotlinDefaultText currentText={blocks[3]} cursorVisible={showCursorArray[3]} />
        </>
    )

    return (
        <CodeBlock numberOfLines={24} >
            <IntroComposable>
                <Column params={columnModifier}>
                    <ProfilePicComplete />
                    <br />
                    <Text params={(<BuildAnnotatedString />)} />
                </Column>
            </IntroComposable>
        </CodeBlock>
    )
}
