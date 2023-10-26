import Link from "next/link";

export default function DefaultCard({url, imgUrl, title, description} 
    : {
        url: string
        imgUrl: string, 
        title: string,
     description: string}) {
    return ( 

        <div className="flex flex-col dark:bg-neutral-800 bg-neutral-200 rounded-xl p-2 hover:scale-110 justify-start hover:cursor-pointer" onClick={ () => window.open(url)} >
            <img src={imgUrl} className="flex-none rounded w-52 h-52 self-center"/>
            <div className="flex-none leading-none text-gray-800 dark:text-gray-200 my-3 font-medium">{title}</div>
            <div className="flex-none text-gray-800 dark:text-gray-200 my-2 font-normal">{description}</div>
        </div>

    );
}