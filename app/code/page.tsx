'use client'
import TailwindAppBar from "@/tailwind_app_bar";

export default function CodeBlock() {
    return (
        <main>
            <div className="flex flex-col">
                <TailwindAppBar />

                <div className="grid grid-cols-12 grid-rows-5 mt-4">

                    <div className="border-b border-slate-500/30 col-start-2 col-span-10 row-start-1 rounded row-span-2" >
                        <div className="flex flex-col gap-2">
                        <div className="flex-none flex gap-1 p-2 flex-row">
                            <div className="flex-none w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                            <div className="flex-none w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                            <div className="flex-none w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                        </div>
                
                    </div>
                    <div className="bg-slate-800 w-full relative flex-auto">
                        <pre className="flex flex-no-wrap min-h-full text-sm leading-6">
                        <div aria-hidden="true" className="text-slate-600 py-4 pr-4 text-right select-none w-[50px]" >
                        1<br/>
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
    <span className="text-yellow-300">@Composable</span><br/>
    <span className="text-orange-400">private fun</span> <span className="text-yellow-600">HelloWorld</span>{"("}<br/>
        {"   "}modifier: Modifier<br/>{") {"}<br/>
        {"   "} <span className="text-green-300">Text</span>{"("}<br/>
        {"      "} <span className="text-blue-400">text = </span><span className="text-green-500">{ "\"Hello world\""}</span><br/>
        {"    )"}<br/>
        {"}"}<br />

</code>

                        </pre>
                    </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export function SimpleCodeBlock() {
    return (
    <main>
    <div className="flex flex-col">
        <TailwindAppBar />
        <div className="flex justify-center">
            <div className="flex-none text-right w-[50px]">
                1 
                2 
                3 
                4 
                5 
                6 
                7
                </div>
        </div>
    </div>
    </main>
);
}

export function NewSimpleCodeBlock() {
    return (
        <main>
            <div className="flex flex-col">
                <TailwindAppBar />

                {/* <div className="grid grid-cols-12 grid-rows-5 mt-4"> */}

                    <div className="pt-4 border-b border-slate-500/30 rounded " >
                        <div className="flex flex-col gap-2">
                        <div className="flex-none flex gap-1 p-2 flex-row">
                            <div className="flex-none w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                            <div className="flex-none w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                            <div className="flex-none w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                        </div>
                
                    </div>
                    <div className="bg-cyan-500 w-full flex flex-auto">
                        <pre className="flex flex-no-wrap text-sm leading-6">
                        <div className="flex-none block text-slate-600 py-4 pr-4 text-right select-none w-[50px]" >
1<br/>
2<br/>
3<br/>
4<br/>
5<br/>
6<br/>
7<br/>
8<br/>
9<br/>
10<br/>
11<br/>
12<br/>
13<br/>
14<br/>
15<br/>
16<br/>
17<br/>
18<br/>
19<br/>
20<br/>
21<br/>
</div>
<code className="flex-grow block break-normal text-slate-50 pt-4 pb-4 px-4">
    MainCode 
    block
</code>

                        </pre>
                    </div>
                    </div>

                {/* </div> */}
            </div>
        </main>
    );
}