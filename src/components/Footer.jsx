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
    <div className="footer grid justify-center gap-y-8 px-[5%] py-[50px] bg-red-400 text-white">
      <div className="flex  justify-between gap-x-36">
        <div className="grid gap-y-4 leading-7">
          <img src="/mill1.jpg" alt="" className="w-[200px]" />
          <div className="">
            <p className="text-xl tracking-wide">
              Founded in 1984, Our Rice Mills set out with an ambitious goal to
              bring together and advance various facets of the rice industry.
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="text-2xl font-bold inline-flex mb-4">Products</h2>
          </div>
          <div className="grid gap-y-4">
            <p className="text-lg">Brown Rice</p>
            <p className="text-lg">White Rice</p>
            <p className="text-lg">Sream Rice</p>
            <p className="text-lg">Prebolied Rice</p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="text-2xl font-bold inline-flex mb-4">Category</h2>
          </div>
          <div className="grid gap-y-4">
            <p className="text-lg">Basmati Rice</p>
            <p className="text-lg">Sella Rice</p>
            <p className="text-lg">Non Basmati Rice</p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="text-2xl font-bold inline-flex mb-4">
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
                Tiwana Rice mill, Rudrapur, Uttarakhand, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] bg-red-400 m-0 p-0" />

      <div className="relative">
        <h3 className="text-center text-xl font-medium tracking-wide">
          Copyright{" "}
          <span>
            <i className="ri-copyright-line"></i>
          </span>{" "}
          2024 Tiwana Rice Mills. All Rights Reserved{" "}
        </h3>
        {show && (
          <p onClick={scrollTop} className="fixed bottom-12 right-10">
            <i className="ri-arrow-up-line w-[35px] h-[35px] shadow-2xl rounded-t-xl text-xl bg-white text-red-400 p-4"></i>
          </p>
        )}
      </div>
    </div>
  );
}
