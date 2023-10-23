'use client'
import * as React from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';
import { IsDarkModeContext } from './dark_mode_context';
import TypewriterTitle from './typewriter';
import { motion, useScroll } from "framer-motion"
import NewAppBar from './new_app_bar';
import {WorkIcon} from './icons/work_icon';
import DefaultCard from './cards/default_project_card';

const typing_text = "I'm a full-stack developer."

const imgUrl = "https://github.com/goldy1992/Mp3Player/blob/master/app/src/main/res/mipmap-hdpi/headphone_icon_foreground.png?raw=true"
const title = "MP3 Player"
const description = "An open source Android media player."
const mp3_url = "https://github.com/goldy1992/Mp3Player"

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

const cards = [1];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();



export default function Page() {
  return (
    <PageContent />
  );
}
export function PageContent() {
  const dm = React.useContext(IsDarkModeContext);
  const { scrollYProgress } = useScroll();

  return (
      <main>    
       <motion.div style={{ scaleX: scrollYProgress }} className='origin-bottom-left fixed place-self-start bottom-0 left-0 right-0 h-1 bg-black dark:bg-white' />
        <NewAppBar /> 

        {/* Hero unit */}
        <Box
          sx={{
            // bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >

        <div className="p-2 max-w-sm mx-auto bg-secondaryContainer-light dark:bg-secondaryContainer-dark rounded-xl shadow-lg flex items-center space-x-2">
          <TypewriterTitle text={typing_text} infinite={true} className="flex-none" /> 
        </div>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <button className="uppercase bg-sky-400 dark:bg-sky-800 dark:hover:bg-sky-700 hover:drow-shadow-md hover:bg-sky-500 hover:cursor-pointer text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center border-0">
            <WorkIcon className="fill-current w-4 h-4 mr-2" />
            <span>Projects</span>
          </button>


          <button className='rounded uppercase p-2 border-0 bg-secondary-light dark:bg-secondary-dark text-color-onSecondary-light dark:text-color-onSecondary-dark'>Contact</button>
        </Stack>
        </Box>
        <div className="p-8 justify-center grid xs:grid-cols-12 md:grid-cols-4">
          {/* <MaterialCard imgUrl={imgUrl} title={title} description={description} /> */}
          <DefaultCard imgUrl={imgUrl} url={mp3_url} title={title} description={description} />
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
    </main>
  );
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}


