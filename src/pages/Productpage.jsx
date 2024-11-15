import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Productpage() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".product-h1", {
      x: -40,
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "top 30%",
        scrub: 2,
      },
    })
      .from(".product-sec1", {
        opacity: 0,
        x: -50,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".product-sec1",
          start: "top center",
          end: "top 30%",
          scrub: 2,
        },
      })
      .from(".product-sec2", {
        x: 50,
        duration: 2,
        opacity: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".product-sec2",
          start: "top center",
          end: "top 30%",
          scrub: 2,
        },
      })
      .from(".product-sec3", {
        x: -50,
        duration: 2,
        opacity: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".product-sec3",
          start: "top center",
          end: "top 30%",
          scrub: 2,
        },
      })
      .from(".product-sec4", {
        x: 50,
        duration: 2,
        opacity: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".product-sec4",
          start: "top center",
          end: "top 30%",
          scrub: 2,
        },
      });
  });
  return (
    <>
      <Navbar />
      <div className="product w-full h-full bg-red-200 pt-[75px]">
        <div className="product-h1">
          <h1 className="product-h1-h1 px-[5%] py-8 text-2xl font-semibold sm:px-[10%] sm:py-12 sm:text-4xl sm:font-bold tracking-wide text-white">
            OUR PRODUCTS
          </h1>
        </div>
        <div className="product-sec grid justify-center  gap-y-8 px-[10%] py-[100px]">
          <div className="product-sec1 bg-white flex items-center justify-between p-4 w-auto gap-y-4 flex-col lg:px-8  lg:py-6 lg:flex-row lg:gap-x-16">
            <img
              src="https://www.skrmindia.com/images/Brown-Rice-%20skrm.jpg"
              alt=""
              className="w-[350px] h-[250px] sm:w-[500px] sm:h-[300px]"
            />
            <div className="">
              <h1 className="text-3xl sm:text-5xl">Brown Rice</h1>
            </div>
          </div>
          <div className="product-sec2 bg-white flex items-center justify-between p-4 w-auto gap-y-4 flex-col-reverse lg:px-8  lg:py-6 lg:flex-row lg:gap-x-16">
            <div className="">
              <h1 className="text-3xl sm:text-5xl">White Rice</h1>
            </div>
            <img
              src="https://www.skrmindia.com/images/Raw-Rice-%20skrm.jpg"
              alt=""
              className="w-[350px] h-[250px] sm:w-[500px] sm:h-[300px]"
            />
          </div>
          <div className="product-sec3 bg-white flex items-center justify-between p-4 w-auto gap-y-4 flex-col lg:px-8  lg:py-6 lg:flex-row lg:gap-x-16">
            <img
              src="https://www.skrmindia.com/images/Steam-Rice-%20skrm.jpg"
              alt=""
              className="w-[350px] h-[250px] sm:w-[500px] sm:h-[300px]"
            />
            <div className="">
              <h1 className="text-3xl sm:text-5xl">Steam Rice</h1>
            </div>
          </div>
          <div className="product-sec4 bg-white flex items-center  justify-between p-4  gap-y-4 flex-col-reverse lg:px-8  lg:py-6 lg:flex-row lg:gap-x-16">
            <div className="">
              <h1 className="text-3xl sm:text-5xl">Parboiled Rice</h1>
            </div>
            <img
              src="https://www.skrmindia.com/images/Parboiled-Rice-%20skrm.jpg"
              alt=""
              className="w-[350px] h-[250px] sm:w-[500px] sm:h-[300px]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
