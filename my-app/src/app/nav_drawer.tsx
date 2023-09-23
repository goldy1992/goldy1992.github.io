import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider/Divider";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer/SwipeableDrawer";
import React from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SwipeableTemporaryDrawer({isOpen, setIsOpen}: {isOpen:boolean, setIsOpen: (open:boolean)=> void}) {

    const _toggleDrawer =  
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
  
      console.log("toggling drawer to " + open);
      setIsOpen(open);
    };
   
  
    const list = () => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        // onClick={setIsOpen(false)}
        // onKeyDown={setIsOpen(false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
    console.log("renderingdrawer: opened: " + isOpen);
    return (
      <div>
        {
        
             <React.Fragment key={"left"}>
        {}
            <SwipeableDrawer
              anchor={'left'}
              open={isOpen}
              onClose={_toggleDrawer(false)}
              onOpen={_toggleDrawer(true)}
            >
              {list()}
            </SwipeableDrawer>
           </React.Fragment>
        }
      </div>
    );
  }