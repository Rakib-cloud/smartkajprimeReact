import React from "react";
import MainLayout from "../layouts/MainLayout";
import { LayoutProps } from "../utils/interfaces";

export default function layout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
