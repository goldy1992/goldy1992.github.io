import { ReactNode } from "react";
import { KotlinDefaultText, methodSignatureOpen, tab2, methodSignatureClose, KotlinMethodParam, KotlinString, initialGreetingFull, paramText, tab3, KotlinFrameworkComposableOrObject, textFun } from "../../code_text";

const defaultTextParams = (
    <>
        <KotlinMethodParam currentText={tab3 + paramText} cursorVisible={false} />
        <KotlinString currentText={"\"" + initialGreetingFull + "\""} cursorVisible={false} />
    </>
)

export default function Text({params = defaultTextParams}: {params? : ReactNode}) {

    return (
        <>
            <KotlinFrameworkComposableOrObject currentText={tab2 + textFun} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false} />
            <br />
            {params}
            <br />
            <KotlinDefaultText currentText={tab2 + methodSignatureClose} cursorVisible={false} />
        </>
    )
}