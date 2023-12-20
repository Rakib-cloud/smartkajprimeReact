"use client";
import React from "react";
import BreadCrumb from "../BreadCumb/BreadCumb";

export default function PageHeading({ data }: any) {
  return (
    <section 
    // style={{background:color.background.accent}}
    className="py-8 mb-8 bg-gray-50">
      <div className="container">
        <h1 className="text-4xl font-medium text-gray-600">{data?.pageName}</h1>
        <BreadCrumb data={data?.nav} />
      </div>
    </section>
  );
}
