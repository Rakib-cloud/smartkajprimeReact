"use client";
import { color } from "@/app/utils/info";
import { Button, Image, Input } from "@nextui-org/react";
import React from "react";
import SmallText from "../SmallText/SmallText";

export default function Subscription() {
  return (
    <section className={"my-16"}>
      <div className="container ">
        <div
          style={{ background: color.background.accent }}
          className="grid grid-cols-12 gap-4 p-8 rounded-xl items-center"
        >
          <div className="lg:col-span-7 col-span-12 flex items-center">
            <div className="w-20 h-20 object-cover shadow p-2 rounded-full hidden lg:block">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/5529/5529951.png"
                width={500}
                alt=""
              />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-medium text-gray-600">
                Subscribe to our newsletter
              </h1>
              {/* <Text title={"Subscribe to our newsletter"} size={"big"}/> */}

              <SmallText
                text={"We'll keep you updated with the best new jobs."}
              />
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12">
            <div className="grid grid-cols-12 gap-4">
              <Input
                placeholder="Create a service"
                radius="full"
                className="lg:col-span-8 md:col-span-5 col-span-8 "
              />
              <Button
                style={{ background: color.background.secondary }}
                radius="full"
                className="text-white lg:col-span-4  md:col-span-2 col-span-4 "
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
