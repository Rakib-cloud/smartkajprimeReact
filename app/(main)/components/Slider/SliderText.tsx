"use client";
import { useData } from "@/app/GlobalProvider/GlobalProvider";
import NextButton from "@/app/components/Button/Button";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import { Image} from 'primereact/image';
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import {InputText} from "primereact/inputtext";

export default function SliderText() {
    const { data } = useData();
    return (
        <div className={"w-full lg:w-1/2"}>
            <h1 className="text-5xl font-medium mb-2 py-5 text-white">{data}</h1>
            <Paragraph text={"Join at SmartKaj now"} classes={"text-white"}/>
            {/* SEARCH BOX START FROM HERE  */}
            <div className="my-4 grid grid-cols-12 gap-4">
                <div className="col-span-7">
                    <InputText
                        size="md"
                        className="w-full"
                        placeholder="Find talented freelancer here"
                    />
                </div>
                <div className="col-span-3">
                    <NextButton
                        func={() => {
                            redirect("/");
                        }}
                        title="Search"
                        classes=" flex justify-center"
                    />
                </div>
            </div>

            {/* POPULAR SEARCHES AREA START FROM HERE  */}
            <div className="md:flex items-center gap-x-1">
                <span className="text-gray-200 whitespace-nowrap">Popular Searches : </span>
                <ul className="flex items-center flex-wrap gap-2 text-sm text-gray-100">
                    <li>
                        <Link href={"#"} className={'whitespace-nowrap'}>Business Development</Link>
                    </li>
                    <li>
                        <Link href={"#"} className={'whitespace-nowrap'}>Data Management</Link>
                    </li>
                </ul>
            </div>

            {/* TRUSTED BY SECTION START FROM HERE  */}
            <div className="mt-8 lg:mt-16">
                <p className="text-gray-200">Trusted by leading brands and startups</p>
                <div className="grid grid-cols-3 sm:grid-cols-5 items-center">
                    <Image alt="" width="80" src="/assets/brands/google.png" />
                    <Image
                        alt=""
                        className="ml-6"
                        width="80"
                        src="/assets/brands/microsoft.png"
                    />
                    <Image
                        alt=""
                        className="ml-6"
                        width="80"
                        src="/assets/brands/google.png"
                    />
                </div>
            </div>
        </div>
    );
}