import { Project } from "@/project";

export default function DefaultCard({project}: {project: Project}) {
    return ( 
        <div className="flex flex-none flex-col dark:bg-neutral-700 hover:dark:bg-neutral-600 bg-neutral-300 hover:bg-neutral-400 rounded-xl p-2 justify-start hover:cursor-pointer" onClick={ () => window.open(project.url)} >
            
            { project.imgUrl != null && (
                <img src={project.imgUrl} className="flex-none rounded w-48 h-48 self-center"/>
            )}
            
            { project.imgLogo != null && (
                project.imgLogo
            )}
              
            <div className="flex-none leading-none text-gray-800 dark:text-gray-200 my-3 font-medium">{project.title}</div>
            <div className="flex-none leading-none text-gray-800 dark:text-gray-200 my-3 font-small">{project.time}</div>
            <div className="flex-none text-gray-800 dark:text-gray-200 my-2 font-normal">{project.description}</div>
        </div>

    );
}

export function FlowBiteCard({project}: {project: Project}) {
    return ( 
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="self-center">
                <img className="rounded-t-lg w-48 h-48 self-center" src={project.imgUrl} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>);
}