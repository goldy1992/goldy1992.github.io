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
