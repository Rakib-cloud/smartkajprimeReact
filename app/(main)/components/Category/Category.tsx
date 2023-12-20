"use client";
import {useKeenSlider} from "keen-slider/react";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import SliderCategoryCard from "@/app/components/CategoryCard/SliderCategoryCard";
import {useFetch} from "@/app/hooks/useFetch";

export default function Category() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    breakpoints: {
      "(min-width: 425px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
    slides: { perView: 1 },
  });

  const url = `/categories/getAll/5/1`;

  const { data: categories, loading, totalData, setData } = useFetch(url, [
  ]);

  return (
    <section className="py-16">
      <div className="container">
        <SectionHeading
          title={"All Category"}
          subTitle="2020 jobs live – 293 added today."
          link="/category-all"
        />
        <div className="navigation-wrapper">
          <div ref={ref} className="keen-slider">
            {categories?.map((cat:any, i:number) => (
                <SliderCategoryCard data={cat} key={i}/>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
