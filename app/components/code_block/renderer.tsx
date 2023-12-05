import React from 'react'
import ICodeState, { State } from './ICodeState'
import { initialGreetingFull, initialGreetingMiddle, initialGreetingStart, job, name } from './code_text'


export default function CodeRenderer({codeState} : {codeState: ICodeState}) :  React.ReactNode {

    let rendererIdx = codeState.canRender ? codeState.currentIndex + 1 : codeState.currentIndex
 
    switch(rendererIdx) {
        default: // State.Initial
            return (
                <div>
                    <span className='text-gray-800 dark:text-gray-200'>
                        {initialGreetingFull}
                    </span>
                </div>
            )
        case State.NameBold:
            return (
                <div>
                    <span className='text-gray-800 dark:text-gray-200'>
                        {initialGreetingStart}
                        <span className='font-bold'>{name}</span>
                        {initialGreetingMiddle + job}
                    </span>
                </div>
            )
        case State.JobItalic:
            return (
                <div>
                    <span className='text-gray-800 dark:text-gray-200'>
                        {initialGreetingStart}
                        <span className='font-bold'>{name}</span>
                        {initialGreetingMiddle}
                        <span className='italic'>{job}</span>
                    </span>
                </div>
            )
        case State.ProfilePic:
            return (
                <div>
                     <img src='profile_pic.jpg' className='w-32 h-32 rounded-full border border-white my-2' />
                    <span className='text-gray-800 dark:text-gray-200'>
                        {initialGreetingStart}
                        <span className='font-bold'>{name}</span>
                        {initialGreetingMiddle}
                        <span className='italic'>{job}</span>
                    </span>
                </div>
            )
        case State.VerticalCenter:
            return (
                <div className='flex h-full flex-col justify-center'>
                    <img src='profile_pic.jpg' className='w-32 h-32 rounded-full border border-white my-2' />
                    <span className='text-gray-800 dark:text-gray-200'>
                        {initialGreetingStart}
                        <span className='font-bold'>{name}</span>
                        {initialGreetingMiddle}
                        <span className='italic'>{job}</span>
                    </span>
                </div>
            )
        case State.ProfileCenter:
            return (
                <div className='flex h-full flex-col justify-center items-center'>
                    <img src='profile_pic.jpg' className='w-32 h-32 rounded-full border border-white  my-2' />
                    <div className='flex w-full'>
                        <span className='flex-grow text-gray-800 dark:text-gray-200'>
                            {initialGreetingStart}
                            <span className='font-bold'>{name}</span>
                            {initialGreetingMiddle}
                            <span className='italic'>{job}</span>
                        </span>
                    </div>
                </div>
            )
        case State.TextCenter:
            return (
                <div className='flex h-full flex-col justify-center items-center'>
                    <img src='profile_pic.jpg' className='w-32 h-32 rounded-full border border-white  my-2' />
                    <div className='flex w-full'>
                        <span className='flex-grow text-center text-gray-800 dark:text-gray-200'>
                            {initialGreetingStart}
                            <span className='font-bold'>{name}</span>
                            {initialGreetingMiddle}
                            <span className='italic'>{job}</span>
                        </span>
                    </div>
                </div>
            )
        case State.FontSizeLarger:
            return (
                <div className='flex h-full flex-col justify-center items-center'>
                    <img src='profile_pic.jpg' className='w-32 h-32 rounded-full border border-white my-2' />
                    <div className='flex w-full'>
                        <span className='flex-grow text-center text-2xl text-gray-800 dark:text-gray-200'>
                            {initialGreetingStart}
                            <span className='font-bold'>{name}</span>
                            {initialGreetingMiddle}
                            <span className='italic'>{job}</span>
                        </span>
                    </div>
                </div>
            )
    }
}