"use client";
import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function Loader() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, k) => {
            return (
              <div key={k} className={`flex flex-col gap-3 ${_}`}>
                <div className="w-full bg-gray-50 p-4 rounded-xl">
                  <Skeleton className="w-12 h-12 rounded-full"></Skeleton>
                  <br />
                  <Skeleton className="w-5/5 rounded-lg mb-2">
                    <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
                  </Skeleton>
                  <Skeleton className="w-2/5 rounded-lg mb-2">
                    <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
                  </Skeleton>
                  <br />
                  <div className="space-y-3">
                    <Skeleton className="w-5/5 rounded-lg">
                      <div className="h-3 w-full rounded-lg bg-secondary"></div>
                    </Skeleton>
                    <Skeleton className="w-5/5 rounded-lg">
                      <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
                    </Skeleton>

                    <Skeleton className="w-4/5 rounded-lg">
                      <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
                    </Skeleton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
