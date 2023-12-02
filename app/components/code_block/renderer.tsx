import React from 'react'
import ICodeState, { State } from './ICodeState'
import { initialGreeting } from './code_text'


export default function CodeRenderer({codeState} : {codeState: ICodeState}) :  React.ReactNode {

    let rendererIdx = codeState.canRender ? codeState.currentIndex + 1 : codeState.currentIndex
 
    switch(rendererIdx) {
        default: // State.Initial
            return (
                <div>
                    <span className='text-gray-800 dark:text-gray-200'>
                        {initialGreeting}
                    </span>
                </div>
            )
        case State.Center: return (
            <div key={2} className='flex h-full flex-col justify-center'>
            <div className='w-full flex flex-row justify-center'>
                <span className='text-gray-800 dark:text-gray-200'>{initialGreeting}</span>
            </div>
        </div>
        )
        case State.Image: return (
            <div key={2} className='flex h-full flex-col justify-center items-center'>
                   <img src='profile_pic.jpg' className='w-32 h-32 rounded-full border border-white' />
            <div className='w-full flex flex-row justify-center'>
             
                <span className='text-gray-800 dark:text-gray-200'>{initialGreeting}</span>
            </div>
        </div>
        )

    }
}