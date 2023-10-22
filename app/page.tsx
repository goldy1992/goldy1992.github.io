'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';
import { IsDarkModeContext } from './dark_mode_context';
import TypewriterTitle from './typewriter';
import { motion, useScroll } from "framer-motion"
import NewAppBar from './new_app_bar';
import WorkIcon from './icons/work_icon';

const typing_text = "I'm a full-stack developer."

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
        <Container sx={{ py: 8 ,
      //   bgcolor: 'background.paper'
         }} maxWidth="md">  
           
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  className='transition ease-in-out hover:scale-110'
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://github.com/goldy1992/Mp3Player/blob/master/app/src/main/res/mipmap-hdpi/headphone_icon_foreground.png?raw=true"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" >
                      MP3 Player
                    </Typography>
                    <Typography>
                      An open source Android media player.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
 
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


