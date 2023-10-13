'use client'
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';



export default function Album() {
    return (

<div className="flex flex-row flex-nowrap">
    <p className="bg-red-300">Hello</p>
         <IconButton
                 size="large"
                 edge="start"
                 color="inherit"
                 aria-label="menu"
                 sx={{ mr: 2 }}
             >
                 <MenuIcon />
             </IconButton>
             <div className="grow bg-red-300">
                Some text
                </div>
             <IconButton
                 size="large"
                 edge="start"
                 color="inherit"
                 aria-label="menu"
                 sx={{ mr: 2 }}
             >
                 <MenuIcon />
             </IconButton>

</div>


    //         <Toolbar>
      
    //         <IconButton
    //             size="large"
    //             edge="start"
    //             color="inherit"
    //             aria-label="menu"
    //             sx={{ mr: 2 }}
    //         >
    //             <MenuIcon />
    //         </IconButton>

    //         <Typography variant="h6" color="inherit"className="min-w-min" noWrap>
    //             Album layout
    //         </Typography>
    //         <div className="grow">space</div>
                  
    //         <IconButton
    //             size="large"
    //             edge="start"
    //             color="inherit"
    //             aria-label="menu"
    //             sx={{ mr: 2 }}
    //         >
    //             <MenuIcon />
    //         </IconButton>
    

    // </Toolbar>

    );

}