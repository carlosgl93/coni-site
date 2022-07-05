import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import banner from "../../public/img/banner.png";

import {
  orange,
  black,
  backgroundColor,
  fontColorWhiteBackground,
  leaf1,
  leaf2,
} from "../../colors";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [imprimibles, setImpribles] = useState(false);
  const [digitales, setDigitales] = useState(false);

  const digitalRoutes = [
    {
      id: 0,
      href: "/matrimonios",
      title: "Matrimonios",
    },
    {
      id: 1,
      href: "/cumpleanos",
      title: "Cumpleaños",
    },
    {
      id: 2,
      href: "/religiosas",
      title: "Religiosas",
    },
    {
      id: 3,
      href: "/babyshower",
      title: "Babyshower",
    },
  ];

  const imprimiblesRoutes = [
    {
      id: 0,
      href: "/santitos",
      title: "Santitos Imprimibles",
    },
    {
      id: 1,
      href: "/cuadritos",
      title: "Cuadritos Imprimibles",
    },
  ];

  const router = useRouter();

  return (
    <Box>
      <Box
        style={{
          padding: "2.5vh 3vw",
          backgroundColor: backgroundColor,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundImage: `url(${banner})`,
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
              <ListItem onClick={() => setDigitales(!digitales)}>
                <ListItemIcon>
                  {digitales ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </ListItemIcon>
                <ListItemText
                  style={{
                    textAlign: "center",
                    marginRight: "15vw",
                  }}
                >
                  Digitales
                </ListItemText>
              </ListItem>
              {digitales &&
                digitalRoutes.map((route) => {
                  return (
                    <Link href={route.href}>
                      <ListItem
                        style={{ textAlign: "center" }}
                        onClick={() => setDrawer(false)}
                      >
                        <ListItemText>{route.title}</ListItemText>
                      </ListItem>
                    </Link>
                  );
                })}
              <ListItem onClick={() => setImpribles(!imprimibles)}>
                <ListItemIcon>
                  {imprimibles ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </ListItemIcon>
                <ListItemText
                  style={{
                    textAlign: "center",
                    marginRight: "15vw",
                  }}
                >
                  Imprimibles
                </ListItemText>
              </ListItem>
              {imprimibles &&
                imprimiblesRoutes.map((route) => {
                  return (
                    <Link href={route.href}>
                      <ListItem
                        style={{ textAlign: "center" }}
                        onClick={() => setDrawer(false)}
                      >
                        <ListItemText>{route.title}</ListItemText>
                      </ListItem>
                    </Link>
                  );
                })}
            </List>
          </nav>
        </Drawer>
        <Button onClick={() => setDrawer(!drawer)}>
          <MenuIcon style={{ color: orange }} />
        </Button>
        <Link href='/'>
          <Image src={"/img/banner.png"} width={"375px"} height={"100px"} />
        </Link>

        <ShoppingCartOutlinedIcon
          onClick={() => {
            router.push("/ShoppingCart");
          }}
          style={{ color: orange, margin: "2vh 2vw" }}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
