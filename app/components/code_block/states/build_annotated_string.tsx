import { ReactNode } from "react"
import { KotlinDefaultText, KotlinField, KotlinMethodName, KotlinMethodParam, KotlinString, append, bold, dot, fontStyle, fontWeight, functionClose, functionOpen, initialGreetingMiddle, initialGreetingStart, italic, job, methodSignatureClose, methodSignatureOpen, paramFontStyle, paramFontWeight, paramStyle, space, spanStyle, tab3, tab4, withStyle, name, buildAnnotatedString, paramText, tab5 } from "../code_text"

export const InitialAnnotatedString = (
    <>
        <KotlinDefaultText currentText={tab4 + append + methodSignatureOpen} cursorVisible={false} />
        <KotlinString currentText={"\"" + initialGreetingStart + "\""} cursorVisible={false} />
        <KotlinDefaultText currentText={methodSignatureClose} cursorVisible={false} />
    </>
)


export const nameBold = (
    <>
    <KotlinMethodName currentText={tab4 + withStyle} cursorVisible={false}/>
    <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
    <KotlinMethodParam currentText={paramStyle} cursorVisible={false} />
    <KotlinDefaultText currentText={space + spanStyle + methodSignatureOpen} cursorVisible={false} />
    <KotlinMethodParam currentText={paramFontWeight} cursorVisible={false} />
    <KotlinDefaultText currentText={space + fontWeight + dot} cursorVisible={false} />
    <KotlinField currentText={bold} cursorVisible={false} />
    <KotlinDefaultText currentText={methodSignatureClose + methodSignatureClose + space + functionOpen} cursorVisible={false} />
    <br />
    <KotlinDefaultText currentText={tab5 + append + methodSignatureOpen} cursorVisible={false} />
    <KotlinString currentText={"\"" + name + "\""} cursorVisible={false} />
    <KotlinDefaultText currentText={methodSignatureClose} cursorVisible={false} />
    <br />
    <KotlinDefaultText currentText={tab4 + functionClose} cursorVisible={false} />
    </>
)

export const middleAnnotatedString = (
    <>
        <KotlinDefaultText currentText={tab4 + append + methodSignatureOpen} cursorVisible={false} />
        <KotlinString currentText={ "\"" + initialGreetingMiddle + "\""} cursorVisible={false} />
        <KotlinDefaultText currentText={methodSignatureClose} cursorVisible={false} />

    </>
)

export const fontItalic = (
    <>
        <KotlinMethodName currentText={tab4 + withStyle} cursorVisible={false}/>
        <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
        <KotlinMethodParam currentText={paramStyle} cursorVisible={false} />
        <KotlinDefaultText currentText={space + spanStyle + methodSignatureOpen} cursorVisible={false} />
        <KotlinMethodParam currentText={paramFontStyle} cursorVisible={false} />
        <KotlinDefaultText currentText={space + fontStyle + dot} cursorVisible={false} />
        <KotlinField currentText={italic} cursorVisible={false} />
        <KotlinDefaultText currentText={ methodSignatureClose + methodSignatureClose + space + functionOpen} cursorVisible={false} />
        <br />
        <KotlinDefaultText currentText={tab5 + append + methodSignatureOpen} cursorVisible={false} />
        <KotlinString currentText={"\"" + job + "\""} cursorVisible={false} />
        <KotlinDefaultText currentText={methodSignatureClose} cursorVisible={false} />
        <br />
        <KotlinDefaultText currentText={tab4 + functionClose} cursorVisible={false} />

    </>
)


export const defaultChildren : ReactNode = 
    (<>
        {InitialAnnotatedString}
        <br/>
        {nameBold}
        <br />
        {middleAnnotatedString}
        <br/>
        {fontItalic}
    </>
    )

export default function BuildAnnotatedString(
    {children = defaultChildren} : {children?: ReactNode}
) {
    return (
      <>
        <KotlinMethodParam currentText={tab3 + paramText} cursorVisible={false} />
        <KotlinDefaultText currentText={buildAnnotatedString + space + functionOpen} cursorVisible={false} />
        <br />
        {children}
        <br />
        <KotlinDefaultText currentText={tab3 + functionClose} cursorVisible={false} />
    </>  
    )
}