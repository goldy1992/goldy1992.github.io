import { useScroll, motion } from "framer-motion";
import DefaultCard from "./cards/default_project_card";
import { CodeProjectsIcon, InfoIcon, ContactIcon } from "./icons/icons";
import { Project, ProjectBuilder } from "./project";
import StyledButton from "./styled_button";
import TailwindAppBar from "./tailwind_app_bar";
import TypewriterTitle from "./typewriter";

const typing_text = "I'm a full-stack developer."

const projects : Array<Project> = [
  new ProjectBuilder()
    .id(0)
    .title("MP3 Player")
    .url("https://github.com/goldy1992/Mp3Player")
    .imgUrl("https://github.com/goldy1992/Mp3Player/blob/master/app/src/main/res/mipmap-hdpi/headphone_icon_foreground.png?raw=true")
    .description("An open source Android media player.")
    .time("2017 - Present")
    .build(),
  
    new ProjectBuilder()
    .id(1)
    .title("Restaurant Management System")
    .imgUrl("./java-logo-no-text.png")
    .url("https://github.com/goldy1992/restaurant_management_system")
    .description("A dockerised restaurant management written using Java Swing and Spring Integration")  
    .time("2015")
    .build(),
  new ProjectBuilder()
    .id(2)
    .title("2D Pong")
    .imgUrl("./java-logo-no-text.png")
    .url("https://github.com/goldy1992/Pong")
    .description("A basic Java implementation of 2D Pong in Java using MVC design principles.")
    .time("2014")
    .build(),  
 ]
const cards = projects.map(
  project => ( <DefaultCard key={project.id} project={project} />) 
)

const n = Array(95)
const lineBreaks = n.map(
  i => ( <div>Hello<br/></div> )
)

function Copyright() {
    return (
      <div className='flex-none flex flex-row items-center'>
      
      <div className='flex-none text-gray-800 dark:text-gray-200 font-small'>
  
        {'Copyright © '}
        <a color="inherit" href="https://github.com/goldy1992">
          goldy1992
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
        </div>
         </div>
    );
  }

  
export default function PageContent() : JSX.Element {
    const { scrollYProgress } = useScroll();
  
    return (
        <main> 
          <div className='flex flex-col'>   
            <motion.div style={{ scaleX: scrollYProgress }} className='origin-bottom-left fixed place-self-start bottom-0 left-0 right-0 h-1 bg-black dark:bg-white' />
            <TailwindAppBar /> 
  
          {/* Hero unit */}
          <div className='mt-10 pt-8 pb-6'>
            <div className="p-2 max-w-sm mx-auto bg-secondaryContainer-light dark:bg-secondaryContainer-dark rounded-xl shadow-lg flex items-center space-x-2">
              <TypewriterTitle text={typing_text} infinite={true} className="flex-none" /> 
            </div>
  
            {/* Buttons */}
            <div className="flex justify-center pt-4 space-x-2">
              <StyledButton name='Projects'>
                <CodeProjectsIcon className="fill-transparent dark:stroke-sky-100 stoke-sky-900 w-4 h-4 mr-2" />
              </StyledButton>
  
              <StyledButton name='About' >
                <InfoIcon className="fill-transparent dark:stroke-sky-100 stoke-sky-900 w-4 h-4 mr-2" />
              </StyledButton>
  
              <StyledButton name='Contact'>
                <ContactIcon className="fill-transparent dark:stroke-sky-100 stoke-sky-900 w-4 h-4 mr-2" />  
              </StyledButton>
            </div>
          </div>
  
          {/* Project Cards */}
          <div className="p-8 justify-center self-center rounded grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 dark:bg-neutral-800 bg-neutral-200">
             {cards}
          </div>

<div>
          {lineBreaks}
          </div>     
        {/* Footer */}
        <div className='flex-none flex flex-col items-center pt-4 pb-2'>
          <Copyright />
          </div>
        {/* End footer */}
        </div>
      </main>
    );
  }
  
  