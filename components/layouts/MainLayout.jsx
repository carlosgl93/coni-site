import React from "react";
import Head from "next/head";
import { Box, Grid, Drawer, Avatar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Navbar from "../navigation/Navbar";

// import AvatarImg from "../../img/AvatarImg";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>Constanza Sepulveda</title>
        <meta name='description' content='Criar trimembradamente' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <main>{children}</main>
    </Box>
  );
};

export default MainLayout;
