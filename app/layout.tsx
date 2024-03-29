import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./layouts/Layout";
import GlobalProvider from "./GlobalProvider/GlobalProvider";
import "keen-slider/keen-slider.min.css";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
// import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {PrimeReactProvider} from "primereact/api";
export const metadata: Metadata = {
  title: "Smart Kaj | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                          const style = document.createElement('style')
                          style.innerHTML = '@layer tailwind-base, primereact, tailwind-utilities;'
                          style.setAttribute('type', 'text/css')
                          document.querySelector('head').prepend(style)
                        `,
            }}
        />
        <title></title>
    </head>

      <body className={inter.className}>
        <GlobalProvider>
          <PrimeReactProvider>
            <Layout>{children}</Layout>
          </PrimeReactProvider>

        </GlobalProvider>
      </body>
    </html>
  );
}
