"use client";
import { color } from "@/app/utils/info";
import React from "react";

export default function HorizontalList({ data }: any) {
  return (
    <ul className="flex flex-wrap mt-4">
      {data?.map((item: string, i: number) => {
        return (
          <li
            key={i}
            style={{
              background: color.background.accent
            }}
            className="py-1 px-2 text-xs rounded-full mr-2 mb-1 text-gray-600"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
