import { ArrowUpIcon } from "@/icons/icons";

export default function FloatingHomeButton(
    {onClick} : 
    {onClick? : ()=> void}) {
    return (
        <div className="fixed bottom-3 end-3 rounded-full bg-cyan-700 items-center p-4" onClick={() => {if (onClick != null) onClick()}}>
            <ArrowUpIcon className="stroke-sky-800 hover:cursor-pointer dark:stroke-sky-100 w-6 h-6" />
        </div>
    )
}