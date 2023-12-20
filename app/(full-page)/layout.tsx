import React from "react";
import FullPageLayout from "../layouts/FullPageLayout";
import { LayoutProps } from "../utils/interfaces";

export default function Layout({ children }: LayoutProps) {
  return <FullPageLayout>{children}</FullPageLayout>;
}
