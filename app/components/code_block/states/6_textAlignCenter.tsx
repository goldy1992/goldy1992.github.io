import MultiTypeWriter from "@/components/typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { dot, comma, space, KotlinDefaultText, KotlinMethodParam, tab3, KotlinField, center, paramTextAlign, textAlign } from "../code_text"
import Column, { FullColumnParams } from "./common/column"
import BuildAnnotatedString from "./build_annotated_string"
import IntroComposable from "./common/method_name"
import Text from "./common/text"
import ProfilePicComplete from "./common/profile_pic"

export default function TextAlignCenter({onComplete}: 
    {
        onComplete? : () => void
    }) {
    const code_blocks = [
        tab3 + paramTextAlign,
        space + textAlign + dot,
        center,
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
    const columnParams = (<FullColumnParams />)
    const textParams = (
        <>
            <KotlinMethodParam currentText={blocks[0]} cursorVisible={showCursorArray[0]}/>
            <KotlinDefaultText currentText={blocks[1]} cursorVisible={showCursorArray[1]} />
            <KotlinField currentText={blocks[2]} cursorVisible={showCursorArray[2]} />
            <KotlinDefaultText currentText={blocks[3]} cursorVisible={showCursorArray[3]} />
            <br />
            <BuildAnnotatedString />
        </>
    )
    return (
        <CodeBlock numberOfLines={24} >

            <IntroComposable>
                <Column params={columnParams}>
                    <ProfilePicComplete />
                    <br />
                    <Text params={textParams} />
                </Column>
            </IntroComposable>
        </CodeBlock>
    )
}
