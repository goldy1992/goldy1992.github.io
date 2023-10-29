import { Project } from "@/project";

export function DefaultCard_new({project}: {project: Project}) {
    //let imgStyle = "bg-[url('" + project.imgUrl  +"')]"
    let imgStyle = "background-image: url(" + project.imgUrl + ");"
    return ( 
        <article className="flex flex-none flex-col dark:bg-neutral-700 hover:dark:bg-neutral-600 bg-neutral-300 hover:bg-neutral-400 rounded-xl p-2 justify-start hover:cursor-pointer" onClick={ () => window.open(project.url)} >
            <section className={"content bg-contain bg-no-repeat bg-center h-24 w-24 rounded-2xl" } style={{backgroundImage: "url('" + project.imgUrl+"')"}}>

            <div className="flex flex-row"><span className="text-gray-800 dark:text-gray-200">{project.time}</span></div>
            </section>
           <section>
              
            <div className="flex-none leading-none">
                <h3 className="block text-gray-800 dark:text-gray-200 m-0 py-2">{project.title}</h3>
            </div>
          
            <div className="flex-none">
                <span className="text-gray-800 dark:text-gray-200 m-0 py-2">{project.description}</span>
            </div>
            <div className="flex-none flex flex-row justify-end">
                <h4 className=" flex-none text-gray-800 dark:text-gray-200 m-0">{project.time}</h4>
            </div>
            </section>
        </article>

    );
}


export function DefaultCard_horizontal({project}: {project: Project}) {
    return ( 
        <div className="flex flex-none flex-row dark:bg-neutral-700 hover:dark:bg-neutral-600 bg-neutral-300 hover:bg-neutral-400 rounded-xl p-2 justify-start hover:cursor-pointer" onClick={ () => window.open(project.url)} >

           <div className="flex-1 flex flex-col justify-evenly"> 
                { project.imgUrl != null && (
                    <img src={project.imgUrl} className="flex-none rounded w-24 h-24 self-center"/>
                )}
                
                { project.imgLogo != null && (
                    project.imgLogo
                )}

                <div className="flex-none leading-none">
                    <h4 className="text-gray-800 dark:text-gray-200 m-0">{project.time}</h4>
                </div>
            </div>
            <div className="flex-1 inline-flex flex-col">
                <div className="flex-none flow-root">
                    <h3 className="block text-gray-800 dark:text-gray-200 m-0 py-2">{project.title}</h3>
                </div>
        
                <div className="flex-none">
                    <span className="text-gray-800 dark:text-gray-200 m-0 py-2 whitespace-normal break-normal">{project.description}</span>
                </div>
            </div>
        </div>

    );
}

export default function DefaultCard({project}: {project: Project}) {
    return ( 
        <div className="flex flex-none flex-col dark:bg-neutral-700 hover:dark:bg-neutral-600 bg-neutral-300 hover:bg-neutral-400 rounded-xl p-2 justify-evenly hover:cursor-pointer" onClick={ () => window.open(project.url)} >
            
            { project.imgUrl != null && (
                <img src={project.imgUrl} className="flex-none rounded w-24 h-24 self-center"/>
            )}
            
            { project.imgLogo != null && (
                project.imgLogo
            )}
              
            <div className="flex-none leading-none">
                <h1 className="text-gray-800 dark:text-gray-200 m-0 py-2 text-xl font-bold">{project.title}</h1>
            </div>

            {/* <div className="flex-none">
                <span className="text-gray-800 dark:text-gray-200 m-0 py-2 text-base">{project.description}</span>
            </div> */}
            <div className="flex-none leading-none">
                <h4 className="text-gray-800 dark:text-gray-200 m-0 text-sm font-bold">{project.time}</h4>
            </div>
        </div>

    );
}
