import Head from "next/head";
import React from "react";
import { MantineProvider, useMantineTheme } from "@mantine/core";
import { Outfit, Atkinson_Hyperlegible } from "next/font/google";

const headingFont = Outfit({
  subsets: ["latin"],
});
const bodyFont = Atkinson_Hyperlegible({
  weight: ["400", "700"],
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
        <meta name="robots" content="noindex" />
      </Head>
      <MantineProvider
        theme={{
          ...theme,
          colors: {
            ...theme.colors,
            brand: [
              "#78AAA0",
              "#61A799",
              "#4DA391",
              "#3D9E8A",
              "#2C9A84",
              "#1C997F",
              "#0B997C",
              "#177D68",
              "#1E6758",
              "#21564B"
            ],
          },
          fontFamily: bodyFont.style.fontFamily,
          headings: { fontFamily: headingFont.style.fontFamily },
          primaryColor: "brand",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default App;
