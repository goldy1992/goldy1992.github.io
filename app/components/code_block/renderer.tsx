import React, { useState } from 'react'
import ICodeState from './ICodeState'


export default function CodeRenderer({codeState} : {codeState: ICodeState}) :  React.ReactNode {

    //const [currentRenderIdx, setCurrentRenderIdx] = useState(codeState.currentIndex)
    const renders = [
        ( <></>),
        (
            <div><span className='text-gray-800 dark:text-gray-200'>Hello World</span></div>
        ),

        (
            <div className='flex h-full flex-col justify-center'>
                <div className='w-full flex flex-row justify-center'>
                    <span className='text-gray-800 dark:text-gray-200'>Hello World</span>
                </div>
            </div>
        )
    ]
    let rendererIdx = codeState.canRender ? codeState.currentIndex + 1 : codeState.currentIndex

    return renders[rendererIdx]
}