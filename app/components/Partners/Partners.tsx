"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Image} from 'primereact/image';
import Paragraph from "../Paragraph/Paragraph";

export default function Partners() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    breakpoints: {
      "(min-width: 425px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 5, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 7, spacing: 10 },
      },
    },
    slides: { perView: 3, spacing: 10 },
  });
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-center">
          <Paragraph text="Our Trusted Partners" />
        </div>
        <br />
        <div className="navigation-wrapper">
          <div ref={ref} className="keen-slider">
            <div className="keen-slider__slide number-slide1 shadow-none">
              <Image
                className="grayscale hover:grayscale duration-400 transition-all cursor-pointer"
                width="100"
                src={"/assets/brands/google.png"}
                alt=""
              />
            </div>
            <div className="keen-slider__slide number-slide1 shadow-none">
              <Image
                className="grayscale hover:grayscale-0 duration-400 transition-all cursor-pointer"
                width="100"
                src={"/assets/brands/microsoft.png"}
                alt=""
              />
            </div>

              <div className="keen-slider__slide number-slide1 shadow-none">
                  <Image
                      className="grayscale hover:grayscale-0 duration-400 transition-all cursor-pointer"
                      width="100"
                      src={"/assets/brands/google.png"}
                      alt=""

                  />
              </div>
              <div className="keen-slider__slide number-slide1 shadow-none">
                  <Image
                      className="grayscale hover:grayscale-0 duration-400 transition-all cursor-pointer"
                      width="100"
                      src={"/assets/brands/microsoft.png"}
                      alt=""
                  />
              </div>


              <div className="keen-slider__slide number-slide1 shadow-none">
                  <Image
                      className="grayscale hover:grayscale-0 duration-400 transition-all cursor-pointer"
                      width="100"
                      src={"/assets/brands/google.png"}
                      alt=""
                  />
              </div>
              <div className="keen-slider__slide number-slide1 shadow-none">
                  <Image
                      className="grayscale hover:grayscale-0 duration-400 transition-all cursor-pointer"
                      width="100"
                      src={"/assets/brands/microsoft.png"}
                      alt=""
                  />
              </div>


              <div className="keen-slider__slide number-slide1 shadow-none">
                  <Image
                      className="grayscale hover:grayscale-0 duration-400 transition-all cursor-pointer"
                      width="100"
                      src={"/assets/brands/google.png"}
                      alt=""

                  />
              </div>
              <div className="keen-slider__slide number-slide1 shadow-none">
                  <Image
                      className="grayscale hover:grayscale-0 duration-400 transition-all cursor-pointer"
                      width="100"
                      src={"/assets/brands/microsoft.png"}
                      alt=""
                  />
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}
