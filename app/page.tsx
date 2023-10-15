'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';
import DarkModeButton from './dark_mode_button';
import { IsDarkModeContext } from './dark_mode_context';
import TypewriterTitle from './typewriter';

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
    <Album />
  );
}
export function Album() {
  const dm = React.useContext(IsDarkModeContext);
  const github_image = dm.enabled ? "./github-mark/github-mark-white.svg" : "./github-mark/github-mark.svg"

  return (
      <main>    
    
        <div className="flex flex-row flex-nowrap items-center space-x-2.5 px-4 bg-white dark:bg-black">
          <Image
            src={github_image}
            alt="Github"
            className="flex-none"
            width={25}
            height={25}
            priority
          />
   
        <Typography variant="h6" color="inherit" className="dark:text-white text-black" noWrap>
              goldy1992
        </Typography> 
      
        <div className='grow'/>
        <div>
          <DarkModeButton />
        </div>
        </div>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">

          {/* <div className='flex flex-row space-x-2 justify-start items-center'> */}
     
          <TypewriterTitle fullText='full-stack solutions.' />
            {/* <Typography
              component="h5"
              variant="h5"
              align="left"
              color="text.primary"
              className='flex-none font-mono'
            >{terminal_cursor}</Typography>
           
           
            <Typography
              component="h5"
              variant="h5"
              align="left"
              color="text.primary"
              className='typewriter flex-none font-mono'
     
            >
              </Typography> */}
      
              {/* <div className='grow'></div> */}
          {/* </div> */}
           
             
              

            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 ,
         bgcolor: 'background.paper'}} maxWidth="md">  
           
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
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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