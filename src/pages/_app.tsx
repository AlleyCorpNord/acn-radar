import Head from "next/head";
import React from "react";
import { MantineProvider, useMantineTheme } from "@mantine/core";
import { Raleway } from "next/font/google";

const font = Raleway({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

const App = ({ Component, pageProps }) => {
  const theme = useMantineTheme();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <MantineProvider
        theme={{
          ...theme,
          colors: {
            ...theme.colors,
            brand: [
              "#dff9ff",
              "#c2e6ec",
              "#a1d5db",
              "#7fc3cc",
              "#5cb2bc",
              "#4399a3",
              "#31777f",
              "#1f565b",
              "#0a3438",
              "#001416",
            ],
          },
          fontFamily: font.style.fontFamily,
          primaryColor: "brand",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default App;
