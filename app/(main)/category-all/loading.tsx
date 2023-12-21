import React from 'react';

import { Skeleton } from 'primereact/skeleton';
import {color} from "@/app/utils/info";
import Link from "next/link";

export default  function  Loading(){
    const skeletonArray = Array.from({ length: 8 }, (_, index) => index);
    const SkeletonCard = () => (
        <div className='rounded-xl'>
            <Link
                href="/"
                className="block min-h-full bg-white"
                // style={{ background: "rgba(0, 0, 0, 0.1)" }}
            >
                <div className=" h-full w-full">
                    <Skeleton className="w-full h-48 bg-default-200 rounded-t-xl" />
                </div>
                <div className="p-4"  style={{background: color.background.accent}}>
                    <Skeleton className="w-2/3 h-4 bg-default-200  rounded mb-2" />
                    <Skeleton className="w-full h-20 bg-default-200 rounded" />
                </div>
            </Link>
        </div>
    );

    return (
        <div>
            <Skeleton className="h-[124px] w-full"/>
            <div className="container">
                <div className="grid grid-cols-4 gap-4 mt-5">
                    {skeletonArray.map((index) => (
                        <SkeletonCard key={index}/>
                    ))}
                </div>


            </div>
        </div>
    );
};
