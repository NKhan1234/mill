import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Product() {
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
      <div className="product w-full h-full bg-red-200 px-[10%] py-[120px]">
        <div className="mb-6">
          <h1 className="product-h1 text-center text-4xl font-semibold tracking-wide text-black">
            OUR PRODUCTS
          </h1>
        </div>
        <div className="product-sec grid justify-center  gap-y-8">
          <div className="product-sec1 bg-white flex justify-between px-8 gap-x-36 py-6 w-auto">
            <img
              src="https://www.skrmindia.com/images/Brown-Rice-%20skrm.jpg"
              alt=""
              className="w-[500px] h-[300px]"
            />
            <div className="">
              <h1 className="text-5xl">Brown Rice</h1>
              <button className="btn6 mt-8 px-8 py-4 outline-none border-none bg-red-600 text-white flex items-center justify-center text-xl">
                Know More
              </button>
            </div>
          </div>
          <div className="product-sec2 bg-white flex justify-between px-8 gap-x-36 py-6 w-auto">
            <div className="">
              <h1 className="text-5xl">White Rice</h1>
              <button className="btn6 mt-8 px-8 py-4 outline-none border-none bg-red-600 text-white flex items-center justify-center text-xl">
                Know More
              </button>
            </div>
            <img
              src="https://www.skrmindia.com/images/Raw-Rice-%20skrm.jpg"
              alt=""
              className="w-[500px] h-[300px]"
            />
          </div>
          <div className="product-sec3 bg-white flex justify-between gap-x-36 px-8 py-6 w-auto">
            <img
              src="https://www.skrmindia.com/images/Steam-Rice-%20skrm.jpg"
              alt=""
              className="w-[500px] h-[300px]"
            />
            <div className="">
              <h1 className="text-5xl">Steam Rice</h1>
              <button className="btn6 mt-8 px-8 py-4 outline-none border-none bg-red-600 text-white flex items-center justify-center text-xl">
                Know More
              </button>
            </div>
          </div>
          <div className="product-sec4 bg-white flex justify-between gap-x-36 px-8 py-6 w-auto">
            <div className="">
              <h1 className="text-5xl">Parboiled Rice</h1>
              <button className="btn6 mt-6 px-8 py-4 text-xl font-semibold outline-none border-none bg-red-600 text-white flex items-center justify-center ">
                Know More
              </button>
            </div>
            <img
              src="https://www.skrmindia.com/images/Parboiled-Rice-%20skrm.jpg"
              alt=""
              className="w-[500px] h-[300px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
