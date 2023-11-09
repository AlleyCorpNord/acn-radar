import Head from "next/head";
import React from "react";
import LayoutContent from "./LayoutContent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <body>
        <LayoutContent children={children} />
      </body>
    </html>
  );
}
