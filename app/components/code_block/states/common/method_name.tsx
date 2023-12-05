import { ComposableAnnotation, composableTag, KotlinKeyword, privateFun, KotlinMethodName, methodName, KotlinDefaultText, methodSignatureOpen, methodSignatureClose, functionClose, functionOpen, space, modifierDeclaration, tab, KotlinMethodParam, dot, fillMaxSize, modifierLower, paramModifier, tab2 } from "../../code_text"

export default function IntroComposable({
    params = (
        <KotlinDefaultText currentText={tab + modifierDeclaration} cursorVisible={false} />
    ),
    children,
  }: {
    params?: React.ReactNode
    children: React.ReactNode
  }) {
    return (
        <>
            <ComposableAnnotation currentText={composableTag} cursorVisible={false} />
            <br/>
            <KotlinKeyword currentText={privateFun} cursorVisible={false} />
            <KotlinMethodName currentText={space + methodName} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
            <br/>
            {params}
            <br />
            <KotlinDefaultText currentText={methodSignatureClose + space + functionOpen} cursorVisible={false} />
            <br />
            {children}
            <br />
            <KotlinDefaultText currentText={functionClose} cursorVisible={false} />

        </>
    )
}
