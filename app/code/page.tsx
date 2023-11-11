'use client'
import TailwindAppBar from "@/components/tailwind_app_bar";
import MultiTypeWriter from "@/components/typewriter/multi_typewriter";

export default function CodeBlock() {
    const code_blocks = [
        "@Composable", 
        "private fun", 
        "HelloWorld", 
        "(", 
        "   modifier: Modifier", 
        ") {", 
        "   Text", 
        "(",  
        "      text = ", 
        "\"Hello world\"", 
        "    )", 
        "} "
    ]
    const [typed_code_blocks, cursor_visible, cursorPosition] = MultiTypeWriter(code_blocks)
    return (
        <main>
            <div className="flex flex-col">
                <TailwindAppBar />

                <div className="mt-10 pt-8 grid grid-cols-12 grid-rows-5 mt-4">

                    <div className="border-b border-slate-500/30 col-start-2 col-span-10 row-start-1 rounded row-span-2" >
                        <div className="flex flex-col gap-2">
                        <div className="flex-none flex gap-1 p-2 bg-slate-500 rounded-t-lg flex-row">
                            <div className="flex-none w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                            <div className="flex-none w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
                            <div className="flex-none w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                        </div>
                
                    </div>
                    <div className="dark:bg-slate-800 bg-slate-100 w-full relative flex-auto">
                        <pre className="flex flex-no-wrap min-h-full text-sm leading-6">
                        <div aria-hidden="true" className="text-slate-600 py-4 pr-4 text-right select-none w-[50px]" >
                        1{"\n"}
2<br/>
3<br/>
4<br/>
5<br/>
6<br/>
7<br/>
8<br/>
9<br/>
</div>
<code className="flex-grow relative block break-normal text-slate-50 pt-4 pb-4 px-4 overflow-auto">
    <span className="dark:text-yellow-300 text-yellow-500">{typed_code_blocks[0]}</span>{(cursor_visible && (cursorPosition == 0)) && "|" }<br/>
    <span className="dark:text-orange-400 text-blue-700">{typed_code_blocks[1]}</span>{(cursor_visible && (cursorPosition == 1)) && "|" } <span className="dark:text-amber-300 text-teal-600">{typed_code_blocks[2]}</span>{(cursor_visible && (cursorPosition == 2)) && "|" }{typed_code_blocks[3]}{(cursor_visible && (cursorPosition == 3)) && "|" }<br/>
    {typed_code_blocks[4]}{(cursor_visible && (cursorPosition == 4)) && "|" }<br/>{typed_code_blocks[5]}{(cursor_visible && (cursorPosition == 5)) && "|" }<br/>
         <span className="text-green-300">{typed_code_blocks[6]}</span>{(cursor_visible && (cursorPosition == 6)) && "|" }{typed_code_blocks[7]}{(cursor_visible && (cursorPosition == 7)) && "|" }<br/>
        <span className="text-blue-400">{typed_code_blocks[8]}</span>{(cursor_visible && (cursorPosition == 8)) && "|" }<span className="text-green-500">{typed_code_blocks[9]}</span>{(cursor_visible && (cursorPosition == 9)) && "|" }<br/>
        {typed_code_blocks[10]}{(cursor_visible && (cursorPosition == 10)) && "|" }<br/>
        {typed_code_blocks[11]}{(cursor_visible && (cursorPosition == 11)) && "|" }<br />

</code>

                        </pre>
                    </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
