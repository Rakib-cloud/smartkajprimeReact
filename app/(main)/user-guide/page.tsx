"use client";
import PageHeading from "@/app/components/PageHeading/PageHeading";
import React from "react";
import AllUserGuide from "@/app/(main)/user-guide/AllUserGuide/AllUserGuide";

export default function UserGuide() {
  const data = {
    pageName: "User Guide",
    nav: [
      { name: "Home", link: "/" },
      { name: "user-guide", link: "/user-guide" },
    ],
  };
  return (
    <main>
      <PageHeading data={data} />
      <AllUserGuide />
    </main>
  );
}
