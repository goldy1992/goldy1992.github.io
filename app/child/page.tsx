'use client'
import  MultiTypeWriter from "@/components/typewriter/multi_typewriter"

export default function Container() {
    return (<div>
        <Parent />
    </div>)
}

export function Parent() {
    return (
        <Child>
        <h1 className=" text-gray-800 dark:text-gray-200 font-small">Hello</h1>
        </Child>
    )
}

export function Child({children} : {children: React.ReactNode}) {
    const strings = ["hello", "world"]

    const typedStrings = MultiTypeWriter(strings)
    return (
        <div className="flex flex-col w-full items=center">
            <div className="bg-red-400">
                {typedStrings[0]}
            </div>
            <div className="bg-red-400">
            {typedStrings[1]}
            </div>
        </div>
    )
}