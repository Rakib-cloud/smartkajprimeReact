"use client";
import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function Loading() {
  return (
    <main>
      <Skeleton className=" p-4 h-[100px]  w-full border  bg-default-300"></Skeleton>

      <div className="container py-16">
        <div className="">
          <Skeleton className="w-full h-[500px] rounded">
            <div className="w-full h-[500px]  border bg-default-200"></div>
          </Skeleton>
        </div>
      </div>
    </main>
  );
}
