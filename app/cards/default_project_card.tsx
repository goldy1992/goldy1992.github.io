import { Project } from "@/project";

export default function DefaultCard({project}: {project: Project}) {
    return ( 
        <div className="flex flex-none flex-col dark:bg-neutral-700 bg-neutral-300 rounded-xl p-2 hover:scale-110 justify-start hover:cursor-pointer" onClick={ () => window.open(url)} >
            
            { project.imgUrl != null && (
                <img src={project.imgUrl} className="flex-none rounded w-52 h-52 self-center"/>
            )}
              
            <div className="flex-none leading-none text-gray-800 dark:text-gray-200 my-3 font-medium">{project.title}</div>
            <div className="flex-none leading-none text-gray-800 dark:text-gray-200 my-3 font-small">{project.time}</div>
            <div className="flex-none text-gray-800 dark:text-gray-200 my-2 font-normal">{project.description}</div>
        </div>

    );
}