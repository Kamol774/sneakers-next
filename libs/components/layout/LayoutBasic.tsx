import { Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import Head from "next/head";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Sneakers</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#81c784" }}>Header Basic</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutBasic;
