"use client";
import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children }: any) {
  return (
    <React.Fragment>
      <Nav />
      {children}
      <Footer />
    </React.Fragment>
  );
}
