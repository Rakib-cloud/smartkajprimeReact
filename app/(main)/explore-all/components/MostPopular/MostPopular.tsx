"use client";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import Slider from "@/app/(main)/explore-all/components/Slider/Slider";

function MostPopular() {
  return (
    <SectionWrapper bg="bg-gray-100">
      <SectionHeading
        title={"Masters of the Marketplace"}
        subTitle="Handpicked by the Masses, Crafted for You – Dive into a World of Excellence with Our Most Popular Sellers!"
        classes="mt-3"
      />

      <Slider/>
    </SectionWrapper>
  );
}

export default MostPopular