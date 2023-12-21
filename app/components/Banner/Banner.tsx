"use client";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import NextButton from "@/app/components/Button/Button";
import React from "react";
import Text from "@/app/components/Text/Text";
import {Image} from "primereact/image";

export  default function Banner({ data }: any) {
    const {title, description, button, func=null} = data
    return (
        <section
            className='py-16 bg-gray-50'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-10">
                        <div className="w-8/12">
                            <Text size={"ex-big"} title={title}/>
                            <Paragraph text={description} classes={"my-3"}/>
                            {
                                data?.button &&   <NextButton title={button} func={func}/>
                            }
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <Image className='w-full' width={"500"} src='https://civi.uxper.co/wp-content/uploads/2023/01/image-home-03.webp' alt={"Banner"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}