import { Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Sneakers</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack id={"top"}>
            <Top />
          </Stack>
          <Stack className={"header-main"}>Header Filter</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack id={"footer"}>
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
