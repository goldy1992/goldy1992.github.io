import { ReactNode } from "react";
import { KotlinFrameworkComposableOrObject, tab, column, KotlinDefaultText, methodSignatureOpen, functionOpen, methodSignatureClose, space, functionClose, KotlinMethodParam, KotlinMethodName, dot, fillMaxSize, modifierLower, paramModifier, tab2, KotlinField, KotlinKeyword, background, colorScheme, comma, materialTheme, primaryContainer, tab3 } from "../../code_text";

export default function Column(
    {params, children}:
    {
        params: ReactNode,
        children: ReactNode
    }
) {
    return (
        <>
        <KotlinFrameworkComposableOrObject currentText={tab + column} cursorVisible={false} />
        <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
        <br />
        {params}
        <br />
        <KotlinDefaultText currentText={ tab + methodSignatureClose + space + functionOpen} cursorVisible={false} />
        <br />
        {children}
        <br />
        <KotlinDefaultText currentText={tab + functionClose} cursorVisible={false} />
        </>
    )
}

export function ColumnModifier() {
    return (
        <>
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

        </>
    )
}