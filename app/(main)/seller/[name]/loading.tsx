import React from 'react';
import {Card, Skeleton} from "@nextui-org/react";
import {color} from "@/app/utils/info";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";

export default  function  Loading(){
    const SkeletonProfile = () => {
       return (
           <div className="space-y-5">
               <div className="">

                       <div className="w-20 h-20 rounded-full overflow-hidden">
                           <Skeleton className="w-full h-full bg-default-300 rounded-full"/>
                       </div>


                   <div className=" mt-5">
                       <div className="flex items-center">
                           <Skeleton className="w-20 h-4 bg-default-200 rounded-full"/>
                           <Skeleton className="w-16 h-4 bg-default-200 rounded-full ml-2"/>
                       </div>
                       <div className="flex items-center justify-start mt-1">
          <span className="flex items-center gap-1 mr-2">
            <CiLocationOn size={19}/>
            <Skeleton className="w-16 h-4 bg-default-200 rounded-full"/>
          </span>
                           <span className="flex items-center gap-1 mr-2">
            <BsCurrencyDollar size={19}/>
            <Skeleton className="w-20 h-4 bg-default-200 rounded-full"/>
          </span>
                           <span className="flex items-center gap-1 mr-2">
            <AiOutlineStar size={19} className="text-teal-400"/>
            <Skeleton className="w-24 h-4 bg-default-200 rounded-full"/>
          </span>
                       </div>
                   </div>
               </div>
               <div>
                   <Skeleton className="w-full h-48 bg-default-200 rounded-lg"/>
               </div>
               <div>
                   <div>
                       <Skeleton className="w-24 h-4 rounded-full "/>
                       <div className="mt-2 flex gap-4">
                           <Skeleton className="w-[65px] h-[24px] bg-default-200 rounded-full mb-2"/>
                           <Skeleton className="w-[65px] h-[24px] bg-default-200 rounded-full mb-2"/>
                           <Skeleton className="w-[65px] h-[24px] bg-default-200 rounded-full mb-2"/>
                       </div>
                   </div>
               </div>
           </div>
       );
    }
    const SkeletonWorkExperience = () => (
        <div className="space-y-8">
            <div>
                <Skeleton className="w-28 h-4 bg-default-200 rounded-full" />
                <div className="flex gap-3 mt-3">
                    <div className="h-28 w-2 border-r border-dotted border-gray-400 my-2"></div>
                    <div>
                        <Skeleton className="w-32 h-4 bg-default-200 rounded-full" />
                        <div className="flex gap-4 items-center mt-3">
            <span>
              <Skeleton className="w-20 h-4 bg-default-200 rounded-full" />
            </span>
                            <Skeleton className="w-28 h-4 bg-default-200 rounded-full" />
                        </div>
                       <Skeleton className="w-full h-12 bg-default-200 rounded-full mt-3" />
                    </div>
                </div>
            </div>
        </div>
    );
    const ProjectSkeleton=()=>(
        <div className="space-y-8">
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <Skeleton className="w-[330px]  h-64 rounded-lg"/>
                </div>
                <div className="col-span-6">
                    <Skeleton className="w-[330px]  h-64 rounded-lg"/>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <Skeleton className="h-[124px] w-full"/>
            <div className="container">
                <div className="grid grid-cols-12 gap-8 py-8">
                    <div className="lg:col-span-8 col-span-12 space-y-8">
                        <SkeletonProfile/>
                       <SkeletonWorkExperience/>
                        <ProjectSkeleton/>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div
                            className="p-8 rounded-xl sticky top-24"
                            style={{background: color.background.accent}}
                        >
                            <div className="space-y-5">
                                <div className="">
                                    <Skeleton className="w-1/2 h-4 bg-default-200 rounded-full"/>
                                    <Skeleton className="w-1/4 h-2 bg-default-200 rounded-full mt-2"/>
                                </div>
                                <div className="">
                                    <Skeleton className="w-1/2 h-4 bg-default-200 rounded-full"/>
                                    <Skeleton className="w-1/4 h-2 bg-default-200 rounded-full mt-2"/>
                                </div>
                                <div className="">
                                    <Skeleton className="w-1/2 h-4 bg-default-200 rounded-full"/>
                                    <Skeleton className="w-1/4 h-2 bg-default-200 rounded-full mt-2"/>
                                </div>
                                <div className="">
                                    <Skeleton className="w-1/2 h-4 bg-default-200 rounded-full"/>
                                    <Skeleton className="w-1/4 h-2 bg-default-200 rounded-full mt-2"/>
                                </div>
                                <div className="">
                                    <Skeleton className="w-1/2 h-4 bg-default-200 rounded-full"/>
                                    <Skeleton className="w-1/4 h-2 bg-default-200 rounded-full mt-2"/>
                                </div>
                                <div className="">
                                    <Skeleton className="w-1/2 h-4 bg-default-200 rounded-full"/>
                                <Skeleton className="w-1/4 h-2 bg-default-200 rounded-full mt-2"/>
                            </div>
                            <div className="">
                                <Skeleton className="w-1/2 h-4 bg-default-200 rounded-full"/>
                                <Skeleton className="w-1/4 h-2 bg-default-200 rounded-full mt-2"/>
                            </div>
                            <div className="flex items-center gap-2">
                                <Skeleton className="w-8 h-8 bg-default-200 rounded-full"/>
                                <Skeleton className="w-8 h-8 bg-default-200 rounded-full"/>
                                <Skeleton className="w-8 h-8 bg-default-200 rounded-full"/>
                                <Skeleton className="w-8 h-8 bg-default-200 rounded-full"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            </div>
        </div>
    );
};

