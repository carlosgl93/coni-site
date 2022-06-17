import React, { useState } from "react";
import {
  Box,
  Grid,
  Drawer,
  Avatar,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <Grid
      container
      style={{
        padding: "2.5vh 3vw",
        backgroundColor: "#5DC1B9",
      }}
    >
      <Drawer anchor='left' open={drawer} onClose={() => setDrawer(false)}>
        <nav
          aria-label='navigation nav'
          style={{
            minWidth: "15vw",
          }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <FilterVintageIcon />
              </ListItemIcon>
              <ListItemText>Acunar en Flor</ListItemText>
            </ListItem>
          </List>
        </nav>
      </Drawer>
      <Grid item md={2}>
        <Button onClick={() => setDrawer(!drawer)}>
          <MenuIcon />
        </Button>
      </Grid>
      <Grid item md={2}>
        <Avatar
          src='/img/AvatarImg.jpg'
          sx={{
            width: 85,
            height: 85,
          }}
        />
      </Grid>
      <Grid item md={8}>
        <Typography variant='h5'>Constanza Sepulveda Zepeda</Typography>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};

export default Navbar;
