'use client'
import * as React from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { IsDarkModeContext } from './dark_mode_context';
import TypewriterTitle from './typewriter';
import { motion, useScroll } from "framer-motion"
import NewAppBar from './new_app_bar';
import {WorkIcon} from './icons/work_icon';
import DefaultCard from './cards/default_project_card';
import StyledButton from './styled_button';

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
          <NewAppBar /> 

        {/* Hero unit */}
        <Box
          sx={{
             //bgcolor: 'red',
            pt: 8,
            pb: 6,
          }}
        >
        {/* <div className='pt-8 pb-6 bg-cyan-500'> */}
          <div className="p-2 max-w-sm mx-auto bg-secondaryContainer-light dark:bg-secondaryContainer-dark rounded-xl shadow-lg flex items-center space-x-2">
            <TypewriterTitle text={typing_text} infinite={true} className="flex-none" /> 
          </div>


          <div className="flex justify-center pt-4 space-x-2">
            <StyledButton name='Projects'>
              <WorkIcon className="fill-current w-4 h-4 mr-2" />
            </StyledButton>

            <StyledButton name='About' >
              <WorkIcon className="fill-current w-4 h-4 mr-2" />
            </StyledButton>

            <StyledButton name='Contact' />
          </div>
        {/* </div> */}
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
      </div>
    </main>
  );
}


