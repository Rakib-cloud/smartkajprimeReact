"use client";
import React from "react";
import Continue from "./components/Continue/Continue";
import MostPopular from "./components/MostPopular/MostPopular";
import MayLike from "./components/MayLike/MayLike";
import VerifiedServices from "./components/VerifiedServices/VerifiedServices";
import Banner from "@/app/components/Banner/Banner";
import Loading from "@/app/(main)/explore-all/loading";

export default function AllSeller() {
  const bannerData = {
    title: "Explore SmartKaj",
    description:"Explore SmartKaj, a dynamic and versatile online marketplace designed to cater to your every need.SmartKaj is your personalized hub, offering tailored services that match your unique requirements.Embark on your SmartKaj journey today, where the spirit of exploration meets the smart marketplace experience, reminiscent of the world-class service",
  };

  return (
    <main>
      <Banner data={bannerData} />
      <Continue />
      <MostPopular />
      <MayLike />
      <VerifiedServices />
    </main>
  );
}
