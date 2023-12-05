import { KotlinFrameworkComposableOrObject, tab2, profilePictureFunction, KotlinDefaultText, methodSignatureOpen, modifierUpper, dot, KotlinMethodName, sizeLower, KotlinMethodParam, KotlinField, dp, methodSignatureClose } from "../../code_text";

export default function ProfilePicComplete() {
    return (
        <>
            <KotlinFrameworkComposableOrObject currentText={tab2 + profilePictureFunction} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen + modifierUpper + dot} cursorVisible={false}/>
            <KotlinMethodName currentText={sizeLower} cursorVisible={false}/>
            <KotlinDefaultText currentText={methodSignatureOpen} cursorVisible={false}/>
            <KotlinMethodParam currentText={"100"} cursorVisible={false}/>
            <KotlinDefaultText currentText={dot} cursorVisible={false}/>
            <KotlinField currentText={dp} cursorVisible={false}/>
            <KotlinDefaultText currentText={  methodSignatureClose + methodSignatureClose} cursorVisible={false}/>
        </>
    )
}