"use client";
import { color } from "@/app/utils/info";
import React from "react";
import {Button} from "primereact/button";

export default function NextButton({
  title,
  sizes,
  types,
  classes = "",
  radius = "full",
  func = null,
}: any) {
  return (
    <Button
      size={sizes}
      style={{ background: color.background.secondary }}
      onClick={func}
      className={`${classes} text-white cursor-pointer hover:bg-red-600`}
      type={types}
    >
      {title}
    </Button>
  );
}
