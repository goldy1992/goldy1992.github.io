import { scrollToFn } from "@/utils";

export default function StyledButton(
  {name, scrollTo, children}
  : {name: string, scrollTo?: string, children?: React.ReactNode}) {

  
    
  return (
    <button
      onClick=
      {() => scrollToFn(scrollTo)}
      className="uppercase bg-sky-400 dark:bg-sky-800 border dark:border-white border-black dark:hover:bg-sky-700 hover:drow-shadow-md hover:bg-sky-500 hover:cursor-pointer text-sky-900 dark:text-sky-100 font-bold py-2 px-4 rounded-xl inline-flex items-center px-2 border-0">
    {children}
    <span className="px-2">{name}</span>
  </button>
  );
}