"use client";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import Slider from "@/app/(main)/explore-all/components/Slider/Slider";

const MayLike = () => {
  return (
    <SectionWrapper>
      <SectionHeading
        title={"Discover Your Perfect Match "}
        subTitle="Sellers You'll Adore! Handpicked Selections Tailored to Your Tastes Await – Unearth a World of Likeminded Expertise."
        classes="mt-3"
      />
      <Slider/>
    </SectionWrapper>
  );
};

export default MayLike;
