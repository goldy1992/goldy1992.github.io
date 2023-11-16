// compose semantics
export const tab = "  "
export const tab2 = tab + tab
export const tab3 = tab2 + tab
export const tab4 = tab2 + tab2
export const space = " "
export const column = "Column"
export const previewTag = "@Preview"
export const composableTag = "@Composable" 
export const privateFun = "private fun"
export const methodName = "SayHello" 
export const methodSignatureOpen = "("
export const modifierDeclaration = tab + "modifier: Modifier = Modifier"
export const methodSignatureClose =")" 
export const textFun = tab + "Text"
//export const textFunOpen = "(" 
export const textFunTextParam = "text = "
export const textValue = "\"Hello world\"" 
export const textFunClose = tab2 + methodSignatureClose
export const functionClose = "}"
export const functionOpen = "{"


export const cursor = "|"

export function ComposableAnnotation({currentText, cursorVisible} : 
    { currentText? : string, 
        cursorVisible?: boolean}) {
    return (
        <>
            <span className="dark:text-yellow-300 text-yellow-500">
                {(currentText != null) && currentText}
            </span>
            {(cursorVisible != null && cursorVisible) && cursor }
        </>
    )
}

export function KotlinKeyword({currentText, cursorVisible} : 
    { currentText? : string, 
        cursorVisible?: boolean}) {
    return (
        <>
            <span className="dark:text-orange-400 text-blue-700">
                {(currentText != null) && currentText}
            </span>
            {(cursorVisible != null && cursorVisible) && cursor }
        </>
    )
}

export function KotlinMethodName({currentText, cursorVisible} : 
    { currentText? : string, 
        cursorVisible?: boolean}) {
    return (
        <>
            <span className="dark:text-amber-300 text-teal-600">
                {(currentText != null) && currentText}
            </span>
            {(cursorVisible != null && cursorVisible) && cursor }
        </>
    )
}

export function KotlinDefaultText({currentText, cursorVisible} : 
    { currentText? : string, 
        cursorVisible?: boolean}) {
    return (
        <>
            <span>
                {(currentText != null) && currentText}
            </span>
            {(cursorVisible != null && cursorVisible) && cursor }
        </>
    )
}