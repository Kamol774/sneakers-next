import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";
import withLayoutMain from "@/libs/components/layout/LayoutHome";

const Home: NextPage = () => {
  return (
    <>
      <Stack>
        <Stack flexDirection={"column"}>
          <Stack>
            <Stack className="container">Popular products</Stack>
          </Stack>
          <Box>Top agents</Box>
          <Box>Top products</Box>
          <Box>Events</Box>
        </Stack>
      </Stack>
    </>
  );
};

export default withLayoutMain(Home);
