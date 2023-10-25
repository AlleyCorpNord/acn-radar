'use client'

import { createTheme, MantineProvider } from '@mantine/core'
import React from 'react'
import { Atkinson_Hyperlegible, Outfit } from 'next/font/google'
import '@mantine/core/styles.css';

const headingFont = Outfit({
  subsets: ["latin"],
});
const bodyFont = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  colors: {
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
})

export default function LayoutContent({ children }) {
  return <MantineProvider
    theme={theme}
  >
    {children}
  </MantineProvider>
}