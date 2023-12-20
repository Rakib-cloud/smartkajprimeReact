"use client";
import Slider from "./components/Slider/Slider";
import Category from "./components/Category/Category";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Blogs from "./components/Blogs/Blogs";
import FullBanner from "../components/FullBanner/FullBanner";
import PopularServices from "./components/PopularServices/PopularServices";
import Partners from "../components/Partners/Partners";
import ServiceReq from "./components/ServiceReq/ServiceReq";
import Seller from "@/app/(main)/components/Seller/Seller";

export default function Home() {
  //   hlw
  return (
    <main>
      <Slider />
      <Category />
      <ChooseUs />
      <PopularServices />
      <FullBanner />
       <Seller/>
      {/* <MostPopular/> */}
      {/*<UserGuide />*/}
      <Partners />
      <Blogs />
      <ServiceReq />
    </main>
  );
}
