import MultiTypeWriter from "../../typewriter/multi_typewriter"
import { CodeBlock } from "../code_block"
import { composableTag, privateFun, space, methodName, methodSignatureOpen, tab, modifierDeclaration, methodSignatureClose, functionOpen, column, tab2, paramModifier, modifierLower, dot, fillMaxSize, tab3, background, materialTheme, colorScheme, primaryContainer, comma, textFun, paramText, textValue, functionClose, ComposableAnnotation, KotlinKeyword, KotlinMethodName, KotlinDefaultText, KotlinFrameworkComposableOrObject, KotlinMethodParam, KotlinField, KotlinString, initialGreetingFull, Cursor } from "../code_text"
import Column, { ColumnModifier } from "./common/column"
import IntroComposable from "./common/method_name"
import Text from "./common/text"

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
        <CodeBlock numberOfLines={24} >
            <IntroComposable>
                <Column params={(<ColumnModifier />)}>
                    <Text />
                </Column>
                <br />
            </IntroComposable>
            {(showCursorArray[0] != null && showCursorArray[0]) && <Cursor /> }
              </CodeBlock>
    )
}