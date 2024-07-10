import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";

const ProductList: NextPage = () => {
  return (
    <>
      <Container>Product List</Container>
    </>
  );
};
export default withLayoutBasic(ProductList);
