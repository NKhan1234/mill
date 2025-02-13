import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.from(".footer", {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".footer",
        start: "top center",
        end: "top 30%",
        scrub: 2,
      },
    });
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer grid justify-center gap-y-8 px-[5%] py-[50px] bg-red-400 text-white ">
      <div className="flex justify-between gap-y-8 flex-col-reverse md:flex-row gap-x-12 lg:gap-x-24 xl:gap-x-36">
        <div className="grid gap-y-4 lg:gap-y-2 leading-7">
          <div className="">
            <p className="text-sm sm:text-md lg:text-lg tracking-wide">
              Founded in 1984, Our Rice Mill set out with an ambitious goal to
              bring together and advance various facets of the rice industry.
            </p>
          </div>
          <div className="flex items-center gap-x-8">
            <p>
              <i className="ri-facebook-fill social p-2 text-xl md:text-2xl md:p-3 rounded-full border-2 border-solid border-white text-white "></i>
            </p>
            <p>
              <i className="ri-whatsapp-fill social p-2 text-xl md:text-2xl md:p-3 rounded-full border-2 border-solid border-white text-white"></i>
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="sm:text-lg lg:text-2xl font-bold inline-flex mb-4">
              Products
            </h2>
          </div>
          <div className="grid gap-y-4">
            <p className="text-sm sm:text-sm lg:text-lg">Brown Rice</p>
            <p className="text-sm sm:text-sm lg:text-lg">White Rice</p>
            <p className="text-sm sm:text-sm lg:text-lg">Sream Rice</p>
            <p className="text-sm sm:text-sm lg:text-lg">Prebolied Rice</p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="sm:text-lg lg:text-2xl font-bold inline-flex mb-4">
              Category
            </h2>
          </div>
          <div className="grid gap-y-4">
            <p className="text-sm sm:text-sm lg:text-lg">Basmati Rice</p>
            <p className="text-sm sm:text-sm lg:text-lg">Sella Rice</p>
            <p className="text-sm sm:text-sm lg:text-lg">Non Basmati Rice</p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="sm:text-lg lg:text-2xl font-bold inline-flex mb-4">
              Contact Detail
            </h2>
          </div>
          <div className="grid gap-y-4">
            <div className="">
              <p>
                <span>
                  <i className="ri-phone-line"></i>
                </span>{" "}
                +91-9847478333
              </p>
              <p className="flex gap-x-2">
                <span>
                  <i className="ri-mail-line"></i>
                </span>{" "}
                youremail@gmail.com
              </p>
            </div>
            <div className="">
              <p className="text-md">
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>{" "}
                Durga Enterprises, Rudrapur, Uttarakhand, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] bg-red-400 m-0 p-0" />

      <div className="">
        <h3 className="text-center text-sm sm:text-xl font-medium tracking-wide">
          Copyright{" "}
          <span>
            <i className="ri-copyright-line"></i>
          </span>{" "}
          2024 Durga Enterprises. All Rights Reserved{" "}
        </h3>
        {show && (
          <p onClick={scrollTop} className="fixed bottom-12 right-10 upper-i">
            <i className="ri-arrow-up-line  w-[30px] h-[35px] shadow-3xl text-2xl bg-stone-700 text-red-400 p-3"></i>
          </p>
        )}
      </div>
    </div>
  );
}
