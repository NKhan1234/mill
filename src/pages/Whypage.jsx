import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useState } from "react";

const whyUs = [
  {
    id: 1,
    icon: <i className="ri-shield-check-line"></i>,
    heading: "Superior Grain Quality",
    detail:
      "We meticulously source and process only the finest grains, ensuring a rich taste and optimal texture in every batch.",
  },
  {
    id: 2,
    icon: <i className="ri-stackshare-line"></i>,
    heading: "State-of-the-Art Technology",
    detail:
      "Our modern milling equipment preserves grain quality while enhancing purity and consistency in each product.",
  },
  {
    id: 3,
    icon: <i className="ri-service-line"></i>,
    heading: "Commitment to Sustainability",
    detail:
      "We prioritize eco-friendly practices, supporting local farmers and reducing waste to create a positive environmental impact.",
  },
  {
    id: 4,
    icon: <i className="ri-verified-badge-line"></i>,
    heading: "Stringent Quality Control",
    detail:
      "Each grain undergoes rigorous testing to ensure it meets our high standards for taste, appearance, and nutritional value.",
  },
  {
    id: 5,
    icon: <i className="ri-service-fill"></i>,
    heading: "Customized Solutions",
    detail:
      "We offer tailored solutions for clients, providing a range of rice types and packaging options to meet diverse needs.",
  },
];

export default function Productpage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    setCurrentIndex(currentIndex === 0 ? whyUs.length - 1 : currentIndex - 1);
  }

  function handleNext() {
    setCurrentIndex(currentIndex === whyUs.length - 1 ? 0 : currentIndex + 1);
  }
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".why-h1", {
      x: -40,
      duration: 1.5,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".why",
        start: "top center",
        end: "top 30%",
        scrub: 1,
      },
    })
      .from(".why-content ", {
        x: -40,
        duration: 1.5,
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".why-h1",
          start: "top center",
          end: "top 30%",
          scrub: 1,
        },
      })
      .from(".why-p p", {
        x: -40,
        duration: 1.5,
        opacity: 0,
        ease: "power1.inOut",
        stagger: {
          each: 0.4,
          from: "edges",
        },
        scrollTrigger: {
          trigger: ".why-h1",
          start: "top center",
          end: "top 30%",
          scrub: 1,
        },
      });
  });
  return (
    <>
      <Navbar />
      <div className="w-full h-full pt-[75px]">
        <div className="why-h1">
          <h1 className=" px-[5%] py-8 text-2xl font-semibold sm:px-[10%] sm:py-12 sm:text-4xl sm:font-bold tracking-wide text-white">
            Why Us
          </h1>
        </div>
        <div className="relative grid items-center justify-center mt-8 px-[3%] sm:px-[5%]">
          <div className="why-content bg-white text-black px-8 py-6  md:px-16 md:py-12 rounded-md text-center h-full">
            <h1 className="text-lg sm:text-xl md:text-3xl font-medium">
              {whyUs[currentIndex].icon}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold ">
              {whyUs[currentIndex].heading}
            </h2>
            <p className="text-sm md:text-md">{whyUs[currentIndex].detail}</p>
          </div>
          <div className="why-p flex justify-between mt-4">
            <p
              onClick={handlePrev}
              className="absolute top-full left-[30%] sm:left-[40%] cursor-pointer"
            >
              <i className="ri-arrow-left-s-line w-[25px] h-[25px] p-2 sm:w-[30px] sm:h-[30px] bg-black text-white sm:p-3 rounded-full text-md md:text-lg"></i>
            </p>
            <p
              onClick={handleNext}
              className=" absolute top-full right-[30%] sm:right-[40%] cursor-pointer"
            >
              <i className="ri-arrow-right-s-line w-[25px] h-[25px] p-2 sm:w-[30px] sm:h-[30px] bg-black text-white sm:p-3 rounded-full text-md md:text-lg"></i>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
