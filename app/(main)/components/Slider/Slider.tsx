"use client";
import { useKeenSlider } from "keen-slider/react";
import SliderText from "@/app/(main)/components/Slider/SliderText";
import {useState} from "react";
import "keen-slider/keen-slider.min.css"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },

  },
      [
        (slider) => {
          let timeout: string | number | NodeJS.Timeout | undefined;
          let mouseOver = false;

          function clearNextTimeout() {
            clearTimeout(timeout);
          }

          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 3000);
          }

          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ],
  )

  const sliders = [

    {
      url: "https://i.ibb.co/XjThtSx/slider.jpg",
    },
    {
      url: "https://i.ibb.co/R0MWGMw/slider2.jpg",
    },
    {
      url: "https://i.ibb.co/B4DSd0V/slider1.jpg",
    },
  ];


  return (
      <div className={"navigation-wrapper"}>
      <div ref={sliderRef} className="keen-slider h-[550px]">
        {sliders?.map((slide, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${slide?.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "450px",
            }}
            className={`keen-slider__slide number-slide${i + 1}`}
          ></div>
        ))}
        <div className={'absolute w-full h-full z-20 flex items-center'}>
          <div className={"container"}>
            <SliderText />
          </div>
        </div>


      </div>

        {loaded && instanceRef?.current?.track.details.slides.length && (
            <div className="dots">
              {Array.from({ length: instanceRef.current.track.details.slides.length }, (_, idx) => (
                  <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx);
                      }}
                      className={`dot ${currentSlide === idx ? "active" : "" }`}
                  ></button>
              ))}
            </div>
        )}
      </div>
  );
};

export default Slider;
