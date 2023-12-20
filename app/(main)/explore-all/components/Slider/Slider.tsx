"use client";
import React, {useState} from "react";
import { useKeenSlider } from "keen-slider/react";
import { bestSeller } from "@/app/utils/staticData";
import { ISeller } from "@/app/utils/interfaces";
import SellerCard from "@/app/components/SellerCard/SellerCard";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        mode: "free",
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
        breakpoints: {
            "(min-width: 425px)": {
                slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 767px)": {
                slides: { perView: 2, spacing: 15 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 15 },
            },
        },
        slides: { perView: 1 },
    });

    return (
            <div className="navigation-wrapper relative">
                <div ref={sliderRef} className="keen-slider ">
                    {bestSeller.map((seller: ISeller, i: number): any => {
                        return (
                            <div key={i} className="keen-slider__slide  ">
                                <SellerCard key={i} data={seller} />
                            </div>
                        );
                    })}
                </div>
                <div className="hidden md:block">
                    {loaded && instanceRef.current && (
                        <>
                            <div className='absolute top-[105px] -left-4 cursor-pointer p-2.5 bg-secondary  shadow rounded-full text-white'>

                                <TfiAngleLeft
                                    size={16}
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}

                                />
                            </div>


                            <div className='absolute top-[105px] -right-4 cursor-pointer p-2.5 bg-secondary shadow rounded-full text-white'>
                                <TfiAngleRight
                                    size={16}
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                    className=""
                                />
                            </div>

                        </>
                    )}
                </div>
            </div>

    );
};

export default Slider;
