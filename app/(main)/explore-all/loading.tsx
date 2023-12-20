import React from 'react';
import {Card, Skeleton} from "@nextui-org/react";

export default  function  Loading(){
    const skeletonArray = Array.from({ length: 3 }, (_, index) => index);

    //loading card function
    const SkeletonCard = () => (
        <div className="">
            <Card className="bg-white p-4 rounded-xl border">
                <div className="flex items-center justify-between mb-4">
                    <Skeleton className="w-10 h-10 bg-default-300 rounded-full" />
                    <Skeleton className="w-24 h-8 bg-default-300 rounded-full" />
                </div>
                <div className="mb-2">
                    <Skeleton className="w-1/2 h-6 bg-default-200 rounded-full" />
                </div>
                <ul className="flex items-center space-x-4 mb-4">
                    <li className="flex items-center text-sm text-gray-500">
                        <Skeleton className="w-16 h-4 bg-default-200 rounded-full"></Skeleton>
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                        <Skeleton className="w-16 h-4 bg-default-200 rounded-full"></Skeleton>
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                        <Skeleton className="w-16 h-4 bg-default-200 rounded-full"></Skeleton>
                    </li>
                </ul>
                <div className="mb-4">
                    <Skeleton className="w-full h-8 bg-default-300 rounded-full"></Skeleton>
                </div>
                <div className="flex space-x-2">
                    <Skeleton className="w-12 h-4 bg-default-300 rounded-full"></Skeleton>
                    <Skeleton className="w-12 h-4 bg-default-300 rounded-full"></Skeleton>
                    <Skeleton className="w-12 h-4 bg-default-300 rounded-full"></Skeleton>
                </div>
            </Card>
        </div>
    );
    return (
        <div>
            <Skeleton className="h-80 w-full"/>
            <div className="container">
                <div className="py-16" >
                    <Skeleton className="h-8 w-[500px]"/>
                    <Skeleton className="h-5 w-[300px] mt-3"/>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {skeletonArray.map((index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>

            </div>
        </div>
    );
};

