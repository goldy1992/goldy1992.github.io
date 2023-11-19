'use client'


// compose semantics
export const tab = "  "
export const tab2 = tab + tab
export const tab3 = tab2 + tab
export const tab4 = tab2 + tab2
export const comma = ","
export const space = " "
export const dot = "."
export const alignment = "Alignment"
export const arrangement = "Arrangement"
export const background = "background"
export const center = "Center"
export const centerHorizontally = "CenterHorizontally"
export const column = "Column"
export const colorScheme = "colorScheme"
export const previewTag = "@Preview"
export const composableTag = "@Composable" 
export const privateFun = "private fun"
export const fillMaxSize = "fillMaxSize"
export const methodName = "SayHello" 
export const methodSignatureOpen = "("
export const primaryContainer = "primaryContainer"
export const materialTheme = "MaterialTheme"
export const modifierLower = "modifier"
export const modifierUpper = "Modifier"
export const modifierDeclaration = modifierLower + ": " + modifierUpper + " = " + modifierUpper
export const paramModifier = modifierLower + " = "
export const paramHorizontalAlignment = "horizontalAlignment = "
export const paramVerticalArrangement = "verticalArrangement = "
export const methodSignatureClose =")" 
export const textFun = "Text"
//export const textFunOpen = "(" 
export const paramText = "text = "
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
            {(cursorVisible != null && cursorVisible) && <Cursor /> }
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
            {(cursorVisible != null && cursorVisible) && <Cursor /> }
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
            {(cursorVisible != null && cursorVisible) && <Cursor /> }
        </>
    )
}

export function KotlinDefaultText({currentText, cursorVisible} : 
    { currentText? : string, 
        cursorVisible?: boolean}) {
    return (
        <>
            <span className="text-gray-800 dark:text-gray-200">
                {(currentText != null) && currentText}
            </span>
            {(cursorVisible != null && cursorVisible) && <Cursor /> }
        </>
    )
}

export function KotlinFrameworkComposableOrObject({currentText, cursorVisible} : 
    { currentText? : string, 
        cursorVisible?: boolean}) {
    return (
        <>
            <span className="text-teal-800 dark:text-teal-400">
                {(currentText != null) && currentText}
            </span>
            {(cursorVisible != null && cursorVisible) && <Cursor /> }
        </>
    )
}

export function KotlinString({currentText, cursorVisible} : 
    { currentText? : string, 
        cursorVisible?: boolean}) {
    return (
        <>
            <span className="dark:text-green-500 text-green-600">
                {(currentText != null) && currentText}
            </span>
            {(cursorVisible != null && cursorVisible) && <Cursor /> }
        </>
    )
}

export function KotlinMethodParam({currentText, cursorVisible} : 
    { currentText? : string, 
        cursorVisible?: boolean}) {
    return (
        <>
            <span className="dark:text-blue-500 text-blue-600">
                {(currentText != null) && currentText}
            </span>
            {(cursorVisible != null && cursorVisible) && <Cursor /> }
        </>
    )
}

export function KotlinField({currentText, cursorVisible} : 
    { currentText? : string, 
        cursorVisible?: boolean}) {
    return (
        <>
            <span className="dark:text-violet-400 text-fuchsia-700">
                {(currentText != null) && currentText}
            </span>
            {(cursorVisible != null && cursorVisible) && <Cursor /> }
        </>
    )
}

export function Cursor() {
    return (
        <span className="text-gray-800 dark:text-gray-200">{cursor}</span>
    )
}