
export default function StyledButton({name, children}: {name: string, children?: React.ReactNode}) {
  return (
    <button className="uppercase bg-sky-400 dark:bg-sky-800 dark:hover:bg-sky-700 hover:drow-shadow-md hover:bg-sky-500 hover:cursor-pointer text-sky-900 dark:text-sky-100 font-bold py-2 px-4 rounded inline-flex items-center border-0">
    {children}
    <span>{name}</span>
  </button>
  );
}