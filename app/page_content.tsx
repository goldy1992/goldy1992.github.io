'use client'
import { useScroll } from "framer-motion";
import DefaultCard from "./cards/default_project_card";
import { CodeProjectsIcon, InfoIcon, ContactIcon } from "./icons/icons";
import { Project, ProjectBuilder } from "./project";
import StyledButton from "./components/styled_button";
import TailwindAppBar from "./components/tailwind_app_bar";
import TextWriter from "./text_writer";
import FloatingHomeButton from "./components/floating_action_button";
import { scrollToFn } from "./utils";
import CodeEditor from "./components/code_block/code_block";


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
      <div id="home" />
      <div className='flex flex-col'>   
        {/* <motion.div style={{ scaleX: scrollYProgress }} className='origin-bottom-left fixed place-self-start bottom-0 left-0 right-0 h-1 bg-sky-400 dark:bg-sky-800' /> */}
     
        <TailwindAppBar />
        <CodeEditor className="flex-grow" />
        <FloatingHomeButton onClick={() =>
          scrollToFn("home")
        }
         /> 
        {/* Hero unit */}
        <TextWriter />
      </div>
  
      {/* Buttons */}
      <div className="flex justify-center pt-4 space-x-2">
        <StyledButton name='Projects' scrollTo="projects">
          <CodeProjectsIcon className="fill-transparent dark:stroke-sky-100 stoke-sky-900 w-6 h-6 mr-2" />
        </StyledButton>

        <StyledButton name='About' scrollTo="about">
          <InfoIcon className="fill-transparent dark:stroke-sky-100 stoke-sky-900 w-4 h-4 mr-2" />
        </StyledButton>

        <StyledButton name='Contact' scrollTo="contact">
          <ContactIcon className="fill-transparent dark:stroke-sky-100 stoke-sky-900 w-4 h-4 mr-2" />  
        </StyledButton>
      </div>
    <div id="about" />
    <div className="flex flex-col px-4 py-3 items-center pt-4 mt-8">
      <div>
        <h2 className="font-bold text-xl py-2 text-gray-800 dark:text-gray-200">About Me</h2>
      </div>
      <div className="rounded py-1 px-7">
        <ul className="list-disc text-medium py-4 text-gray-800 dark:text-gray-200">
          <li>7+ years as a full-stack developer working with enterprise applications.</li>
          <li>Experience developing AWS Cloud Solutions along with writing Infrastructure as Code.</li>
          <li>Hobbyist Android Developer working with Compose, on custom CI/CD workflows.</li>
        </ul>
      </div>

    </div>
      {/* Project Cards */}
      <div id="projects" />
      <div className="flex flex-col items-center pt-4 mt-8">
        <div>
          <h2 className="font-bold text-xl text-gray-800 dark:text-gray-200">Projects</h2>
        </div>
        <div className="p-8 justify-center self-center rounded grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 ">
          {cards}
        </div>
      </div>

      <div id="contact" />
      <div className="flex flex-col px-4 py-3 items-center pt-4 mt-8">
      <div>
        <h2 className="font-bold text-xl py-2 text-gray-800 dark:text-gray-200">Contact</h2>
      </div>
      <div className="rounded py-1 px-7">
        <ul className="list-disc text-medium py-4 text-gray-800 dark:text-gray-200">
          <li>Find me on Github</li>
          <li>Send me an email: <a href="mailto:goldy131992@gmail.com">goldy131992@gmail.com</a></li>
        </ul>
      </div>

    </div>

  

  {/* Footer */}
  <div className='flex-none flex flex-col items-center pt-4 pb-2'>
    <Copyright />
    </div>
  {/* End footer */}
  
</main>
    );
  }
  
  