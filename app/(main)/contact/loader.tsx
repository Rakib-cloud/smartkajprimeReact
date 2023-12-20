"use client";
import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function Loader() {
  return (
    <main>
      <Skeleton className=" p-4 h-[100px]  w-full border  bg-default-300"></Skeleton>

      <div className="container py-16">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="">
              <Skeleton className="w-[532px] h-[60px] rounded">
                <div className="w-[532px] h-[60px]  border bg-default-200"></div>
              </Skeleton>
            </div>
            <div className="mt-5">
              <Skeleton className="w-[532px] h-[60px] rounded">
                <div className="w-[532px] h-[60px]  border bg-default-200"></div>
              </Skeleton>
            </div>

            <div className="mt-5">
              <Skeleton className="w-[532px] h-[60px] rounded">
                <div className="w-[532px] h-[60px]  border bg-default-200"></div>
              </Skeleton>
            </div>

            <div className="mt-5">
              <Skeleton className="w-[432px] h-[300px] rounded">
                <div className="w-[432px] h-[300px]  border bg-default-200"></div>
              </Skeleton>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 mt-5 lg:mt-0">
            <div className="">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-4 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
            <Skeleton className="rounded-md mt-3">
              <div className=" p-4 h-[520px]  border  bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </main>
  );
}
