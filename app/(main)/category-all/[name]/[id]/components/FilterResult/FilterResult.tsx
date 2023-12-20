"use client";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import SellerCard from "@/app/components/SellerCard/SellerCard";
import { ISeller } from "@/app/utils/interfaces";
import { bestSeller } from "@/app/utils/staticData";
import { Pagination } from "@nextui-org/react";
import React from "react";

export default function FilterResult() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-3 gap-4">
        {bestSeller.map((seller: ISeller, i: number): any => {
          return <SellerCard key={i} data={seller} />;
        })}
      </div>
      <div className="flex items-center justify-center mt-16">
        <Pagination total={10} initialPage={1} size={"sm"} />
      </div>
    </SectionWrapper>
  );
}
