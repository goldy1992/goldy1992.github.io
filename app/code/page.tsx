'use client'
import CodeBlock from "@/components/code_block/code_block";
import TailwindAppBar from "@/components/tailwind_app_bar";

export default function CodeBlockPage() {
     return (
        <main>
            <div className="flex flex-col">
                <TailwindAppBar />
                <CodeBlock />
            
            </div>
        </main>
    );
}


