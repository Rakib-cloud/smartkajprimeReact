"use client";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import Slider from "@/app/(main)/explore-all/components/Slider/Slider";

const VerifiedServices = () => {
  return (
    <SectionWrapper bg="bg-gray-100">
      <SectionHeading
        title={"Fresh Faces, Bold Offerings"}
        subTitle="Embark on a Journey with Our Latest Sellers – Where Novelty Meets Excellence."
        classes="mt-3"
      />

      <Slider/>
    </SectionWrapper>
  );
};

export default VerifiedServices;
