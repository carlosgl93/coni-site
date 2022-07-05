import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Drawer,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import {
  orange,
  black,
  backgroundColor,
  fontColorWhiteBackground,
} from "../../colors";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const router = useRouter();

  return (
    <Box
      style={{
        padding: "2.5vh 3vw",
        backgroundColor: black,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Drawer anchor='top' open={drawer} onClose={() => setDrawer(false)}>
        <nav
          aria-label='navigation nav'
          style={{
            minWidth: "20vw",
            backgroundColor: backgroundColor,
          }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <CloseOutlinedIcon onClick={() => setDrawer(false)} />
              </ListItemIcon>
              <Link href={"/"} onClick={() => setDrawer(false)}>
                <ListItemText
                  style={{
                    textAlign: "center",
                  }}
                  onClick={() => setDrawer(false)}
                >
                  Te invito
                </ListItemText>
              </Link>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon
                  onClick={() => {
                    setDrawer(false);
                    router.push("/ShoppingCart");
                  }}
                />
              </ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem>
              <Link href={"/Digitales"}>
                <ListItemText
                  style={{
                    textAlign: "center",
                  }}
                  onClick={() => setDrawer(false)}
                >
                  Digitales
                </ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"/Imprimibles"}>
                <ListItemText
                  style={{
                    textAlign: "center",
                  }}
                  onClick={() => setDrawer(false)}
                >
                  Imprimibles
                </ListItemText>
              </Link>
            </ListItem>
          </List>
        </nav>
      </Drawer>
      <Button onClick={() => setDrawer(!drawer)}>
        <MenuIcon style={{ color: orange }} />
      </Button>
      <Link href='/'>
        <Avatar
          src='/img/teInvitoLogo.jpeg'
          sx={{
            width: "60px",
            height: "60px",
          }}
        />
      </Link>

      <ShoppingCartOutlinedIcon
        onClick={() => {
          router.push("/ShoppingCart");
        }}
        style={{ color: orange, margin: "2vh 2vw" }}
      />
    </Box>
  );
};

export default Navbar;
