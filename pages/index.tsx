import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";

export default function Home() {
  return (
    <>
      <Stack sx={{ background: green[300] }}>Header</Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular products</Box>
          <Box>Top agents</Box>
          <Box>Top products</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
      <Stack sx={{ background: brown[300] }}>Footer</Stack>
    </>
  );
}
