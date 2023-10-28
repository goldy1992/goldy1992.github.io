'use client'
import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TypewriterTitle from './typewriter';
import { motion, useScroll } from "framer-motion"
import {CodeProjectsIcon, ContactIcon, InfoIcon} from './icons/icons';
import DefaultCard from './cards/default_project_card';
import StyledButton from './styled_button';
import TailwindAppBar from './tailwind_app_bar';
import { Project, ProjectBuilder } from './project';

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
    .url("https://github.com/goldy1992/restaurant_management_system")
    .description("A dockerised restaurant management written using Java Swing and Spring Integration")  
    .time("2015")
    .build(),
  new ProjectBuilder()
    .id(2)
    .title("2D Pong")
    .url("https://github.com/goldy1992/Pong")
    .description("A basic Java implementation of 2D Pong in Java using MVC design principles.")
    .time("2014")
    .build()  
]
const cards = projects.map(
  project => ( <DefaultCard project={project} />) 
)


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Page() {
  return (
    <PageContent />
  );
}
export function PageContent() {
  const { scrollYProgress } = useScroll();

  return (
      <main> 
        <div className='flex flex-col'>   
          <motion.div style={{ scaleX: scrollYProgress }} className='origin-bottom-left fixed place-self-start bottom-0 left-0 right-0 h-1 bg-black dark:bg-white' />
          <TailwindAppBar /> 

        {/* Hero unit */}
        {/* <Box
          sx={{
             //bgcolor: 'red',
            pt: 8,
            pb: 6,
          }}
        > */}
        <div className='pt-8 pb-6'>
          <div className="p-2 max-w-sm mx-auto bg-secondaryContainer-light dark:bg-secondaryContainer-dark rounded-xl shadow-lg flex items-center space-x-2">
            <TypewriterTitle text={typing_text} infinite={true} className="flex-none" /> 
          </div>


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

        <div className="p-8 justify-center self-center rounded grid grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-4 dark:bg-neutral-800 bg-neutral-200">
           {cards}
        </div>
        
      {/* Footer */}
      <Box sx={{ //bgcolor: 'background.paper', 
      p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      </div>
    </main>
  );
}


