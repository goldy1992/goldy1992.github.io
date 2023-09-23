'use client'
import { useState } from "react";
import AppBar from "@mui/material/AppBar/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import DarkModeButton from "./dark_mode_button";
import Typography from "@mui/material/Typography/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableTemporaryDrawer from "./nav_drawer";

export default function ButtonAppBar() {
    const [isOpen, setOpen] = useState(false); 
   console.log("rendering button app bar");
    return (
     <div>
     <SwipeableTemporaryDrawer isOpen={isOpen} setIsOpen={setOpen} />
     
     <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
         <Toolbar>
           <IconButton
             onClick={()=> setOpen(true)}
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
           >
             <MenuIcon />
           </IconButton>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             News
           </Typography>
           <DarkModeButton/>
         
 
         </Toolbar>
       </AppBar>
     </Box>
     </div>
   );
 }
 
 