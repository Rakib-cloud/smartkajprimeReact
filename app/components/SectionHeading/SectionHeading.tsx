"use client";
import { SectionHeading } from "@/app/utils/interfaces";
import Link from "next/link";
import React from "react";

export default function SectionHeading({
  title,
  subTitle,
  link,
  classes=""
}: SectionHeading) {
  return (
    <div className={`mb-8 sm:flex justify-between items-end md:gap-y-0 space-y-2 ${classes}`}>
      <div>
        <h1 className="text-3xl font-medium text-gray-800">{title}</h1>
        <p className="text-gray-600">{subTitle}</p>
      </div>
      {link && <Link className="underline flex md:block" href={link}>View all</Link>}
    </div>
  );
}
