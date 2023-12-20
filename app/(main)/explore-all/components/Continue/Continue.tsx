"use client";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import Slider from "../Slider/Slider"
const Continue = () => {
  return (
    <SectionWrapper>
      <SectionHeading
        title={"Five-Star Maestros"}
        subTitle="Revel in the Mastery of Our Top Rated Sellers – Where Every Note Strikes Five-Star Harmony!"
        classes="mt-3"
      />
    <Slider/>
    </SectionWrapper>
  );
};

export default Continue;
