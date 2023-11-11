import { ArrowUpIcon } from "@/icons/icons";

export default function FloatingHomeButton(
    {onClick} : 
    {onClick? : ()=> void}) {
    return (
        <div className="fixed text-sky-900 dark:text-sky-100 bottom-3 end-3 dark:border-white border border-black rounded-full bg-sky-400 dark:bg-sky-800 items-center p-4 dark:hover:bg-sky-700 hover:drow-shadow-md hover:bg-sky-500 hover:cursor-pointer" onClick={() => {if (onClick != null) onClick()}}>
            <ArrowUpIcon className="fill-transparent  dark:stroke-sky-100 stoke-sky-900 w-4 h-4 mr-2 " />
        </div>
    )
}