import React, { useState } from 'react'
import ICodeState from './ICodeState'


export default function CodeRenderer({codeState} : {codeState: ICodeState}) :  React.ReactNode {

    const [currentRenderIdx, setCurrentRenderIdx] = useState(codeState.currentIndex)
    console.log("hit CodeRender, currentIndex: " + codeState.currentIndex + " canRender: " + codeState.canRender)
    if (codeState.currentIndex == 0 && !codeState.canRender)
    {
        return <></>
    }
    else if (codeState.currentIndex == 0 && codeState.canRender) {
        return (
            <div><span>Hello World</span></div>
        )
    }
}