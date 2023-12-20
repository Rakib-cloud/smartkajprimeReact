"use client";
import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function SliderLoader() {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <Skeleton className="h-12 w-4/5 rounded-lg mb-1" />
          <Skeleton className="h-12 w-3/5 rounded-lg mb-4" />
          <Skeleton className="h-3 w-2/5 rounded-lg mb-4" />
          <div className="flex item-center mb-4 gap-4">
            <Skeleton className="h-12 w-4/5 rounded-full" />
            <Skeleton className="h-12 w-1/5 rounded-full" />
          </div>
          <Skeleton className="h-3 w-3/5 rounded-lg mb-4" />
        </div>
        <Skeleton className="h-[550px] ms-auto w-[450px] rounded-xl" />
      </div>
    </div>
  );
}
