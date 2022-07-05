import { Box, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import {
  backgroundColor,
  orange,
  black,
  fontColorWhiteBackground,
} from "../colors";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        spacing={0}
        columnSpacing={0}
        style={{
          paddingLeft: "5vw",
          paddingTop: "3vh",
        }}
      >
        <Grid item xs={6} sm={6} md={4}>
          <Image src={"/img/invTemplate1.webp"} width='165px' height='333px' />
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <Image src={"/img/invTemplate2.jfif"} width='165px' height='333px' />
        </Grid>
      </Grid>
    </Box>
  );
}
