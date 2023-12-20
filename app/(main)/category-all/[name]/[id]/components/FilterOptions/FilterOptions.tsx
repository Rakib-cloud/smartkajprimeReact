"use client";
import NextButton from "@/app/components/Button/Button";
import SmallText from "@/app/components/SmallText/SmallText";
import { Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
export default function FilterOptions() {
  const animals = [
    {
      label: "Web Design",
      value: 1,
    },
  ];
  return (
    <div className="container">
      <div className="border-b py-6 mb-6">
        <div className="w-6/12 mx-auto grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <Input
              radius="full"
              size="md"
              className="w-full bg-transparent"
              placeholder="Find talented freelancer here"
            />
          </div>
          <div className="col-span-3">
            <NextButton title="Search" classes="w-full" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-7">
          <div className="flex items-center">
            <SmallText classes="mr-4 whitespace-nowrap" text="Sort by" />
            <Select size={"sm"} label="Category"  className="w-64 mr-4">
              {animals.map((animal: any) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
            <Select size={"sm"} label="Category" className="w-64 mr-4">
              {animals.map((animal: any) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
            <Select size={"sm"} label="Category" className="w-64 mr-4">
              {animals.map((animal: any) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex justify-end">
            <SmallText text="View as"/>
            <IoGridOutline size={20} className="text-gray-600 ml-4" />
            <FaBars size={20} className="text-gray-600 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
