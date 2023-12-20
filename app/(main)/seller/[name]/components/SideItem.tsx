"use client";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { color } from "@/app/utils/info";
import Paragraph from "@/app/components/Paragraph/Paragraph";

export default function SideItem() {
  return (
    <div
      className="p-8 rounded-xl sticky top-24"
      style={{ background: color.background.accent }}
    >
      <div className="space-y-5">
        <div className="">
          <Paragraph text={"Offered Salary"} classes={"font-bold"} />
          <Paragraph text={"$1200/month"} />
        </div>
        <div className="">
          <Paragraph text={"Experience time"} classes={"font-bold"} />
          <Paragraph text={"6-8 years"} />
        </div>
        <div className="">
          <Paragraph text={"Languages"} classes={"font-bold"} />
          <Paragraph text={"English"} />
        </div>
        <div className="">
          <Paragraph text={"Gender"} classes={"font-bold"} />
          <Paragraph text={"Male"} />
        </div>
        <div className="">
          <Paragraph text={"Qualification"} classes={"font-bold"} />
          <Paragraph text={"Bachelor Degree"} />
        </div>
        <div className="">
          <Paragraph text={"Age"} classes={"font-bold"} />
          <Paragraph text={"25years"} />
        </div>
        <div className="">
          <Paragraph text={"Phone"} classes={"font-bold"} />
          <Paragraph text={"+8801768726911"} />
        </div>
        <div className=" flex items-center gap-2">
          <FiFacebook size={22} />
          <TiSocialLinkedin size={22} />
          <FaWhatsapp size={22} />
          <PiTelegramLogoBold size={22} />
        </div>
      </div>
    </div>
  );
}
