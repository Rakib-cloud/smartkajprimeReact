"use client";
import React from "react";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import { Image} from 'primereact/image';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import SmallText from "@/app/components/SmallText/SmallText";

import { IoMdStar } from "react-icons/io";

export default function PopularServices() {
  // const [ref] = useKeenSlider<HTMLDivElement>({
  //   loop: true,
  //   mode: "free",
  //   breakpoints: {
  //     "(min-width: 425px)": {
  //       slides: { perView: 1, spacing: 5 },
  //     },
  //     "(min-width: 768px)": {
  //       slides: { perView: 2, spacing: 15 },
  //     },
  //     "(min-width: 1024px)": {
  //       slides: { perView: 4, spacing: 15 },
  //     },
  //   },
  //   slides: { perView: 1 },
  // });
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeading
          title={"Popular Services"}
          subTitle="2020 Services live – 293 added today."
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
              <Image
                alt=""
                src="https://i.ibb.co/q5s6ngz/service-Logo.png"
                className="w-full"
              />
              <Paragraph
                text={
                  "I will create a modern minimalist logo design for your business"
                }
                classes="pt-2"
              />
              <div className="flex justify-between items-center">
                <div className="pt-2 flex gap-x-2 items-center ">
                  <Avatar
                      image="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    // size="sm"
                  />
                  <SmallText
                    text="Ovior Rahman"
                    classes="font-semibold hover:underline duration-400 transition-all cursor-pointer"
                  />
                </div>
                <Paragraph text={"Level 2"} classes="font-semibold" />
              </div>
              <div className="flex justify-between items-center">
                <div className="py-2 flex items-center gap-x-1 ">
                  <IoMdStar size={18} />
                  <span className="font-semibold text-base">5.0</span>
                  <span className="text-base text-gray-600">(1k+)</span>
                </div>

                <Paragraph text={"From ₹2,184"} classes="font-semibold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
