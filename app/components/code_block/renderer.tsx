import React from 'react'
import ICodeState from './ICodeState'


export default function CodeRenderer({codeState} : {codeState: ICodeState}) :  React.ReactNode {

    let rendererIdx = codeState.canRender ? codeState.currentIndex + 1 : codeState.currentIndex
 
    switch(rendererIdx) {
        case 0: return (
            <></>
        )
        case 1: return (
            <div>
                <span className='text-gray-800 dark:text-gray-200'>
                    Hello World
                </span>
            </div>
        )
        default: return (
            <div key={2} className='flex h-full flex-col justify-center'>
            <div className='w-full flex flex-row justify-center'>
                <span className='text-gray-800 dark:text-gray-200'>Hello World</span>
            </div>
        </div>
        )
    }
}