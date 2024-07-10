import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";
import withLayoutMain from "@/libs/components/layout/layoutHome";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular products</Box>
          <Box>Top agents</Box>
          <Box>Top products</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
    </>
  );
};

export default withLayoutMain(Home);
